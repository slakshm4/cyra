// test_ollama_fetch.js
// Run: node test/test_ollama_fetch.js
const payload = {
  model: 'my-friend-bot',
  messages: [{ role: 'user', content: 'hello friend, i am tired' }],
  stream: false
};

async function run(){
  try{
    const res = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    if(!res.ok){
      console.error('Status', res.status, res.statusText);
      const txt = await res.text();
      console.error(txt);
      return;
    }
    const j = await res.json();
    console.log('Response:', JSON.stringify(j, null, 2));
  }catch(e){
    console.error('Fetch error:', e.message);
  }
}

run();
