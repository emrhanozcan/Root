const fs = require('fs');
const path = require('path');

const addDict = {
  partners: {
    organizations: {en: "organizations", tr: "kuruluş", sr: "organizacije", es: "organizaciones", ar: "منظمات"},
    from: {en: "from", tr: "", sr: "iz", es: "de", ar: "من"},
    countries: {en: "countries", tr: "ülkeden", sr: "zemalja", es: "países", ar: "دول"},
    working: {en: "working together", tr: "birlikte çalışıyor", sr: "koje rade zajedno", es: "trabajando juntas", ar: "تعمل معا"},
    coord_title: {en: "Project Coordinator", tr: "Proje Koordinatörü", sr: "Koordinator projekta", es: "Coordinador del Proyecto", ar: "منسق المشروع"},
    coord_sub: {en: "Leading the ROOT consortium and managing overall project implementation.", tr: "ROOT konsorsiyumuna liderlik eder ve proje uygulamasını yönetir.", sr: "Vodi ROOT konzorcijum...", es: "Liderando el consorcio ROOT...", ar: "يقود اتحاد ROOT..."},
    cons_title: {en: "Consortium Partners", tr: "Konsorsiyum Ortakları", sr: "Partneri Konzorcijuma", es: "Socios del Consorcio", ar: "شركاء الاتحاد"},
    cons_sub: {en: "Expert organizations contributing to the project's success.", tr: "Projenin başarısına katkıda bulunan uzman kuruluşlar.", sr: "Stručne organizacije koje doprinose...", es: "Organizaciones expertas que contribuyen...", ar: "المنظمات الخبيرة المساهمة..."}
  },
  deliverables: {
    outputs_title: {en: "Outputs & Resources", tr: "Çıktılar & Kaynaklar", sr: "Rezultati & Resursi", es: "Resultados y Recursos", ar: "المخرجات والموارد"},
    outputs_sub: {en: "Toolkits, reports, curricula, and multimedia resources developed through ROOT.", tr: "ROOT aracılığıyla geliştirilen eğitim setleri, raporlar, müfredatlar ve multimedya kaynakları.", sr: "Alati, izveštaji, programi...", es: "Kits de herramientas, informes, planes de estudio...", ar: "مجموعات الأدوات والتقارير والمناهج..."},
    note: {en: "📌 Deliverables are released progressively throughout the project duration. Check back regularly for updates or follow our", tr: "📌 Çıktılar proje süresince kademeli olarak yayınlanmaktadır. Güncellemeler için düzenli olarak kontrol edin veya takip edin", sr: "📌 Rezultati se objavljuju progresivno...", es: "📌 Los entregables se publican progresivamente...", ar: "📌 يتم إصدار المخرجات تدريجياً..."},
    news_page: {en: "News page", tr: "Haberler sayfamızı", sr: "Stranica sa vestima", es: "Página de noticias", ar: "صفحة الأخبار"},
    for_ann: {en: "for announcements.", tr: "duyurular için.", sr: "za najave.", es: "para anuncios.", ar: "للإعلانات."}
  },
  news: {
    all: {en: "All", tr: "Tümü", sr: "Sve", es: "Todo", ar: "الكل"},
    announcements: {en: "Announcements", tr: "Duyurular", sr: "Najave", es: "Anuncios", ar: "إعلانات"},
    updates: {en: "Updates", tr: "Güncellemeler", sr: "Ažuriranja", es: "Actualizaciones", ar: "تحديثات"},
    articles: {en: "Articles", tr: "Makaleler", sr: "Članci", es: "Artículos", ar: "مقالات"},
    events: {en: "Events", tr: "Etkinlikler", sr: "Događaji", es: "Eventos", ar: "فعاليات"}
  },
  events: {
    upcoming: {en: "Upcoming & Ongoing Events", tr: "Yaklaşan & Devam Eden Etkinlikler", sr: "Predstojeći i tekući događaji", es: "Eventos próximos y en curso", ar: "الفعاليات القادمة والمستمرة"},
    past: {en: "Past Events", tr: "Geçmiş Etkinlikler", sr: "Prošli događaji", es: "Eventos pasados", ar: "فعاليات سابقة"}
  }
};

const langs = ['en', 'tr', 'sr', 'es', 'ar'];

for(const lang of langs) {
  const filePath = path.join(__dirname, 'src', 'locales', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for(const section in addDict) {
    if(!content[section]) content[section] = {};
    for(const key in addDict[section]) {
      content[section][key] = addDict[section][key][lang];
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
}
