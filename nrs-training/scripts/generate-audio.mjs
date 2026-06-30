/**
 * NRS Training Series — ElevenLabs Audio Generator
 *
 * Run this on your LOCAL machine (not the cloud sandbox):
 *   node scripts/generate-audio.mjs
 *
 * Prerequisites:
 *   - Node.js 18+  (uses built-in fetch)
 *   - Your ElevenLabs API key set below (or as env var ELEVENLABS_API_KEY)
 *   - Internet access to api.elevenlabs.io
 *
 * Output: public/audio/ep01.mp3 … ep10.mp3
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'audio');

// ── CONFIG ────────────────────────────────────────────────────────────────────
const API_KEY = process.env.ELEVENLABS_API_KEY || 'sk_f9b08f2dbfe34778273247aab0680b6bfe37744c81401ed5';
const MODEL_ID = 'eleven_multilingual_v2';

// Voice settings for Amara — Nigerian English, warm & professional
const VOICE_SETTINGS = {
  stability: 0.65,
  similarity_boost: 0.80,
  style: 0.25,
  use_speaker_boost: true,
};

/**
 * HOW TO GET A NIGERIAN ENGLISH VOICE ID:
 *
 * Option A — Voice Library search (recommended):
 *   1. Go to https://elevenlabs.io/voice-library
 *   2. Search "Nigerian" or "West African"
 *   3. Find a female, professional voice you like → click "Add to My Voices"
 *   4. Copy the voice_id from the URL or your My Voices page
 *   5. Paste it as VOICE_ID below
 *
 * Option B — Voice Design (create from scratch):
 *   curl -X POST https://api.elevenlabs.io/v1/voice-generation/generate-voice \
 *     -H "xi-api-key: YOUR_KEY" -H "Content-Type: application/json" \
 *     -d '{"gender":"female","age":"middle_aged","accent":"african","accent_strength":1.5,"text":"Welcome! My name is Amara, and on behalf of the Nigeria Revenue Service — E kaabo! You are now part of something truly great."}'
 *   → Returns a generated_voice_id you can then save and use below.
 *
 * Known Nigerian English voices in the ElevenLabs library (check availability):
 *   - Search: "Ngozi", "Amara", "Chioma", "Adaeze", "Nigerian English"
 *
 * FALLBACK: The script defaults to "Rachel" (American English) so you can test
 * the full pipeline end-to-end before swapping in the Nigerian voice.
 */
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID
  || 'YOUR_NIGERIAN_ENGLISH_VOICE_ID'   // ← Replace this
  || '21m00Tcm4TlvDq8ikWAM';            // fallback: Rachel (for pipeline testing)

