// נתוני דמו: "סטודיו אור – צילום ועיצוב" (עסק פיקטיבי).
// משמש גם את ה-Worker (איפוס לילי) וגם את סקריפט ה-CI (scripts/seed-sql.mjs).
// הפונקציה מחזירה רשימת פקודות SQL עם פרמטרים, בלי תלות בסביבה.

export const DEMO_SETTINGS = {
  'business.name': 'סטודיו אור – צילום ועיצוב',
  'business.tagline': 'צילום ועיצוב שמספרים את הסיפור שלכם',
  'brand.primary_color': '#7367f0',
  'contact.phone': '050-000-0000',
  'contact.whatsapp': '050-000-0000',
  'contact.email': 'hello@example.com',
  'contact.address': 'רחוב הדוגמה 12, תל אביב',
  'contact.hours': 'ראשון–חמישי: 09:00–18:00\nשישי: 09:00–13:00\nשבת: סגור',
  'contact.map_url': 'https://www.google.com/maps/search/?api=1&query=%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91',
  'social.facebook': 'https://www.facebook.com/',
  'social.instagram': 'https://www.instagram.com/',

  'home.hero.badge': 'פנויים לפרויקטים חדשים החודש',
  'home.hero.title': 'רגעים שנשארים.',
  'home.hero.title_accent': 'עיצוב שבולט.',
  'home.hero.subtitle':
    'סטודיו אור מצלם ומעצב לעסקים ולאנשים פרטיים: פורטרטים, מוצרים, אירועים ומיתוג מלא. אנחנו כאן כדי שתיראו במיטבכם.',
  'home.hero.cta_text': 'לתיאום פגישת היכרות',
  'home.hero.cta_link': '/contact',
  'home.feature1.stat': '10+',
  'home.feature1.title': 'שנות ניסיון',
  'home.feature1.text': 'מאות לקוחות מרוצים, מעסקים קטנים ועד מותגים מוכרים.',
  'home.feature2.stat': '1',
  'home.feature2.title': 'כתובת אחת לכל דבר',
  'home.feature2.text': 'צילום, עריכה ועיצוב גרפי תחת קורת גג אחת, בלי לרוץ בין ספקים.',
  'home.feature3.stat': '24h',
  'home.feature3.title': 'מענה תוך יום עסקים',
  'home.feature3.text': 'ליווי צמוד מהשיחה הראשונה ועד הקובץ האחרון, ומענה מהיר בוואטסאפ.',
  'home.services.title': 'מה אנחנו עושים',
  'home.gallery.title': 'עבודות אחרונות',
  'home.cta.title': 'יש לכם רעיון? בואו נדבר.',
  'home.cta.text': 'ספרו לנו מה אתם צריכים, ונחזור אליכם עם הצעה מותאמת תוך יום עסקים.',
  'home.cta.button': 'שלחו לנו הודעה',
  'seo.home.title': 'סטודיו אור – צילום ועיצוב | צלם לעסקים בתל אביב',
  'seo.home.description': 'סטודיו לצילום ועיצוב: צילומי פורטרט, צילומי מוצר, מיתוג ועיצוב לוגו. תיאום פגישה בוואטסאפ.',

  'about.title': 'נעים להכיר, סטודיו אור',
  'about.text':
    'סטודיו אור נולד מתוך אהבה לאור טבעי ולסיפורים טובים. אנחנו צוות קטן של צלמים ומעצבים שמאמינים שכל עסק ראוי לתדמית מקצועית.\n\nאנחנו עובדים בסטודיו מאובזר בתל אביב וגם בשטח, אצלכם בעסק או באירוע. בכל פרויקט אנחנו מקשיבים קודם, מתכננים יחד, ורק אז לוחצים על הכפתור.\n\nהלקוחות שלנו נשארים איתנו לאורך שנים, וזה הדבר שהכי מרגש אותנו.',
  'about.image': 'demo/about.svg',
  'about.image_alt': 'איור מופשט של מצלמה וצבעים סגולים',
  'seo.about.title': 'אודות סטודיו אור',
  'seo.about.description': 'הכירו את הצוות של סטודיו אור: צלמים ומעצבים עם ניסיון של עשור.',

  'services.title': 'השירותים שלנו',
  'services.intro': 'כל שירות מותאם אישית. המחירים הם נקודת פתיחה, והצעה מדויקת תינתן אחרי שיחה קצרה.',
  'seo.services.title': 'שירותי צילום ועיצוב | סטודיו אור',
  'seo.services.description': 'צילומי פורטרט, צילומי מוצר, עיצוב לוגו, מיתוג, עריכת תמונות וצילומי אירועים.',

  'gallery.title': 'גלריה',
  'gallery.intro': 'מבחר מהעבודות שלנו. לחצו על תמונה כדי לראות אותה בגדול.',
  'seo.gallery.title': 'גלריית עבודות | סטודיו אור',
  'seo.gallery.description': 'מבחר עבודות צילום ועיצוב של סטודיו אור.',

  'contact.title': 'צור קשר',
  'contact.intro': 'השאירו פרטים ונחזור אליכם בהקדם. אפשר גם להתקשר או לשלוח הודעה בוואטסאפ.',
  'contact.success': 'תודה! ההודעה התקבלה ונחזור אליכם תוך יום עסקים.',
  'seo.contact.title': 'צור קשר | סטודיו אור',
  'seo.contact.description': 'דברו עם סטודיו אור: טלפון, וואטסאפ, מייל או טופס יצירת קשר.',

  'accessibility.title': 'הצהרת נגישות',
  'accessibility.text':
    'אנו רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות, ופועלים להנגשת האתר לאנשים עם מוגבלות.\n\nהאתר נבנה בהתאם להנחיות WCAG 2.1 ברמה AA ככל הניתן: מבנה כותרות תקין, ניווט מלא במקלדת, טקסט חלופי לתמונות, ניגודיות צבעים מספקת וכיבוד הגדרת "הפחתת תנועה" של המכשיר.\n\nאם נתקלתם בבעיית נגישות, נשמח לשמוע ולתקן. רכז הנגישות: ישראל ישראלי, טלפון 050-000-0000, מייל hello@example.com.\n\nתאריך עדכון ההצהרה: ינואר 2026.',
  'seo.accessibility.title': 'הצהרת נגישות | סטודיו אור',
  'seo.accessibility.description': 'הצהרת הנגישות של אתר סטודיו אור.',

  'footer.text': 'סטודיו לצילום ועיצוב לעסקים ולאנשים פרטיים.',
};

