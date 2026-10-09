// בונה תצוגה מקדימה סטטית של האתר הציבורי (ל-GitHub Pages), עד שהאתר יוקם ב-Cloudflare.
// צריך שרת מקומי רץ (wrangler dev) עם נתוני הדמו.
// שימוש: SOURCE=http://127.0.0.1:8787 SITE_URL=https://user.github.io/folio1 node scripts/build-static.mjs dist
// מה לא עובד בתצוגה הסטטית: טופס צור קשר ולוח הניהול (צריכים את ה-Worker).
import { mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import config from '../site.config.json' with { type: 'json' };

const SOURCE = (process.env.SOURCE || 'http://127.0.0.1:8787').replace(/\/$/, '');
const SITE_URL = (process.env.SITE_URL || '').replace(/\/$/, '');
if (!SITE_URL) {
  console.error('חסר SITE_URL');
  process.exit(1);
}
const BASE = new URL(SITE_URL).pathname.replace(/\/$/, ''); // למשל /folio1
const out = process.argv[2] || 'dist';

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

// קבצים סטטיים (בלי לוח הניהול ובלי _headers)
for (const dir of ['css', 'js', 'demo']) cpSync(join('public', dir), join(out, dir), { recursive: true });
cpSync('public/favicon.svg', join(out, 'favicon.svg'));

writeFileSync(
  join(out, 'css', 'preview.css'),
  `.preview-bar{background:#1f1d36;color:#fff;text-align:center;padding:8px 16px;font-size:.92rem}
.preview-note{background:#fffaeb;border:1px solid #fedf89;border-radius:12px;padding:16px}\n`,
);

async function get(path) {
  const res = await fetch(SOURCE + path);
  return { status: res.status, text: await res.text() };
}

const theme = await get('/theme.css');
writeFileSync(join(out, 'theme.css'), theme.text);

const PREVIEW_BAR = '<div class="preview-bar" role="note">תצוגה מקדימה. טופס יצירת הקשר ולוח הניהול יופעלו אחרי ההקמה ב-Cloudflare.</div>';
const FORM_NOTE =
  '<div class="preview-note"><p><strong>הטופס עוד לא פעיל בתצוגה המקדימה.</strong></p><p>בינתיים אפשר ליצור קשר בטלפון או בוואטסאפ, לפי הפרטים בעמוד.</p></div>';

function transform(html) {
  return html
    .split(SOURCE).join(SITE_URL)
    .replace(/\/theme\.css\?v=[^"]*/g, '/theme.css')
    .replace(/(href|src|action)="\/(?!\/)/g, `$1="${BASE}/`)
    .replace(/<link rel="stylesheet" href="([^"]*)\/css\/site\.css">/, (m, b) => `${m}\n<link rel="stylesheet" href="${b}/css/preview.css">`)
    .replace(/<body([^>]*)>/, `<body$1>\n${PREVIEW_BAR}`)
    .replace(/<form class="contact-form"[\s\S]*?<\/form>/, FORM_NOTE);
}

const pages = config.pages.filter((p) => p.path);
for (const p of pages) {
  const { status, text } = await get(p.path);
  if (status !== 200) throw new Error(`${p.path} החזיר ${status}`);
  const dir = p.path === '/' ? out : join(out, p.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), transform(text));
  console.log('✓', p.path);
}

const nf = await get('/__preview-404');
writeFileSync(join(out, '404.html'), transform(nf.text));

const urls = pages.map((p) => `  <url><loc>${SITE_URL}${p.path === '/' ? '/' : p.path + '/'}</loc></url>`).join('\n');
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
writeFileSync(join(out, '.nojekyll'), '');
console.log(`נבנה ב-${out} עבור ${SITE_URL}`);