// ── EPISODE SCRIPTS ───────────────────────────────────────────────────────────
const EPISODES = [
  {
    id: 1,
    script: `Welcome! Welcome! My name is Amara, and on behalf of the Nigeria Revenue Service — E kaabo! You are now part of something truly great.

The NRS Headquarters here in Abuja is not just any building. It is a world-class facility designed to accommodate approximately three thousand staff members, and to welcome up to five hundred visitors every single day.

This magnificent building stands on sixteen suspended floors — and each floor is divided into three wings that overlook a beautiful central atrium.

Down in the basement, we have a fully equipped gymnasium, a crèche for nursing mothers, our archive, prayer rooms, and a clinic. On the ground floor — a visitors' lounge, a café, and our main cafeteria. And on the first floor — our library, the grand auditorium, and fully equipped meeting rooms.

This is YOUR home. Your workplace. Your community.

Over the next ten videos, I will walk you through everything you need to know to thrive here. Welcome to NRS HQ — let us begin!`,
  },
  {
    id: 2,
    script: `Now that you know what our headquarters contains — let me show you how to find your way around.

Our building has sixteen floors, and each one follows the same three-wing layout. Wing A faces east, Wing B faces west, and Wing C faces north — all three looking down into the central atrium below.

When you enter the building at ground level, you will find the main reception and the visitors' lounge immediately to your right. The lifts — we have multiple banks — are clearly signposted in each wing.

Here is a tip from me to you: learn your wing and your floor number on day one. Tell your colleagues too. It will save you so much time!

If you ever get lost — which, I promise, will only happen once — look for the floor directory boards mounted at the lift lobby on every floor. They show you exactly where every department is located.

Remember: ground floor for food and guests, first floor for learning, and basement for your wellness needs.

You belong here — navigate with confidence!`,
  },
  {
    id: 3,
    script: `The NRS Headquarters is not just a beautiful building — it is a smart building. And today, I want to take you through the technology that keeps everything running.

First — your desk phone. We use IP telephony across the entire building. This means your phone number stays with you no matter which desk you are working from. Simply log in, and your extension follows you. No more "I was at a different desk" excuses!

Second — our CCTV system monitors all public areas, corridors, lifts, and entry points around the clock. This is for your safety. Please do not tamper with any cameras or monitoring equipment.

Third — and this one is important — the Central Clearing House, or CCH. The CCH is our integrated data and document management system. All official NRS transactions pass through it. Your training on the CCH will come separately, but know this: it is the heartbeat of our operations.

Finally, our network infrastructure supports all your digital work needs — wired and wireless connectivity throughout.

Technology is here to serve you. Use it wisely!`,
  },
  {
    id: 4,
    script: `Our headquarters is a premium facility — and keeping it that way is a shared responsibility. Today, let us talk about how this building is managed, and what your role is in keeping it excellent.

Lifts: We have multiple lift banks across each wing. Please use the lift for three or more floors. For one or two floors — use the stairs. It is good for your health, and it keeps our lifts available for those who need them most.

Electrical services: Do not plug in personal appliances — kettles, heaters, or fans — without prior approval from Facility Management. Our electrical load is carefully managed. Unauthorised appliances can cause disruptions.

Cleaning: Our professional cleaning team maintains the building to the highest standard. But we must all do our part. Please keep your workstation tidy, do not leave food out overnight, and report spills immediately.

If you notice a fault — a broken light, a leaking pipe, a faulty socket — report it immediately through the Facility Management portal on your computer. Every report is logged and assigned within twenty-four hours.

Together, we keep this building excellent!`,
  },
  {
    id: 5,
    script: `The NRS Headquarters is a controlled, high-security federal facility. And that means every one of us has a role to play in keeping it safe.

Let us start with access. To enter this building, you must present your NRS staff ID at all entry points — every single time. No ID, no entry. This applies to everyone — including senior officers. There are no exceptions.

Visitors must be pre-registered. If you are expecting a guest, register them through the Visitor Management System at least twenty-four hours in advance. Unregistered visitors cannot enter — and you will be responsible for your guest at all times while they are in the building.

Tailgating — that is, following someone through a secure door without using your own access — is strictly prohibited. Always badge in individually.

Now, safety: familiarise yourself with the emergency exit routes on your floor. They are marked in green. We conduct fire drills regularly — take them seriously. If you hear an alarm, do not wait. Evacuate immediately using the nearest staircase. Never use the lifts during an emergency.

Security is everyone's responsibility. Protect your NRS family!`,
  },
  {
    id: 6,
    script: `Ah, parking! I know this is one that matters to many of you. So let me walk you through how our car park works — so you know exactly what to expect from day one.

The NRS Headquarters features a modern, multi-level car park with a designated number of spaces. Now — and this is important — parking spaces are allocated, not free-for-all.

When you join the NRS, your parking allocation is determined by your grade level and the availability of spaces. You will receive written confirmation of your allocated space, if you are eligible. Please do not park in an unallocated space, even "just for today." Our enforcement team patrols regularly, and penalties apply.

To access the car park, you will use your NRS access card at the barrier. This logs your entry and exit. If your card fails to work, report it to the Security Desk immediately.

Motorcycle and bicycle parking is available at the designated zones near the rear entrance.

Carpooling is encouraged — it reduces congestion and is better for all of us. If you are interested in carpooling with colleagues, speak to Human Capital Management.

Let us keep our car park orderly and fair for everyone!`,
  },
  {
    id: 7,
    script: `You have rights here at NRS — and you also have responsibilities. Today, let us talk about both.

Human Capital Management — or HCM — is your first point of contact for all staff welfare matters. From your employment records, to leave applications, to welfare benefits — the HCM team is here to support you.

Your working hours are clearly defined in your terms of engagement. Please adhere to them. If you need to adjust your hours — for medical reasons, family commitments, or other needs — speak to your line manager and copy in HCM.

Our dress code is professional at all times. NRS is a federal institution, and how we present ourselves matters. Smart formal attire is expected Monday to Thursday. Check your HR handbook for full guidelines.

If you ever experience a workplace issue — whether it is about your conditions of service, a conflict with a colleague, or a concern about management conduct — you have the right to raise a grievance formally and confidentially. Use the HCM grievance portal or speak directly to an HCM officer.

No issue is too small. NRS is committed to a respectful, inclusive, and professional working environment for every single member of staff.

You matter here. We are in this together!`,
  },
  {
    id: 8,
    script: `We have some of the best collaboration spaces you will find in any federal institution. Today, let me show you how to use them — and how to use them well.

Meeting rooms are available across all sixteen floors. To book a room, use the Room Booking System on your computer or mobile device. You can see availability in real time and reserve a space for as little as thirty minutes.

A few important rules: book only what you need — do not hold a twelve-person room for a meeting of three. Cancel promptly if your plans change, so others can use the space. And please, leave the room as you found it. That means clearing the whiteboard, removing your materials, and returning furniture to its original arrangement.

For larger events — townhalls, training sessions, official ceremonies — the first-floor auditorium is available. Auditorium bookings go through the Events Management team, and advance notice of at least five working days is required.

Our cafeteria on the ground floor serves breakfast and lunch. It is a shared space, so please be mindful of noise levels, clean up after yourself, and respect your colleagues' space and time.

Shared spaces work best when we all take ownership. Thank you for doing your part!`,
  },
  {
    id: 9,
    script: `One of the things that makes NRS HQ truly special is how much it invests in your wellbeing — and the wellbeing of your family. Let me tell you about everything we have in the basement, just for you.

Our gymnasium is fully equipped and available to all staff. Opening hours are posted on the intranet. Please register through HCM to receive your access card for the gym. Fitness is part of a productive working life — we encourage you to use it.

For our nursing mothers, we have a dedicated crèche in the basement. The crèche provides professional childcare so that you can work with full peace of mind. Spaces are limited, so please register early with HCM if you need this service.

Our on-site clinic is staffed by qualified medical personnel during working hours. For minor ailments, occupational health concerns, or first aid — go to the clinic. You do not need an appointment for urgent matters.

Prayer rooms are available in the basement for both Muslim and Christian staff, with designated times and spaces for all faiths. Please respect the space and the schedules.

Your health is your greatest asset. NRS has provided these facilities because we believe a healthy team is an excellent team. Use them, cherish them, and encourage your colleagues to do the same!`,
  },
  {
    id: 10,
    script: `We have come to the final episode of this orientation series — and I want to leave you with something that goes beyond rules, beyond buildings, beyond procedures.

I want to talk to you about what it means to be NRS.

The Nigeria Revenue Service exists for one purpose: to mobilise the revenue that powers this nation. Every tax processed, every audit completed, every compliance enforced — it all goes toward roads, hospitals, schools, and the future of every Nigerian. That is what you are part of.

The NRS spirit is one of excellence, integrity, and service. We do not cut corners. We do not lower our standards. We represent something far bigger than ourselves.

This headquarters — your home — was built to reflect that. It is designed to inspire you every day you walk through those doors.

So here is my challenge to you: bring your best. Every day. In every interaction — with colleagues, with members of the public, with the work on your screen. Be someone your team is proud to call a colleague. Be someone Nigeria is proud to call a civil servant.

You were chosen for this. The NRS family is proud to have you.

E jọ — please, take everything you have learned in this series and use it. Ask questions. Explore the building. Use the facilities. Build relationships.

This is your NRS HQ. Welcome home. Now let us serve — together!`,
  },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────
async function tts(text, voiceId, outputPath) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg',
    },
    body: JSON.stringify({
      text,
      model_id: MODEL_ID,
      voice_settings: VOICE_SETTINGS,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`ElevenLabs error ${res.status}: ${body}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  writeFileSync(outputPath, buffer);
  return buffer.length;
}

async function listVoices() {
  const res = await fetch('https://api.elevenlabs.io/v1/voices', {
    headers: { 'xi-api-key': API_KEY },
  });
  const data = await res.json();
  return data.voices || [];
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  // Show available voices if no voice ID set
  if (VOICE_ID === 'YOUR_NIGERIAN_ENGLISH_VOICE_ID') {
    console.log('\n🔍 No voice ID set. Listing your available voices:\n');
    const voices = await listVoices();
    voices.forEach(v => console.log(`  ${v.voice_id}  ${v.name}  ${JSON.stringify(v.labels)}`));
    console.log('\n→ Set ELEVENLABS_VOICE_ID=<id> or replace YOUR_NIGERIAN_ENGLISH_VOICE_ID in the script.\n');
    console.log('→ To search the public Voice Library, visit: https://elevenlabs.io/voice-library');
    console.log('→ Or use Voice Design at: https://elevenlabs.io/voice-design\n');
    process.exit(0);
  }

  console.log(`\n🎙️  Generating Amara's voice for all 10 episodes`);
  console.log(`   Voice ID : ${VOICE_ID}`);
  console.log(`   Model    : ${MODEL_ID}`);
  console.log(`   Output   : ${OUT_DIR}\n`);

  for (const ep of EPISODES) {
    const outFile = join(OUT_DIR, `ep${String(ep.id).padStart(2, '0')}.mp3`);
    process.stdout.write(`  Episode ${ep.id}... `);
    try {
      const bytes = await tts(ep.script, VOICE_ID, outFile);
      console.log(`✅  ${(bytes / 1024).toFixed(0)} KB → ${outFile}`);
    } catch (err) {
      console.log(`❌  FAILED: ${err.message}`);
    }
    // Brief pause to respect rate limits
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('\n🏁  Done! Now in the nrs-training/ directory run:');
  console.log('   node scripts/render-all.mjs\n');
}

main().catch(err => { console.error(err); process.exit(1); });
