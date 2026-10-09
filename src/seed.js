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
  'about.image': 'https://images.pexels.com/photos/13884541/pexels-photo-13884541.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'about.image_alt': 'צלם מכוון תאורה לפני צילום בסטודיו',
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

// תמונות הדמו: צילומים אמיתיים מ-Pexels (חינם לשימוש מסחרי, בלי חובת קרדיט: https://www.pexels.com/license/).
// מקושרים ישירות מהמאגר ומוקטנים שם (w=1600). אם קישור יפסיק לעבוד, האתר מציג במקומו איור דמו.
// השמות בהערות הם שמות התמונות ב-Pexels, למקרה שצריך להחליף.
const pexels = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

export const DEMO_IMAGES = {
  portraitNeon: pexels(10040315), // Portrait of a Woman with Neon Light in Background
  portraitBw: pexels(12562547), // Dark Portrait of a Woman with Her Hand on Her Cheek
  perfume: pexels(29805437), // Elegant Black Perfume Bottle on a Dark Background
  concert: pexels(18447992), // Lights over Crowd on Concert
  concertStage: pexels(1387174), // Crowd in Front of Blue and Orange Stage during a Concert at Night
  purpleMan: pexels(11032535), // Man Posing in Purple Light
  tablet: pexels(9414330), // A Person Drawing on a Graphics Tablet
  profileDark: pexels(19303043), // Woman in a Dark Room Looking Up in Profile
  brand: pexels(7598017), // Pictures of Business Brand and Design
  nightCity: pexels(18867525), // Night City Street after Rain Illuminated by Colorful Neon Signs Reflecting on a Wet Road
  studioLights: pexels(25526512), // Photography Studio Lighting Equipment
  editing: pexels(7014918), // Anonymous woman editing photo on laptop
  settingLight: pexels(13884541), // Man Setting Video Light for Photo Shoot
};
const I = DEMO_IMAGES;

export const DEMO_SERVICES = [
  ['צילומי פורטרט', 'צילומי תדמית אישיים לעסק, ללינקדאין ולרשתות, בסטודיו או באור טבעי בחוץ.', I.portraitBw, 'החל מ-₪450'],
  ['צילומי מוצר', 'צילום מוצרים על רקע לבן או בהעמדה מעוצבת, מוכן לחנות אונליין ולקטלוג.', I.perfume, 'החל מ-₪350'],
  ['עיצוב לוגו', 'לוגו מקורי שמבטא את אופי העסק, כולל שלוש הצעות וסבבי תיקונים.', I.tablet, 'החל מ-₪1,200'],
  ['מיתוג לעסק', 'שפה עיצובית מלאה: לוגו, צבעים, פונטים, כרטיס ביקור ותבניות לרשתות.', I.brand, ''],
  ['עריכת תמונות', 'תיקוני צבע, ריטוש עדין והכנת תמונות לדפוס או לרשת.', I.editing, 'החל מ-₪25 לתמונה'],
  ['צילומי אירועים', 'תיעוד אירועים פרטיים ועסקיים: כנסים, השקות, ימי הולדת ובר מצווה.', I.concertStage, ''],
];

// שלוש הראשונות מוצגות בפס שמתחת לכותרת בדף הבית
export const DEMO_GALLERY = [
  [I.portraitNeon, 'פורטרט של אישה עם טבעת אור ניאון ברקע', 'פורטרט בניאון'],
  [I.perfume, 'בקבוק בושם שחור על רקע כהה', 'צילום מוצר'],
  [I.concert, 'קהל בהופעה תחת אורות לייזר', 'הופעה חיה'],
  [I.purpleMan, 'גבר מצולם בתאורה סגולה דרמטית', 'פורטרט בסגול'],
  [I.tablet, 'מעצבת מאיירת על טאבלט גרפי', 'עיצוב בתהליך'],
  [I.profileDark, 'אישה בפרופיל בחדר חשוך עם אור צד', 'פורטרט באור צד'],
  [I.brand, 'חומרי מיתוג ועיצוב לעסק', 'מיתוג'],
  [I.nightCity, 'רחוב עירוני בלילה אחרי גשם, שלטי ניאון משתקפים בכביש הרטוב', 'לילה בעיר'],
  [I.studioLights, 'ציוד תאורה בסטודיו צילום', 'הסטודיו שלנו'],
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
