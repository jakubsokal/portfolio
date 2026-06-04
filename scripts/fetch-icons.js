const fs = require("fs");
const path = require("path");
const https = require("https");

const repoFile = path.join(__dirname, '..', 'lib', 'data.ts');
const outDir = path.join(__dirname, '..', 'public', 'icons');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const text = fs.readFileSync(repoFile, 'utf8');
const re = /icon:\s*"([^"]+)"/g;
const icons = new Set();
let m;
while ((m = re.exec(text))) icons.add(m[1]);

const mappings = {
  springboot: ["springboot", "spring-boot", "spring"],
  nextdotjs: ["nextjs", "nextdotjs", "next-dotjs"],
  dotnet: ["dotnet", "dotnetcore", "csharp"],
  visualstudiocode: ["visualstudiocode", "vscode"],
  intellijidea: ["intellijidea", "intellij", "intellij-idea"],
  tailwindcss: ["tailwindcss", "tailwind"],
  postgresql: ["postgresql", "postgres"],
  huggingface: ["huggingface", "hugging-face"],
  csharp: ["csharp", "c#"],
};

function tryDownload(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        res.resume();
        return resolve(null);
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', () => resolve(null));
  });
}

(async () => {
  for (const icon of icons) {
    const bases = mappings[icon] || [icon];
    const candidates = [];
    for (const b of bases) {
      candidates.push(`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${b}/${b}-original.svg`);
      candidates.push(`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${b}/${b}-plain.svg`);
    }

    let saved = false;
    for (const url of candidates) {
      process.stdout.write(`Trying ${icon} <- ${url}... `);
      const data = await tryDownload(url);
      if (data) {
        fs.writeFileSync(path.join(outDir, `${icon}.svg`), data);
        console.log('saved');
        saved = true;
        break;
      } else {
        console.log('not found');
      }
    }

    if (!saved) console.log(`No icon found for ${icon}, will fallback to initials.`);
  }
  console.log('Done. Restart dev server to pick up new icons.');
})();
