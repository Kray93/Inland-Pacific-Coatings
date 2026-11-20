// Generates branded placeholder images into public/placeholders/ from app/lib/photo-list.json.
// Run with: node scripts/make-placeholders.mjs
// Photos that have a real "src" set in photo-list.json are skipped.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { photos } = JSON.parse(readFileSync(join(root, "app/lib/photo-list.json"), "utf8"));
const outDir = join(root, "public/placeholders");
mkdirSync(outDir, { recursive: true });

const palettes = {
  concrete: ["#2f3a35", "#7d847b"],
  epoxy: ["#122a1c", "#b6903d"],
  painting: ["#3b261d", "#c0805a"],
  roof: ["#1b2530", "#5f7a8c"],
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;");

function wrap(text, max) {
  const out = [];
  let line = "";
  for (const word of text.split(" ")) {
    if ((line + " " + word).trim().length > max && line) {
      out.push(line);
      line = word;
    } else line = (line + " " + word).trim();
  }
  if (line) out.push(line);
  return out;
}

let count = 0;
for (const [key, p] of Object.entries(photos)) {
  if (p.src) continue;
  // Keep text inside the centre ~760px so it survives portrait crops; wrap long labels.
  const lines = wrap(p.label, 26);
  const [c1, c2] = palettes[p.category] ?? palettes.epoxy;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
    </linearGradient>
    <pattern id="p" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
      <rect width="18" height="48" fill="#ffffff" fill-opacity="0.04"/>
    </pattern>
    <radialGradient id="v" cx="0.5" cy="0.45" r="0.75">
      <stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.45"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#g)"/>
  <rect width="1600" height="1000" fill="url(#p)"/>
  <rect width="1600" height="1000" fill="url(#v)"/>
  <g transform="translate(800 290)" fill="none" stroke="#ead8aa" stroke-width="5" stroke-linejoin="round" opacity="0.85">
    <rect x="-70" y="-42" width="140" height="94" rx="14"/>
    <path d="M-30 -42 l11 -20 h38 l11 20"/>
    <circle cx="0" cy="5" r="28"/>
  </g>
${lines.map((l, i) => `  <text x="800" y="${400 + i * 52}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="42" fill="#ffffff">${esc(l)}</text>`).join("\n")}
  <text x="800" y="${400 + lines.length * 52 + 8}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="6" fill="#ead8aa">PLACEHOLDER PHOTO</text>
</svg>
`;
  writeFileSync(join(outDir, `${key}.svg`), svg);
  count++;
}
console.log(`Wrote ${count} placeholder images to public/placeholders/`);
