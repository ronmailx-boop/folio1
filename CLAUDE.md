# CLAUDE.md – Folio1

הערות המשכיות לסשנים הבאים. **עדכן בסוף כל שלב.**

## כללי עבודה של Ron
- **תמיד למזג ל-main.** אחרי שינוי: לפתוח PR ולמזג אותו בעצמך (בלי לחכות לאישור נוסף), כשהבדיקות עוברות.

## מצב נוכחי
כל 9 השלבים מהפרומט המקורי הושלמו ונבדקו מקומית (`wrangler dev`, D1 ו-R2 מקומיים, Playwright).
**עדיין לא נפרס ל-Cloudflare אמיתי**: צריך ש-Ron יוסיף Secrets ויריץ `setup.yml` (ראו README).

## תצוגה מקדימה ב-GitHub Pages (זמני)
`pages-preview.yml` מריץ `wrangler dev` ב-CI עם נתוני הדמו, ו-`scripts/build-static.mjs` שומר עותק סטטי של הדפים הציבוריים: מוסיף את base path (`/folio1`), מחליף את הטופס בהודעה ומוסיף פס "תצוגה מקדימה". הסיבה: ל-Ron אין עדיין Secrets של Cloudflare, והקונטיינר של Claude לא יכול לפרוס Worker (אין טוקן, וה-MCP של Cloudflare לא כולל פריסה). אחרי ההקמה ב-Cloudflare אפשר לכבות את ה-workflow.

## ארכיטקטורה (סגורה)
- Worker אחד (`src/index.js`) + D1 (`DB`) + R2 (`MEDIA`) + Static Assets (`public/`, binding `ASSETS`).
- JS רגיל, ES modules, בלי build. התלות היחידה: `wrangler` (devDependency).
- דפים ציבוריים מרונדרים בשרת (`src/site.js`, `src/render/*`) ונשמרים ב-Cache API.
- לוח הניהול: SPA סטטי ב-`public/admin/` (`admin.js` + `lib.js`), מדבר עם `/api/admin/*`.

## החלטות שהתקבלו
- **ניקוי קאש:** מפתח הקאש = `/__page/<CF_VERSION_METADATA.id>/v<_cache_version><path>`. כל שמירה בלוח מעלה את `_cache_version` בטבלת settings (עובד בכל מרכזי הנתונים, לא רק במקומי), וכל פריסה משנה את מזהה הגרסה. עולה שאילתת D1 אחת לכל בקשה. ב-`*.workers.dev` ה-Cache API לא פעיל, אז שם כל בקשה מרונדרת (בסדר).
- **צבע ראשי:** `/theme.css?v=<גרסה>` דינמי מה-Worker, כדי לא להזדקק ל-inline style (CSP בלי `unsafe-inline`).
- **PBKDF2:** 100,000 איטרציות, המקסימום ש-Workers מאפשר (מעל זה WebCrypto ב-workerd זורק שגיאה).
- **סשן:** עוגייה `__Host-folio1_session`, טוקן 32 בתים, נשמר כ-SHA-256 ב-D1, 14 יום. בהחלפת סיסמה שאר הסשנים נמחקים.
- **CSRF:** בדיקת `Origin` לכל בקשת כתיבה ל-`/api/*` + חובת `application/json` (חוץ מ-`/api/admin/upload`, שמקבל רק `image/*`, ולכן גם הוא דורש preflight).
- **הגבלת קצב:** טבלת `rate_limits` עם חלון קבוע. התחברות: 5 כישלונות ל-15 דק' לכל IP ולכל מייל (הניסיון השישי מקבל 429). טופס: 5 לשעה לכל IP. ה-IP נשמר מגובב עם `HASH_SALT` (סוד שנוצר ב-setup).
- **תמונות:** דחיסה בדפדפן (WebP, 1600px, 0.82, נפילה ל-JPEG, הקטנה חוזרת אם עדיין גדול). בשרת: בדיקת magic bytes, מפתח `u/<32hex>.<ext>`. תמונות דמו הן קבצים סטטיים `public/demo/*.svg` עם מפתח `demo/...` (לא ב-R2, לא נמחקות).
- **משאבים ב-CI:** `scripts/ci-resources.mjs` מאתר/יוצר D1 ו-R2 לפי השמות ב-`wrangler.toml` ומחליף את `database_id` בזמן ריצה בלבד (לא נשמר בריפו). לא השתמשתי בהקצאה האוטומטית של wrangler כי מיגרציות `--remote` צריכות מזהה ידוע, והשיטה המפורשת צפויה יותר.
- **דומיין:** משתנה GitHub `CUSTOM_DOMAIN` מחליף את שורת ההערה `# @CUSTOM_DOMAIN_ROUTE@` ב-`routes = [...]`. כך פריסה לא נכשלת לפני שהדומיין מוכן.
- **סיסמת דמו:** סוד `DEMO_PASSWORD` (פומבי בכוונה, מוצג ב-`/api/public-info` רק כש-`DEMO_MODE=true`). אם חסר, setup מייצר אחד.
- **איפוס דמו:** Cron Trigger ב-Worker (`0 1 * * *`) + workflow ידני `demo-reset.yml`. ה-handler לא עושה כלום כש-`DEMO_MODE` אינו `true`.
- **seed:** `src/seed.js` מחזיר `{sql, params}[]`. ה-Worker מריץ ב-`DB.batch`, וה-CI הופך ל-SQL עם `scripts/sql.mjs`.
- **site.config.json:** מיובא עם `with { type: 'json' }` (עובד גם ב-esbuild של wrangler וגם ב-Node, לבדיקות).
- **Resend:** ברירת מחדל `onboarding@resend.dev`, שולח רק לבעל חשבון ה-Resend. ללקוחות צריך `MAIL_FROM` מדומיין מאומת.

