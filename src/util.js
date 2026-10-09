// כלי עזר משותפים: escape, תגובות JSON, כותרות אבטחה.

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** מנקה טקסט לפני הכנסה ל-HTML (גם לתוך מאפיינים). */
export function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ESC[c]);
}

/** טקסט חופשי עם שורות -> פסקאות HTML בטוחות. */
export function paragraphs(text) {
  const clean = String(text ?? '').trim();
  if (!clean) return '';
  return clean
    .split(/\n\s*\n/)
    .map((p) => `<p>${esc(p.trim()).replace(/\n/g, '<br>')}</p>`)
    .join('\n');
}

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers },
  });
}

export function jsonError(message, status = 400, extra = {}) {
  return json({ ok: false, error: message, ...extra }, status);
}

export function isTrue(v) {
  return String(v ?? '').toLowerCase() === 'true';
}

/** קישור בטוח: רק http(s), mailto, tel או נתיב פנימי. אחרת מחזיר ''. */
export function safeUrl(u) {
  const s = String(u ?? '').trim();
  if (!s) return '';
  if (s.startsWith('/') && !s.startsWith('//')) return s;
  if (/^(https?:|mailto:|tel:)/i.test(s)) return s;
  return '';
}

export function isHexColor(c) {
  return /^#[0-9a-f]{6}$/i.test(String(c ?? ''));
}

/** מספר וואטסאפ בפורמט בינלאומי (ישראלי כברירת מחדל): 050-000-0000 -> 972500000000 */
export function waNumber(raw) {
  let d = String(raw ?? '').replace(/\D/g, '');
  if (!d) return '';
  if (d.startsWith('00')) d = d.slice(2);
  if (d.startsWith('0')) d = '972' + d.slice(1);
  return d.length >= 9 ? d : '';
}

/** כתובת URL לתמונה: תמונות דמו הן קבצים סטטיים, העלאות מוגשות מ-R2. */
export function mediaUrl(key) {
  if (!key) return '';
  if (key.startsWith('demo/')) return '/' + key;
  return '/media/' + key;
}

export const SECURITY_HEADERS = {
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'x-frame-options': 'DENY',
  'permissions-policy': 'camera=(), microphone=(), geolocation=()',
};

export function withHeaders(response, headers) {
  const r = new Response(response.body, response);
  for (const [k, v] of Object.entries(headers)) r.headers.set(k, v);
  return r;
}

export function now() {
  return Math.floor(Date.now() / 1000);
}
