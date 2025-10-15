# Cyra — A Companion Chatbot for Primary Care Providers

**Cyra** (from the Persian **"سیرا"**, meaning *sun* or *throne*) symbolizes warmth, light, guidance, and clarity.  
It is an empathy-centered, trauma-informed AI companion designed to support people experiencing loneliness, stress, or burnout — especially healthcare professionals who may struggle to access therapy or emotional support.

Cyra runs locally using a fine-tuned **Mistral** model through **Ollama**, ensuring privacy and ethical safety while offering meaningful, human-like interaction.

---

## Features

- **Conversational AI:** Fine-tuned [Mistral](https://mistral.ai) model via [Ollama](https://ollama.ai)
- **Empathetic & trauma-informed:** Gentle and validating responses
- **Crisis detection system:** Identifies crisis language and provides helpline resources
- **Privacy-first:** Runs fully locally; no data storage or transmission
- **Optional voice integration:** (Planned) Gemini or ElevenLabs realistic voices
- **Web-ready:** Deployable to GitHub Pages or Cloudflare Pages without a paid server

---

## Setup on macOS

### Prerequisites
- macOS (I'm running Sequoia 15.5)
- [Ollama](https://ollama.ai) installed  
- [Node.js](https://nodejs.org) (LTS recommended)  
- [VS Code](https://code.visualstudio.com)

### Steps

1. **Clone the repository**
   git clone https://github.com/yourusername/cyra.git
   cd cyra
2. **Install dependencies**
   npm install
3. **Start Ollama with mistral**
   ollama pull mistral
   ollama run mistral
4. **Run the app locally**
   npx serve
5. **Deploy to GitHub Pages**
   git add .
   git commit -m "Initial Cyra release"
   git push origin main
6. Then enable Pages in GitHub repository settings → main branch → /root.

---

## File Structure

<h2>🧩 File Structure</h2>
<pre>
cyra/
├── CODE_OF_CONDUCT.md       - Guidelines for contributors and ethical usage
├── CrisisRes.js             - Initial crisis regex patterns and resources
├── LICENSE                  - MIT License with ethical guidelines and disclaimers
├── README.md                - Documentation and setup instructions for Cyra
├── app.js                   - Chatbot logic with crisis message handling
├── index.html               - Web interface for Cyra
└── style.css                - Styling for the chatbot interface
</pre>

### Crisis Detection

Cyra’s crisis logic scans for distress indicators, detailed in crisisRes.js 

When triggered, Cyra immediately provides relevant helplines.

Example Response:

I’m really concerned about your safety. You’re not alone — please reach out for immediate help:

🇨🇦 Canada: Suicide & Crisis Lifeline - 988
🇺🇸 U.S.: Suicide & Crisis Lifeline — 988
🇬🇧 U.K.: Samaritans — 116 123
🇮🇳 India: AASRA Helpline — 91-9820466726
🌍 International: findahelpline.com

---

## Safety & Ethics

This chatbot includes built-in crisis phrase detection to ensure user safety.
If a message suggests suicidal ideation, self-harm, or immediate danger,
the bot automatically provides professional crisis resources and halts normal responses.

The model does **not** store user data, log conversations, or attempt to diagnose users.
It is **not a substitute for therapy or emergency care**.

---

## License

This project is licensed under the MIT license - please refer to org/License.md for further details.

---

## Code of Conduct

Please refer to org/Code_of_Conduct.md for further details.
