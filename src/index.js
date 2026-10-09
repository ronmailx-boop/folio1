// Folio1 – נקודת כניסה וניתוב.
// קבצים סטטיים (public/) מוגשים ישירות על ידי Cloudflare ולא מגיעים לכאן.
import { servePage, isPagePath, notFound, themeCss, robotsTxt, sitemapXml } from './site.js';
import { serveMedia } from './media.js';
import { SECURITY_HEADERS, jsonError, withHeaders } from './util.js';

export default {
  async fetch(request, env, ctx) {
    try {
      return await route(request, env, ctx);
    } catch (err) {
      console.error('unhandled', err?.stack || err);
      const url = new URL(request.url);
      if (url.pathname.startsWith('/api/')) return jsonError('אירעה שגיאה בשרת. נסו שוב בעוד רגע.', 500);
      return new Response('אירעה שגיאה זמנית. נסו לרענן את הדף.', {
        status: 500,
        headers: { 'content-type': 'text/plain; charset=utf-8', ...SECURITY_HEADERS },
      });
    }
  },
};

async function route(request, env, ctx) {
  const url = new URL(request.url);
  const { pathname } = url;
  const method = request.method;

  if (method === 'GET' || method === 'HEAD') {
    if (isPagePath(pathname)) return servePage(request, env, ctx, url);
    if (pathname === '/theme.css') return themeCss(env);
    if (pathname === '/robots.txt') return robotsTxt(url);
    if (pathname === '/sitemap.xml') return sitemapXml(url);
    if (pathname.startsWith('/media/')) {
      const res = await serveMedia(env, pathname.slice('/media/'.length), request);
      if (res) return res;
    }
  }
  if (pathname.startsWith('/api/')) return jsonError('לא נמצא', 404);
  return notFound(env, url);
}
