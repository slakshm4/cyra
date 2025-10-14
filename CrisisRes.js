// crisisResources.js
// -----------------------------------------------
// Provides regex detection for crisis-related language
// and a unified message for immediate help.
// -----------------------------------------------

export const crisisRegexes = [
  // --- Explicit suicide intent ---
  /(?:i\s*(want|plan|need|feel like)\s*to\s*)?(?:kill|end|hurt|harm)\s*my\s*self/i,
  /(?:thinking|thoughts|thinking about)\s*(?:suicide|killing myself|ending it all)/i,
  /\bi\s*(?:want|plan|need)\s*to\s*(?:die|disappear|not exist)\b/i,
  /\b(?:no reason to live|life isn'?t worth living)\b/i,
  /\b(?:can't|cannot)\s*(?:go on|keep going|take this anymore)\b/i,
  /\b(?:ending|finish|stop)\s*(?:it all|everything|my life)\b/i,
  /(?:how\s*to|ways\s*to)\s*(?:kill|hang|overdose|poison)\s*(?:myself|me)?/i,
  /\b(?:goodbye forever|this is goodbye|won'?t be here tomorrow)\b/i,
  /(?:suicide|self harm)\s*(?:hotline|help|support)/i,

  // --- Overdose / self-harm methods ---
  /\b(?:overdose|OD|cutting|cut myself|slit|bleed out|jump off|bridge|gun|pills)\b/i,
  /\b(?:take|swallow)\s*(?:too many|a bunch of|a bottle of)\s*(?:pills|meds|medicine)\b/i,
  /(?:razor|knife|blade|rope|noose|shoot myself)/i,

  // --- Hopelessness / despair ---
  /\b(?:nothing matters|no one cares|i'?m worthless|i'?m a burden)\b/i,
  /\b(?:hopeless|helpless|tired of living|tired of everything)\b/i,
  /\b(?:wish i were dead|wish i could die|wish it would end)\b/i,
  /\b(?:everything hurts|i hate myself|i deserve to die)\b/i,

  // --- Immediate danger / urgency ---
  /\b(?:immediate danger|urgent help|right now i might|about to do something)\b/i,
  /\b(?:emergency|help me now|please stop me|can’t control it)\b/i,

  // --- Self-harm without suicide intent ---
  /\b(?:cut|scratch|burn|hurt)\s*(?:myself|me)\b/i,
  /\bi\s*(?:want|need|feel like)\s*to\s*(?:bleed|feel pain|hurt)\b/i,
  /\b(?:release pain|deserve pain|self punishment)\b/i,

  // --- Eating disorder / body harm ---
  /\b(?:starve|purge|throw up|binge|don’t eat|refuse to eat)\b/i,
  /\b(?:i hate my body|want to disappear|too fat|disgusting self)\b/i,

  // --- Abuse / domestic violence / unsafe environment ---
  /\b(?:he|she|they)\s*(?:hit|hurt|abuse|threaten|force|rape)\s*(?:me|us)?\b/i,
  /\b(?:unsafe|afraid|scared|in danger|can’t go home)\b/i,
  /\b(?:my partner|my dad|my mom|someone|they)\s*(?:will kill me|are going to hurt me)\b/i,

  // --- Grief and loss (may escalate into crisis) ---
  /\b(?:i lost|my friend died|my parent died|my child died|can’t handle loss)\b/i,
  /\b(?:i miss them so much|i can’t live without them)\b/i,
];

// 🌍 Multiregion crisis helplines
export const crisisResources = `
If you’re in crisis or feeling unsafe, you are **not alone**.  
Please reach out right now for confidential support:

🇨🇦 **Canada** — Talk Suicide Canada: 1-833-456-4566  
🇺🇸 **U.S.** — 988 Suicide & Crisis Lifeline: **988**  
🇬🇧 **United Kingdom** — Samaritans: 116 123  
🇦🇺 **Australia** — Lifeline: 13 11 14  
🇮🇳 **India** — AASRA Helpline: 91-9820466726  
🌍 **Find international hotlines:** [findahelpline.com](https://findahelpline.com)

If you are in immediate danger, please contact your local emergency services.
`;

// Function to check for crisis phrases
export function isCrisisMessage(inputText) {
  return crisisRegexes.some((regex) => regex.test(inputText));
}
