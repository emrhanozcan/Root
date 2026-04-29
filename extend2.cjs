const fs = require('fs');
const path = require('path');

const addDict = {
  about: {
    hero_title: {
      en: "About the ROOT Project",
      tr: "ROOT Projesi Hakkında",
      sr: "O ROOT Projektu",
      es: "Acerca del Proyecto ROOT",
      ar: "حول مشروع ROOT"
    },
    overview_title: { en: "Project Overview", tr: "Projeye Genel Bakış", sr: "Pregled projekta", es: "Descripción del Proyecto", ar: "نظرة عامة على المشروع" },
    overview_sub: { en: "Bridging the urban-rural divide through youth empowerment and international cooperation.", tr: "Gençleri güçlendirerek ve uluslararası işbirliğiyle kent-kır uçurumunu kapatıyoruz.", sr: "Premošćavanje jaza između urbanih i ruralnih sredina kroz osnaživanje mladih i međunarodnu saradnju.", es: "Superando la brecha urbano-rural a través del empoderamiento juvenil y la cooperación internacional.", ar: "سد الفجوة بين الريف والحضر من خلال تمكين الشباب والتعاون الدولي." },
    overview_p1: { en: "Across many regions, rural areas face interconnected challenges...", tr: "Pek çok bölgede kırsal alanlar birbirine bağlı zorluklarla karşı karşıya...", sr: "U mnogim regionima ruralna područja se suočavaju...", es: "En muchas regiones, las áreas rurales enfrentan...", ar: "عبر العديد من المناطق، تواجه المناطق الريفية تحديات..." },
    overview_p2: { en: "The ROOT project responds to this reality...", tr: "ROOT projesi bu gerçeğe yanıt veriyor...", sr: "ROOT projekat odgovara na tu realnost...", es: "El proyecto ROOT responde a esta realidad...", ar: "يستجيب مشروع ROOT لهذا الواقع..." },
    overview_p3: { en: "Funded under the Erasmus+ programme...", tr: "Erasmus+ programı kapsamında finanse edilmektedir...", sr: "Finansiran iz Erasmus+ programa...", es: "Financiado por el programa Erasmus+...", ar: "ممولة ضمن برنامج إيراسموس+..." },
    mission_t: { en: "Our Mission", tr: "Misyonumuz", sr: "Naša Misija", es: "Nuestra Misión", ar: "مهمتنا" },
    mission_d: { en: "To empower rural youth with skills, knowledge, and networks that enable them to create meaningful change in their communities and build fulfilling lives close to their roots.", tr: "Kırsal gençleri, kendi topluluklarında anlamlı değişimler yaratabilecek beceri, bilgi ve ağlarla donatmak.", sr: "Da osnažimo ruralnu omladinu veštinama, znanjem i mrežama koje im omogućavaju da stvore značajne promene u svojim zajednicama i grade ispunjene živote blizu svojih korena.", es: "Empoderar a la juventud rural con habilidades, conocimientos y redes que les permitan crear un cambio significativo en sus comunidades y construir vidas plenas cerca de sus raíces.", ar: "تمكين الشباب الريفي بالمهارات والمعرفة والشبكات التي تمكنهم من إحداث تغيير ملموس في مجتمعاتهم وبناء حياة مرضية بالقرب من جذورهم." },
    vision_t: { en: "Our Vision", tr: "Vizyonumuz", sr: "Naša Vizija", es: "Nuestra Visión", ar: "رؤيتنا" },
    vision_d: { en: "A world where rural communities thrive, where young people see the countryside as a place of possibility...", tr: "Kırsal toplulukların geliştiği, gençlerin kırsalı bir olasılıklar yeri olarak gördüğü bir dünya...", sr: "Svet u kome ruralne zajednice uspevaju, gde mladi vide selo kao mesto mogućnosti i gde se jaz između urbanog i ruralnog prevazilazi inovacijama, solidarnošću i zajedničkom svrhom.", es: "Un mundo donde prosperan las comunidades rurales, donde los jóvenes ven el campo como un lugar de posibilidades, y donde la brecha urbano-rural se salva gracias a la innovación, la solidaridad y un propósito compartido.", ar: "عالم تزدهر فيه المجتمعات الريفية، حيث يرى الشباب الريف كمكان للامكانيات، وحيث يتم سد الفجوة بين الريف والحضر من خلال الابتكار والتضامن والهدف المشترك." },
    matters_t: { en: "Why It Matters", tr: "Neden Önemli", sr: "Zašto je Važno", es: "Por Qué Importa", ar: "لماذا هذا مهم" },
    matters_d: { en: "Rural decline affects many regions — socially, economically, and environmentally. By investing in rural youth, we invest in resilient communities, sustainable food systems, and a more balanced society.", tr: "Kırsal gerileme pek çok bölgeyi etkiliyor. Kırsal gençliğe yatırım yaparak dayanıklı topluluklara ve sürdürülebilir bir topluma yatırım yapıyoruz.", sr: "Opadanje ruralnih područja pogađa mnoge regione - socijalno, ekonomski i ekološki. Ulaganjem u ruralnu omladinu ulažemo u otporne zajednice, održive sisteme ishrane i uravnoteženije društvo.", es: "El declive rural afecta a muchas regiones: social, económica y medioambientalmente. Al invertir en la juventud rural, invertimos en comunidades resilientes, sistemas alimentarios sostenibles y una sociedad más equilibrada.", ar: "التدهور الريفي يؤثر على العديد من المناطق - اجتماعياً واقتصادياً وبيئياً. من خلال الاستثمار في الشباب الريفي، نستثمر في مجتمعات قوية، ونظم غذائية مستدامة، ومجتمع أكثر توازناً." },
    target_title: { en: "Target Groups", tr: "Hedef Kitle", sr: "Ciljne Grupe", es: "Grupos Objetivo", ar: "الفئات المستهدفة" },
    target_sub: { en: "The people at the heart of ROOT.", tr: "ROOT'un kalbindeki insanlar.", sr: "Ljudi u srcu ROOT-a.", es: "La gente en el corazón de ROOT.", ar: "الأشخاص في قلب ROOT." },
    impact_title: {en: "Expected Impact", tr: "Beklenen Etki", sr: "Očekivani Uticaj", es: "Impacto Esperado", ar: "التأثير المتوقع"},
    impact_sub: {en: "The change we aim to create through ROOT.", tr: "ROOT aracılığıyla yaratmayı amaçladığımız değişim.", sr: "Promena koju želimo da stvorimo kroz ROOT.", es: "El cambio que pretendemos crear a través de ROOT.", ar: "التغيير الذي نهدف إلى خلقه من خلال ROOT."}
  },
  objectives: {
    title: {en: "Project Objectives", tr: "Proje Hedefleri", sr: "Ciljevi projekta", es: "Objetivos del Proyecto", ar: "أهداف المشروع"},
    subtitle: {en: "Six strategic goals guiding our work...", tr: "Çalışmalarımıza yön veren altı stratejik hedef...", sr: "Šest strateških ciljeva koji vode naš rad...", es: "Seis objetivos estratégicos que guían nuestro trabajo...", ar: "ستة أهداف استراتيجية توجه عملنا..."},
    o1_t: {en: "Map Rural Challenges", tr: "Kırsal Zorlukları Haritalandırma", sr: "Mapiranje ruralnih izazova", es: "Mapeo de Desafíos Rurales", ar: "تحديد التحديات الريفية"},
    o1_d: {en: "Conduct comprehensive needs assessments...", tr: "Kırsal gençlerin karşılaştığı fiziksel ve sosyal engelleri anlamak için kapsamlı ihtiyaç analizleri yapmak.", sr: "Sprovesti sveobuhvatnu procenu potreba kako bi se razumeli stvarni izazovi sa kojima se suočava ruralna omladina...", es: "Realizar evaluaciones integrales de necesidades para comprender las barreras reales d la juventud rural...", ar: "إجراء تقييمات شاملة للاحتياجات لفهم العقبات الحقيقية التي تواجه الشباب الريفي..."},
    o2_t: {en: "Develop Educational Resources", tr: "Eğitim Kaynakları Geliştirme", sr: "Razvoj obrazovnih resursa", es: "Desarrollar Recursos Educativos", ar: "تطوير الموارد التعليمية"},
    o2_d: {en: "Create an open-access toolkit...", tr: "Açık erişimli kaynaklar oluşturmak...", sr: "Kreiranje alata otvorenog pristupa...", es: "Crear un conjunto de herramientas de libre acceso...", ar: "إنشاء مجموعة أدوات مفتوحة الوصول..."},
    o3_t: {en: "Foster Entrepreneurship", tr: "Girişimciliği Teşvik Etme", sr: "Podsticanje preduzetništva", es: "Fomentar el Emprendimiento", ar: "تعزيز ريادة الأعمال"},
    o3_d: {en: "Equip young people with skills...", tr: "Gençleri yenilikçi becerilerle donatmak...", sr: "Opremanje mladih ljudima veštinama...", es: "Equipar a los jóvenes con habilidades...", ar: "تزويد الشباب بالمهارات..."},
    o4_t: {en: "Build Networks", tr: "Ağ Kurma", sr: "Izgradnja mreža", es: "Construir Redes", ar: "بناء الشبكات"},
    o4_d: {en: "Establish a cross-border community...", tr: "Sınır ötesi bir uygulama topluluğu oluşturmak...", sr: "Uspostavljanje prekogranične zajednice...", es: "Establecer una comunidad transfronteriza...", ar: "إنشاء مجتمع عبر الحدود..."},
    o5_t: {en: "Champion Sustainability", tr: "Sürdürülebilirliği Destekleme", sr: "Podrška održivosti", es: "Impulsar la Sostenibilidad", ar: "تعزيز الاستدامة"},
    o5_d: {en: "Promote environmentally and socially sustainable approaches...", tr: "Kırsal alanlarda sürdürülebilir yaklaşımları desteklemek...", sr: "Promovisanje ekološki i socijalno održivih pristupa...", es: "Promover enfoques medioambiental y socialmente sostenibles...", ar: "تعزيز النُهج المستدامة بيئيًا واجتماعيًا..."},
    o6_t: {en: "Inspire Rural Futures", tr: "Kırsal Geleceklere İlham Verme", sr: "Inspiracija za ruralnu budućnost", es: "Inspirar el Futuro Rural", ar: "إلهام المستقبل الريفي"},
    o6_d: {en: "Change perceptions about rural life...", tr: "Kırsal yaşam hakkındaki algıları değiştirmek...", sr: "Promena percepcija o ruralnom životu...", es: "Cambiar las percepciones sobre la vida rural...", ar: "تغيير التصورات حول الحياة الريفية..."}
  },
  contact: {
    form_name: {en: "Your Name", tr: "Adınız", sr: "Vaše ime", es: "Su Nombre", ar: "الاسم"},
    form_email: {en: "Your Email", tr: "E-posta Adresiniz", sr: "Vaš email", es: "Su Correo", ar: "البريد الإلكتروني"},
    form_subject: {en: "Subject", tr: "Konu", sr: "Predmet", es: "Asunto", ar: "الموضوع"},
    form_message: {en: "Your Message", tr: "Mesajınız", sr: "Vaša poruka", es: "Su Mensaje", ar: "رسالتك"},
    form_button: {en: "Send Message", tr: "Mesaj Gönder", sr: "Pošalji poruku", es: "Enviar Mensaje", ar: "إرسال رسالة"}
  }
};

const langs = ['en', 'tr', 'sr', 'es', 'ar'];

for(const lang of langs){
  const filePath = path.join(__dirname, 'src', 'locales', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for(const section in addDict){
    if(!content[section]) content[section] = {};
    for(const key in addDict[section]){
      content[section][key] = addDict[section][key][lang];
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
}
