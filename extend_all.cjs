const fs = require('fs');
const path = require('path');

const addDict = {
  about: {
    hero_title: {
      en: "About the ROOT Project",
      tr: "ROOT Projesi Hakkında",
      sr: "O ROOT projektu",
      es: "Acerca del Proyecto ROOT",
      ar: "حول مشروع ROOT"
    },
    hero_sub: {
      en: "ROOT – Rural Opportunities and Outreach for Tomorrow is an Erasmus+ funded youth project that brings together six organizations from different countries to address the challenges and unlock the potential of rural communities.",
      tr: "ROOT, altı ülkeden kuruluşu, kırsal toplulukların potansiyelini ortaya çıkarmak ve zorluklarını aşmak için bir araya getiren Erasmus+ destekli bir gençlik projesidir.",
      sr: "ROOT je omladinski projekat finansiran od strane Erasmus+ programa koji okuplja šest organizacija...",
      es: "ROOT es un proyecto juvenil financiado por Erasmus+ que reúne a seis organizaciones...",
      ar: "مشروع ROOT هو مشروع للشباب ممول من إيراسموس+ يجمع بين ست منظمات..."
    }
  },
  partners: {
    hero_title: {en: "Our Partners", tr: "Ortaklarımız", sr: "Naši Partneri", es: "Nuestros Socios", ar: "شركاؤنا"},
    hero_sub: {en: "ROOT brings together six organizations...", tr: "ROOT, farklı ülkelerden altı kurumu bir araya getiriyor...", sr: "ROOT okuplja šest organizacija...", es: "ROOT reúne a seis organizaciones...", ar: "يجمع مشروع ROOT بين ست منظمات..."}
  },
  deliverables: {
    hero_title: {en: "Project Deliverables", tr: "Proje Çıktıları", sr: "Rezultati Projekta", es: "Resultados del Proyecto", ar: "مخرجات المشروع"},
    hero_sub: {en: "Explore the outputs and resources being developed...", tr: "Proje kapsamında geliştirilen kaynakları ve çıktıları keşfedin...", sr: "Istražite rezultate i resurse...", es: "Explora los resultados y recursos...", ar: "اكتشف المخرجات والموارد..."}
  },
  news: {
    hero_title: {en: "News & Updates", tr: "Haberler & Güncellemeler", sr: "Vesti & Novosti", es: "Noticias & Actualizaciones", ar: "الأخبار والتحديثات"},
    hero_sub: {en: "Stay informed about the latest developments...", tr: "En son gelişmelerden haberdar olun...", sr: "Budite informisani o najnovijim dešavanjima...", es: "Manténgase informado sobre los últimos desarrollos...", ar: "ابق على اطلاع بآخر التطورات..."}
  },
  events: {
    hero_title: {en: "Project Events", tr: "Proje Etkinlikleri", sr: "Događaji Projekta", es: "Eventos del Proyecto", ar: "فعاليات المشروع"},
    hero_sub: {en: "Meetings, workshops, training courses...", tr: "Toplantılar, atölyeler ve eğitim kursları...", sr: "Sastanci, radionice i obuke...", es: "Reuniones, talleres y cursos de formación...", ar: "الاجتماعات وورش العمل والدورات التدريبية..."}
  },
  contact: {
    hero_title: {en: "Get in Touch", tr: "İletişime Geçin", sr: "Stupite u Kontakt", es: "Ponerse en Contacto", ar: "تواصل معنا"},
    hero_sub: {en: "Have questions about the ROOT project?", tr: "ROOT projesi hakkında sorularınız mı var?", sr: "Imate pitanja o ROOT projektu?", es: "¿Tiene preguntas sobre el proyecto ROOT?", ar: "هل لديك أسئلة حول مشروع ROOT؟"}
  }
};

const langs = ['en', 'tr', 'sr', 'es', 'ar'];

for (const lang of langs) {
  const filePath = path.join(__dirname, 'src', 'locales', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  for (const section in addDict) {
    if (!content[section]) content[section] = {};
    for (const key in addDict[section]) {
      content[section][key] = addDict[section][key][lang];
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
}