export const DEMO_SERVICES = [
  ['צילומי פורטרט', 'צילומי תדמית אישיים לעסק, ללינקדאין ולרשתות, בסטודיו או באור טבעי בחוץ.', 'demo/gallery-2.svg', 'החל מ-₪450'],
  ['צילומי מוצר', 'צילום מוצרים על רקע לבן או בהעמדה מעוצבת, מוכן לחנות אונליין ולקטלוג.', 'demo/gallery-3.svg', 'החל מ-₪350'],
  ['עיצוב לוגו', 'לוגו מקורי שמבטא את אופי העסק, כולל שלוש הצעות וסבבי תיקונים.', 'demo/gallery-4.svg', 'החל מ-₪1,200'],
  ['מיתוג לעסק', 'שפה עיצובית מלאה: לוגו, צבעים, פונטים, כרטיס ביקור ותבניות לרשתות.', 'demo/gallery-8.svg', ''],
  ['עריכת תמונות', 'תיקוני צבע, ריטוש עדין והכנת תמונות לדפוס או לרשת.', 'demo/gallery-5.svg', 'החל מ-₪25 לתמונה'],
  ['צילומי אירועים', 'תיעוד אירועים פרטיים ועסקיים: כנסים, השקות, ימי הולדת ובר מצווה.', 'demo/gallery-7.svg', ''],
];

