const fs = require('fs');
const path = require('path');

const localesPattern = {
  en: {}, tr: {}, sr: {}, es: {}, ar: {}
};

// Data models for new pages and sections
const addDict = {
  intro: {
    title: {
      en: "Growing Opportunities, Together",
      tr: "Birlikte Fırsatlar Büyütüyoruz",
      sr: "Zajedno stvaramo mogućnosti",
      es: "Creciendo Oportunidades, Juntos",
      ar: "ننمي الفرص معًا"
    },
    subtitle: {
      en: "ROOT brings together youth organizations from 6 countries to tackle the challenges of rural decline by empowering young people with knowledge, networks, and tools for sustainable rural development.",
      tr: "ROOT, kırsal kalkınma için gençleri bilgi, ağlar ve araçlarla güçlendirerek kırsal gerilemeyle mücadele etmek için 6 ülkeden gençlik kuruluşlarını bir araya getiriyor.",
      sr: "ROOT okuplja omladinske organizacije iz 6 zemalja kako bi se uhvatili u koštac sa izazovima ruralnog opadanja osnaživanjem mladih ljudi znanjem, mrežama i alatima za održivi ruralni razvoj.",
      es: "ROOT reúne a organizaciones juveniles de 6 países para abordar los desafíos del declive rural empoderando a los jóvenes con conocimientos, redes y herramientas para el desarrollo rural sostenible.",
      ar: "يجمع ROOT بين منظمات الشباب من 6 دول لمواجهة تحديات التدهور الريفي من خلال تمكين الشباب بالمعرفة والشبكات والأدوات اللازمة للتنمية الريفية المستدامة."
    },
    f1_t: {en: "Sustainable Growth", tr: "Sürdürülebilir Büyüme", sr: "Održivi razvoj", es: "Crecimiento Sostenible", ar: "نمو مستدام"},
    f1_d: {en: "Promoting environmentally conscious approaches to rural development and community building.", tr: "Kırsal kalkınma ve toplum inşası için çevre dostu yaklaşımları teşvik etmek.", sr: "Promovisanje ekološki osvešćenih pristupa ruralnom razvoju i izgradnji zajednice.", es: "Promoviendo enfoques conscientes del medio ambiente para el desarrollo rural y la construcción comunitaria.", ar: "تعزيز النهج الواعية بيئياً للتنمية الريفية وبناء المجتمع."},
    f2_t: {en: "Youth Leadership", tr: "Gençlik Liderliği", sr: "Liderstvo mladih", es: "Liderazgo Juvenil", ar: "القيادة الشبابية"},
    f2_d: {en: "Equipping young people with the skills and confidence to drive change in their communities.", tr: "Gençleri topluluklarında değişimi yönlendirecek beceri ve güvenle donatmak.", sr: "Opremanje mladih ljudi veštinama i samopouzdanjem da pokrenu promene u svojim zajednicama.", es: "Equipando a los jóvenes con las habilidades y la confianza para impulsar el cambio en sus comunidades.", ar: "تزويد الشباب بالمهارات والثقة لدفع عجلة التغيير في مجتمعاتهم."},
    f3_t: {en: "International Exchange", tr: "Uluslararası Değişim", sr: "Međunarodna razmena", es: "Intercambio Internacional", ar: "تبادل دولي"},
    f3_d: {en: "Connecting rural youth across 6 countries to share experiences and best practices.", tr: "Deneyimleri ve en iyi uygulamaları paylaşmak için 6 ülkedeki kırsal gençliği birbirine bağlamak.", sr: "Povezivanje ruralne omladine iz 6 zemalja kako bi razmenili iskustva i najbolje prakse.", es: "Conectando a la juventud rural de 6 países para compartir experiencias y mejores prácticas.", ar: "ربط الشباب الريفي عبر 6 دول لتبادل الخبرات وأفضل الممارسات."},
    f4_t: {en: "Innovation", tr: "İnovasyon", sr: "Inovacija", es: "Innovación", ar: "الابتكار"},
    f4_d: {en: "Exploring creative solutions to rural challenges through agritourism, digital tools, and entrepreneurship.", tr: "Agroturizm, dijital araçlar ve girişimcilik yoluyla kırsal zorluklara yaratıcı çözümler keşfetmek.", sr: "Istraživanje kreativnih rešenja za ruralne izazove kroz agroturizam, digitalne alate i preduzetništvo.", es: "Explorando soluciones creativas a los desafíos rurales a través del agroturismo, herramientas digitales y emprendimiento.", ar: "استكشاف الحلول الإبداعية للتحديات الريفية من خلال السياحة الزراعية والأدوات الرقمية وريادة الأعمال."}
  },
  stats: {
    title: {en: "Project at a Glance", tr: "Bir Bakışta Proje", sr: "Projekat ukratko", es: "El Proyecto en un Vistazo", ar: "المشروع في سطور"},
    subtitle: {en: "Key facts and figures about the ROOT project.", tr: "ROOT projesi hakkında önemli gerçekler ve rakamlar.", sr: "Ključne činjenice i brojke o projektu ROOT.", es: "Datos y cifras clave sobre el proyecto ROOT.", ar: "حقائق وأرقام رئيسية حول مشروع ROOT."},
    s1: {en: "Partner Countries", tr: "Ortak Ülke", sr: "Zemlje partneri", es: "Países Socios", ar: "الدول الشريكة"},
    s2: {en: "Months Duration", tr: "Ay Süre", sr: "Meseci trajanja", es: "Meses de Duración", ar: "شهر مدة المشروع"},
    s3: {en: "Key Deliverables", tr: "Temel Çıktılar", sr: "Ključni rezultati", es: "Entregables Clave", ar: "مخرجات رئيسية"},
    s4: {en: "Youth to Reach", tr: "Ulaşılacak Genç", sr: "Mladi do kojih treba doći", es: "Jóvenes a Alcanzar", ar: "شباب مستهدفون"}
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
