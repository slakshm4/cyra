// app.js (module)
const messagesEl = document.getElementById('messages');
const form = document.getElementById('inputForm');
const userInput = document.getElementById('userInput');
const useTTS = document.getElementById('useTTS');
const geminiKeyInput = document.getElementById('geminiKey');

import { isCrisisMessage, crisisResources } from './crisisResources.js';

function handleUserInput(userMessage) {
  if (isCrisisMessage(userMessage)) {
    return {
      type: 'crisis',
      message: crisisResources,
    };
  }

  // Continue to normal AI response logic
  return {
    type: 'normal',
    message: generateResponse(userMessage),
  };
}

function appendMessage(text, who='assistant'){
  const d = document.createElement('div');
  d.className = 'msg ' + (who === 'user' ? 'user' : 'assistant');
  d.textContent = text;
  messagesEl.appendChild(d);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function checkCrisis(text){
  return CRISIS_PATTERNS.some(rx => rx.test(text));
}

function crisisFlow(){
  const msg = `I'm really sorry you're feeling this way. I can't help in an emergency. If you are in immediate danger please call local emergency services now (e.g. 911). If you're in the U.S. or Canada, you can dial 988 for crisis support. Would you like grounding exercises or resources?`;
  appendMessage(msg, 'assistant');
  if(useTTS.checked) speak(msg);
}

function speak(text){
  if(!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  u.voice = voices.find(v => v.lang.includes('en')) || voices[0];
  u.rate = 1;
  speechSynthesis.speak(u);
}

async function askLocalModel(userText){
  // Pre-check: crisis
  if(checkCrisis(userText)){
    crisisFlow();
    return;
  }

  appendMessage(userText, 'user');

  // Build request payload for ollama local chat
  const payload = {
    model: 'cyra',
    messages: [{ role: 'user', content: userText }],
    stream: false
  };

  try {
    const res = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if(!res.ok){
      const txt = await res.text();
      const err = `Local model error: ${res.status} ${res.statusText} — ${txt}`;
      appendMessage(err, 'assistant');
      if(useTTS.checked) speak('I am having trouble connecting to the local model.');
      return;
    }

    const j = await res.json();

    // Ollama return formats vary; try to parse common shapes
    let assistantText = '';
    if(j?.choices?.[0]?.message?.content){
      assistantText = j.choices[0].message.content;
    } else if(j?.output?.[0]?.content){
      assistantText = j.output[0].content;
    } else if(typeof j === 'object'){
      assistantText = JSON.stringify(j);
    } else {
      assistantText = String(j);
    }

    appendMessage(assistantText, 'assistant');
    if(useTTS.checked) speak(assistantText);

  } catch(err){
    appendMessage('Error connecting to local model: ' + err.message, 'assistant');
    if(useTTS.checked) speak('I could not connect to the local model. Make sure Ollama is running on this machine.');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = userInput.value.trim();
  if(!text) return;
  askLocalModel(text);
  userInput.value = '';
});