export const DEMO_GALLERY = [
  ['demo/gallery-1.svg', 'שקיעה סגולה מעל גבעות', 'שקיעה בגבעות'],
  ['demo/gallery-2.svg', 'צללית של דמות על רקע סגול', 'פורטרט'],
  ['demo/gallery-3.svg', 'בקבוק מוצר על רקע בהיר', 'צילום מוצר'],
  ['demo/gallery-4.svg', 'סמל גיאומטרי בעיגול סגול', 'עיצוב לוגו'],
  ['demo/gallery-5.svg', 'גלים צבעוניים על רקע כהה', 'אמנות מופשטת'],
  ['demo/gallery-6.svg', 'איור של מצלמה', 'הציוד שלנו'],
  ['demo/gallery-7.svg', 'אורות מטושטשים באירוע', 'אירוע ערב'],
  ['demo/gallery-8.svg', 'בניינים בצורות גיאומטריות', 'אדריכלות'],
  ['demo/gallery-9.svg', 'פרחים מאוירים בגווני סגול', 'פרחים'],
];

export const DEMO_MESSAGES = [
  ['נועה כהן', '050-000-0001', 'noa@example.com', 'היי, אשמח לשמוע על צילומי תדמית לעסק שלי. מתי יש לכם זמן פנוי?', 0],
  ['דני לוי', '050-000-0002', '', 'מחפש צלם לבר מצווה בחודש הבא. אפשר לקבל הצעת מחיר?', 1],
];

/**
 * בונה את פקודות האיפוס והזריעה.
 * @param {{ demoUser?: { email: string, hash: string, salt: string } }} opts
 * @returns {{ sql: string, params: any[] }[]}
 */
export function seedStatements({ demoUser } = {}) {
  const out = [];
  const q = (sql, ...params) => out.push({ sql, params });

  q("DELETE FROM settings WHERE key NOT LIKE '\\_%' ESCAPE '\\'");
  q('DELETE FROM services');
  q('DELETE FROM gallery');
  q('DELETE FROM messages');
  q('DELETE FROM rate_limits');
  q("DELETE FROM sqlite_sequence WHERE name IN ('services','gallery','messages')");

  for (const [k, v] of Object.entries(DEMO_SETTINGS)) q('INSERT INTO settings (key, value) VALUES (?, ?)', k, v);
  DEMO_SERVICES.forEach(([title, description, image, price], i) =>
    q('INSERT INTO services (title, description, image_key, price_text, sort_order, is_visible) VALUES (?, ?, ?, ?, ?, 1)', title, description, image, price, i),
  );
  DEMO_GALLERY.forEach(([image, alt, caption], i) =>
    q('INSERT INTO gallery (image_key, alt_text, caption, sort_order, is_visible) VALUES (?, ?, ?, ?, 1)', image, alt, caption, i),
  );
  DEMO_MESSAGES.forEach(([name, phone, email, body, read], i) =>
    q('INSERT INTO messages (name, phone, email, body, is_read, created_at) VALUES (?, ?, ?, ?, ?, unixepoch() - ?)', name, phone, email, body, read, (i + 1) * 3600 * 5),
  );

  if (demoUser) {
    q(
      'INSERT INTO users (email, password_hash, password_salt) VALUES (?, ?, ?) ON CONFLICT(email) DO UPDATE SET password_hash = excluded.password_hash, password_salt = excluded.password_salt',
      demoUser.email,
      demoUser.hash,
      demoUser.salt,
    );
    q('DELETE FROM sessions WHERE user_id = (SELECT id FROM users WHERE email = ?)', demoUser.email);
  }
  q("INSERT INTO settings (key, value) VALUES ('_cache_version', ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value", String(Date.now()));
  return out;
}

/** מחזיר את כל מפתחות התמונות של הדמו (קבצים סטטיים, לא R2). */
export function isDemoAsset(key) {
  return typeof key === 'string' && key.startsWith('demo/');
}