## בעיות פתוחות / רעיונות
- העלאה שלא נשמרה (למשל בחרו לוגו ולא לחצו "שמירה") משאירה אובייקט יתום ב-R2. באתר דמו האיפוס הלילי מנקה. אפשר להוסיף ניקוי יתומים ב-cron (השוואת מפתחות R2 מול settings/services/gallery).
- `setup.yml` מייצר `HASH_SALT` חדש בכל ריצה (מאפס בפועל את מוני הגבלת הקצב; לא מזיק).
- אין עדיין בדיקות אינטגרציה אוטומטיות ב-CI (נבדק ידנית עם curl ו-Playwright, ראו בהמשך).
- הנעילה לפי מייל מאפשרת לתוקף לחסום זמנית את המנהל (15 דק'). מקובל לפי הדרישות.

## פקודות שימושיות
```bash
npm run dev            # מיגרציות + seed מקומי + wrangler dev (צריך .dev.vars עם DEMO_PASSWORD)
npm run check          # בדיקת site.config.json + node --test
npx wrangler dev --test-scheduled   # ואז curl localhost:8787/__scheduled להרצת איפוס הדמו
npx wrangler deploy --dry-run --outdir /tmp/out
node scripts/gen-demo-svg.mjs public/demo   # יצירת איורי הדמו מחדש
```

## בדיקות קבלה (נבדקו מקומית)
RTL בלי גלילה אופקית ב-360/390px · שינוי כותרת בלוח מופיע מיד באתר · PNG של 12.4MB צומצם ל-515KB, הועלה והוצג · מחיקת תמונה מחזירה 404 מ-`/media/` · CRUD והסתרה של שירותים · טופס שומר הודעה עם תג "חדש" גם בלי מייל · 401 בלי סשן · ניסיון התחברות שישי מקבל 429 · שינוי צבע משנה את `--primary` · `SHOW_CREDIT=false` מסתיר את הקרדיט · איפוס הדמו מחזיר נתונים ומנתק את משתמש הדמו · sitemap, robots ו-404 · אין סודות בריפו (`.dev.vars` ב-gitignore).
