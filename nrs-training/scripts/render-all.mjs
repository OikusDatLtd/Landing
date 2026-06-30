/**
 * Render all 10 NRS training episodes to MP4.
 * Run: node scripts/render-all.mjs
 * Requires: npm install (first run), valid ElevenLabs audio files in public/audio/
 */
import { execSync } from 'child_process';
import { mkdirSync } from 'fs';

mkdirSync('out', { recursive: true });

const episodes = Array.from({ length: 10 }, (_, i) => i + 1);

for (const ep of episodes) {
  const id = `NRS-Episode-${String(ep).padStart(2, '0')}`;
  console.log(`\n🎬 Rendering ${id}...`);
  try {
    execSync(
      `npx remotion render src/index.ts ${id} out/${id}.mp4 --codec=h264 --browser-executable=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell`,
      { stdio: 'inherit' }
    );
    console.log(`✅ ${id} rendered successfully`);
  } catch (err) {
    console.error(`❌ Failed to render ${id}:`, err.message);
  }
}

console.log('\n🏁 All episodes processed. Check out/ directory.');
