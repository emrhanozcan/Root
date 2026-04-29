const fs = require('fs');
const path = require('path');

const addDict = {
  highlights: {
    title: {en: "Explore ROOT", tr: "ROOT'u Keşfedin", sr: "Istražite ROOT", es: "Explorar ROOT", ar: "استكشف ROOT"},
    subtitle: {en: "Dive deeper into the project, meet our partners, and stay up to date.", tr: "Projeyi derinlemesine inceleyin, ortaklarımızla tanışın ve güncel kalın.", sr: "Zaronite dublje u projekat, upoznajte naše partnere i budite u toku.", es: "Profundice en el proyecto, conozca a nuestros socios y manténgase actualizado.", ar: "تعمق في المشروع، وتعرف على شركائنا، وابق على اطلاع دائم."},
    h1_t: {en: "About the Project", tr: "Proje Hakkında", sr: "O Projektu", es: "Acerca del Proyecto", ar: "حول المشروع"},
    h1_d: {en: "Learn about our mission, vision, and the impact we aim to create for rural youth in our partner countries.", tr: "Misyonumuz, vizyonumuz ve hedefimiz olan etkiyi öğrenin.", sr: "Saznajte o misiji...", es: "Aprenda sobre nuestra misión...", ar: "تعرف على مهمتنا..."},
    h2_t: {en: "Our Partners", tr: "Ortaklarımız", sr: "Naši Partneri", es: "Nuestros Socios", ar: "شركاؤنا"},
    h2_d: {en: "Meet the six organizations from different countries collaborating to make ROOT a reality.", tr: "ROOT projesini gerçeğe dönüştüren altı kurumu tanıyın.", sr: "Upoznajte šest organizacija...", es: "Conozca las seis organizaciones...", ar: "تعرف على المنظمات الست..."},
    h3_t: {en: "Deliverables", tr: "Çıktılar", sr: "Rezultati", es: "Resultados", ar: "المخرجات"},
    h3_d: {en: "Explore the toolkits, reports, and training materials being developed through the project.", tr: "Proje ile üretilen eğitim materyallerini, raporları keşfedin.", sr: "Istražite edukativne materijale...", es: "Explore los materiales...", ar: "استكشف المواد التعليمية..."},
    h4_t: {en: "News & Updates", tr: "Haberler & Güncellemeler", sr: "Vesti & Novosti", es: "Noticias & Actualizaciones", ar: "الاخبار والتحديثات"},
    h4_d: {en: "Stay informed with the latest project news, articles, and announcements from the consortium.", tr: "Konsorsiyumun yayınladığı güncel projelere, haberlere, makalelere ve duyurulara erişin.", sr: "Budite informisani o najnovijim vestima projekta...", es: "Manténgase informado con las últimas noticias...", ar: "ابق على اطلاع بأحدث أخبار المشروع..."},
    learn_more: {en: "Learn more", tr: "Daha fazla bilgi", sr: "Saznaj više", es: "Más información", ar: "اعرف المزيد"}
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
