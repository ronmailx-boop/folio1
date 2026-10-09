// נקודת כניסה (שלד). הניתוב המלא נבנה בשלבים הבאים.
export default {
  async fetch() {
    return new Response('Folio1', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
  },
};
