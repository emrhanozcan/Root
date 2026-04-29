import type { NewsItem, NewsLanguage } from '@/types';

const normalizeLanguage = (language: string): NewsLanguage => {
  const code = language.split('-')[0] as NewsLanguage;
  return ['en', 'tr', 'sr', 'es', 'ar'].includes(code) ? code : 'en';
};

export function getLocalizedNewsItem(item: NewsItem, language: string): NewsItem {
  const translation = item.translations?.[normalizeLanguage(language)] || item.translations?.en;

  if (!translation) {
    return item;
  }

  return {
    ...item,
    title: translation.title,
    excerpt: translation.excerpt,
    content: translation.content,
    pdfLabel: translation.pdfLabel || item.pdfLabel,
  };
}

export const newsItems: NewsItem[] = [
  {
    slug: 'root-newsletter-issue-1-published',
    title: 'ROOT Newsletter Issue 1 Published',
    excerpt:
      'The first ROOT newsletter is now available, introducing the project vision, consortium, core activities, and the shared commitment to empowering rural youth.',
    content: `
      <p>The first issue of the ROOT newsletter has been published and is now available for everyone interested in following the project's progress. This edition introduces ROOT - Rural Opportunities and Outreach for Tomorrow - and presents the shared mission behind the consortium's work with rural young people.</p>

      <p>ROOT focuses on strengthening opportunities for youth in rural and semi-rural areas by combining international cooperation, non-formal education, entrepreneurship, sustainability, and community-based learning. The newsletter gives readers a clear starting point for understanding why the project exists and how it aims to make rural life more visible, attractive, and future-oriented for young people.</p>

      <h3>What This Issue Covers</h3>
      <p>The newsletter highlights the main direction of the project, including the need to respond to rural depopulation, limited access to opportunities, and the gap between young people's ambitions and the resources available in their local communities. It also introduces the partner organizations working together across different countries and explains how their experience contributes to the wider ROOT approach.</p>

      <p>Readers can find information about the project's early activities, communication priorities, and the first steps being taken to build common tools and learning resources. The issue also frames ROOT as a collaborative effort: each partner brings local knowledge, youth work experience, and a commitment to creating practical pathways for young people who want to stay connected to their roots while building a sustainable future.</p>

      <h3>Why It Matters</h3>
      <p>Rural communities across Europe and neighbouring regions often face similar challenges: fewer services, reduced mobility, limited employment options, and the perception that meaningful opportunities exist mainly in urban centres. ROOT responds to these challenges by supporting young people, youth workers, and local stakeholders with resources that can help identify possibilities already present in rural areas and develop new ones through cooperation.</p>

      <p>The newsletter is therefore more than a project update. It is an invitation to follow a process of learning, exchange, and practical action. Through future activities and outputs, ROOT will continue sharing stories, tools, and examples that show how rural areas can become spaces for innovation, participation, entrepreneurship, and social connection.</p>

      <h3>Download the Newsletter</h3>
      <p>The full PDF version of the first ROOT newsletter is available below. Users can download it, share it with their networks, or use it as an introduction to the project and its upcoming work.</p>
    `,
    coverImage: '',
    date: '2026-04-28',
    category: 'announcement',
    pdfUrl: '/news/ROOT%20NL%201%20EN.pdf',
    pdfLabel: 'ROOT Newsletter Issue 1 (PDF)',
    featured: true,
    translations: {
      en: {
        title: 'ROOT Newsletter Issue 1 Published',
        excerpt:
          'The first ROOT newsletter is now available, introducing the project vision, consortium, core activities, and the shared commitment to empowering rural youth.',
        content: `
          <p>The first issue of the ROOT newsletter has been published and is now available for everyone interested in following the project's progress. This edition introduces ROOT - Rural Opportunities and Outreach for Tomorrow - and presents the shared mission behind the consortium's work with rural young people.</p>

          <p>ROOT focuses on strengthening opportunities for youth in rural and semi-rural areas by combining international cooperation, non-formal education, entrepreneurship, sustainability, and community-based learning. The newsletter gives readers a clear starting point for understanding why the project exists and how it aims to make rural life more visible, attractive, and future-oriented for young people.</p>

          <h3>What This Issue Covers</h3>
          <p>The newsletter highlights the main direction of the project, including the need to respond to rural depopulation, limited access to opportunities, and the gap between young people's ambitions and the resources available in their local communities. It also introduces the partner organizations working together across different countries and explains how their experience contributes to the wider ROOT approach.</p>

          <p>Readers can find information about the project's early activities, communication priorities, and the first steps being taken to build common tools and learning resources. The issue also frames ROOT as a collaborative effort: each partner brings local knowledge, youth work experience, and a commitment to creating practical pathways for young people who want to stay connected to their roots while building a sustainable future.</p>

          <h3>Why It Matters</h3>
          <p>Rural communities across Europe and neighbouring regions often face similar challenges: fewer services, reduced mobility, limited employment options, and the perception that meaningful opportunities exist mainly in urban centres. ROOT responds to these challenges by supporting young people, youth workers, and local stakeholders with resources that can help identify possibilities already present in rural areas and develop new ones through cooperation.</p>

          <p>The newsletter is therefore more than a project update. It is an invitation to follow a process of learning, exchange, and practical action. Through future activities and outputs, ROOT will continue sharing stories, tools, and examples that show how rural areas can become spaces for innovation, participation, entrepreneurship, and social connection.</p>

          <h3>Download the Newsletter</h3>
          <p>The full PDF version of the first ROOT newsletter is available below. Users can download it, share it with their networks, or use it as an introduction to the project and its upcoming work.</p>
        `,
        pdfLabel: 'ROOT Newsletter Issue 1 (PDF)',
      },
      tr: {
        title: 'ROOT Bülteni 1. Sayı Yayımlandı',
        excerpt:
          'İlk ROOT bülteni yayımlandı; proje vizyonunu, konsorsiyumu, temel faaliyetleri ve kırsal gençliği güçlendirmeye yönelik ortak kararlılığı tanıtıyor.',
        content: `
          <p>ROOT bülteninin ilk sayısı yayımlandı ve projenin gelişimini takip etmek isteyen herkesin erişimine açıldı. Bu sayı, ROOT - Rural Opportunities and Outreach for Tomorrow projesini tanıtırken konsorsiyumun kırsal gençlerle çalışma konusundaki ortak misyonunu da ortaya koyuyor.</p>

          <p>ROOT, kırsal ve yarı kırsal alanlarda yaşayan gençler için fırsatları güçlendirmeye odaklanır. Bunu uluslararası iş birliği, yaygın eğitim, girişimcilik, sürdürülebilirlik ve toplum temelli öğrenmeyi bir araya getirerek yapar. Bülten, projenin neden başlatıldığını ve kırsal yaşamı gençler için nasıl daha görünür, çekici ve gelecek odaklı hale getirmeyi amaçladığını anlamak için net bir başlangıç sunar.</p>

          <h3>Bu Sayıda Neler Var?</h3>
          <p>Bülten; kırsal nüfus kaybı, fırsatlara sınırlı erişim ve gençlerin hedefleri ile yerel topluluklarda bulunan kaynaklar arasındaki boşluk gibi konulara yanıt verme ihtiyacını vurgulayarak projenin ana yönelimini aktarır. Ayrıca farklı ülkelerden birlikte çalışan ortak kuruluşları tanıtır ve her ortağın deneyiminin ROOT yaklaşımına nasıl katkıda bulunduğunu açıklar.</p>

          <p>Okuyucular, projenin ilk faaliyetleri, iletişim öncelikleri ve ortak araçlar ile öğrenme kaynakları geliştirmek için atılan ilk adımlar hakkında bilgi bulabilir. Bu sayı ROOT'u iş birliğine dayalı bir süreç olarak konumlandırır: her ortak yerel bilgi, gençlik çalışması deneyimi ve gençlerin kökleriyle bağlarını korurken sürdürülebilir bir gelecek kurmalarına yardımcı olacak pratik yollar oluşturma kararlılığı getirir.</p>

          <h3>Neden Önemli?</h3>
          <p>Avrupa ve komşu bölgelerdeki kırsal topluluklar sıklıkla benzer zorluklarla karşılaşır: daha az hizmet, sınırlı hareketlilik, kısıtlı istihdam seçenekleri ve anlamlı fırsatların esas olarak kent merkezlerinde bulunduğuna dair algı. ROOT, kırsal alanlarda hâlihazırda var olan olanakları görünür kılmaya ve iş birliğiyle yeni fırsatlar geliştirmeye yardımcı olacak kaynaklarla gençleri, gençlik çalışanlarını ve yerel paydaşları destekler.</p>

          <p>Bu nedenle bülten yalnızca bir proje güncellemesi değildir. Öğrenme, deneyim paylaşımı ve pratik eylem sürecini takip etmeye yönelik bir davettir. ROOT, gelecek faaliyetleri ve çıktıları aracılığıyla kırsal alanların yenilik, katılım, girişimcilik ve sosyal bağ kurma alanları olabileceğini gösteren hikâyeler, araçlar ve örnekler paylaşmaya devam edecektir.</p>

          <h3>Bülteni İndirin</h3>
          <p>İlk ROOT bülteninin tam PDF sürümü aşağıda yer almaktadır. Kullanıcılar dosyayı indirebilir, ağlarıyla paylaşabilir veya projeyi ve yaklaşan çalışmaları tanımak için kullanabilir.</p>
        `,
        pdfLabel: 'ROOT Bülteni 1. Sayı (PDF)',
      },
      sr: {
        title: 'Objavljen je prvi broj ROOT biltena',
        excerpt:
          'Prvi ROOT bilten je dostupan i predstavlja viziju projekta, konzorcijum, kljucne aktivnosti i zajednicku posvecenost osnazivanju mladih iz ruralnih sredina.',
        content: `
          <p>Prvi broj ROOT biltena je objavljen i dostupan je svima koji zele da prate razvoj projekta. Ovo izdanje predstavlja ROOT - Rural Opportunities and Outreach for Tomorrow - i zajednicku misiju konzorcijuma u radu sa mladima iz ruralnih sredina.</p>

          <p>ROOT je usmeren na jacanje mogucnosti za mlade u ruralnim i polururalnim oblastima kroz medjunarodnu saradnju, neformalno obrazovanje, preduzetnistvo, odrzivost i ucenje zasnovano na zajednici. Bilten citaocima daje jasan uvod u razloge pokretanja projekta i nacine na koje projekat zeli da ruralni zivot ucini vidljivijim, privlacnijim i okrenutim buducnosti.</p>

          <h3>Sta donosi ovaj broj?</h3>
          <p>Bilten istice glavni pravac projekta, ukljucujuci potrebu da se odgovori na depopulaciju ruralnih podrucja, ogranicen pristup mogucnostima i jaz izmedju ambicija mladih i resursa dostupnih u lokalnim zajednicama. Takodje predstavlja partnerske organizacije iz razlicitih zemalja i objasnjava kako njihovo iskustvo doprinosi ROOT pristupu.</p>

          <p>Citaoci mogu pronaci informacije o prvim projektnim aktivnostima, komunikacionim prioritetima i pocetnim koracima u izradi zajednickih alata i obrazovnih resursa. Izdanje prikazuje ROOT kao saradnicki proces u kojem svaki partner donosi lokalno znanje, iskustvo u omladinskom radu i posvecenost stvaranju prakticnih puteva za mlade koji zele da ostanu povezani sa svojim korenima i grade odrzivu buducnost.</p>

          <h3>Zasto je vazno?</h3>
          <p>Ruralne zajednice sirom Evrope i susednih regiona cesto se suocavaju sa slicnim izazovima: manjim brojem usluga, ogranicenom mobilnoscu, manjkom mogucnosti za zaposljavanje i uverenjem da se znacajne prilike nalaze uglavnom u urbanim centrima. ROOT na ove izazove odgovara podrskom mladima, omladinskim radnicima i lokalnim akterima kroz resurse koji pomazu da se prepoznaju postojece mogucnosti u ruralnim sredinama i razviju nove kroz saradnju.</p>

          <p>Zato bilten nije samo projektna vest. On je poziv da se prati proces ucenja, razmene i prakticnog delovanja. Kroz buduce aktivnosti i rezultate, ROOT ce nastaviti da deli price, alate i primere koji pokazuju da ruralne oblasti mogu biti prostori inovacija, ucesca, preduzetnistva i drustvenog povezivanja.</p>

          <h3>Preuzmite bilten</h3>
          <p>Puna PDF verzija prvog ROOT biltena dostupna je ispod. Korisnici je mogu preuzeti, podeliti sa svojim mrezama ili koristiti kao uvod u projekat i njegove naredne aktivnosti.</p>
        `,
        pdfLabel: 'ROOT bilten, broj 1 (PDF)',
      },
      es: {
        title: 'Publicado el primer boletin de ROOT',
        excerpt:
          'El primer boletin de ROOT ya esta disponible y presenta la vision del proyecto, el consorcio, las actividades principales y el compromiso compartido con el empoderamiento de la juventud rural.',
        content: `
          <p>Ya se ha publicado el primer numero del boletin de ROOT y esta disponible para todas las personas interesadas en seguir el progreso del proyecto. Esta edicion presenta ROOT - Rural Opportunities and Outreach for Tomorrow - y la mision compartida del consorcio en su trabajo con jovenes de zonas rurales.</p>

          <p>ROOT se centra en fortalecer las oportunidades para jovenes de areas rurales y semirrurales combinando cooperacion internacional, educacion no formal, emprendimiento, sostenibilidad y aprendizaje comunitario. El boletin ofrece un punto de partida claro para comprender por que existe el proyecto y como busca hacer que la vida rural sea mas visible, atractiva y orientada al futuro para la juventud.</p>

          <h3>Que incluye este numero</h3>
          <p>El boletin destaca la direccion principal del proyecto, incluida la necesidad de responder a la despoblacion rural, el acceso limitado a oportunidades y la brecha entre las aspiraciones de la juventud y los recursos disponibles en sus comunidades locales. Tambien presenta a las organizaciones socias que trabajan juntas desde distintos paises y explica como su experiencia contribuye al enfoque general de ROOT.</p>

          <p>Las personas lectoras encontraran informacion sobre las primeras actividades del proyecto, las prioridades de comunicacion y los pasos iniciales para crear herramientas y recursos de aprendizaje comunes. Este numero tambien presenta ROOT como un esfuerzo colaborativo: cada socio aporta conocimiento local, experiencia en trabajo juvenil y el compromiso de crear caminos practicos para jovenes que desean mantenerse conectados con sus raices mientras construyen un futuro sostenible.</p>

          <h3>Por que es importante</h3>
          <p>Las comunidades rurales de Europa y regiones vecinas suelen enfrentarse a retos similares: menos servicios, movilidad reducida, opciones de empleo limitadas y la percepcion de que las oportunidades significativas se encuentran principalmente en los centros urbanos. ROOT responde a estos retos apoyando a jovenes, trabajadores juveniles y actores locales con recursos que ayudan a identificar posibilidades ya existentes en las zonas rurales y a desarrollar otras nuevas mediante la cooperacion.</p>

          <p>Por eso, el boletin es mas que una actualizacion del proyecto. Es una invitacion a seguir un proceso de aprendizaje, intercambio y accion practica. A traves de futuras actividades y resultados, ROOT seguira compartiendo historias, herramientas y ejemplos que muestran como las zonas rurales pueden convertirse en espacios de innovacion, participacion, emprendimiento y conexion social.</p>

          <h3>Descarga el boletin</h3>
          <p>La version completa en PDF del primer boletin de ROOT esta disponible a continuacion. Las personas usuarias pueden descargarla, compartirla con sus redes o utilizarla como introduccion al proyecto y a su trabajo futuro.</p>
        `,
        pdfLabel: 'Boletin ROOT, numero 1 (PDF)',
      },
      ar: {
        title: 'نشر العدد الأول من نشرة ROOT',
        excerpt:
          'أصبحت النشرة الأولى لمشروع ROOT متاحة الآن، وتقدم رؤية المشروع والائتلاف والأنشطة الرئيسية والالتزام المشترك بتمكين الشباب في المناطق الريفية.',
        content: `
          <p>تم نشر العدد الأول من نشرة ROOT، وأصبح متاحا لكل من يرغب في متابعة تطور المشروع. يقدم هذا العدد مشروع ROOT - Rural Opportunities and Outreach for Tomorrow - ويعرض الرسالة المشتركة للائتلاف في العمل مع الشباب في المناطق الريفية.</p>

          <p>يركز ROOT على تعزيز الفرص المتاحة للشباب في المناطق الريفية وشبه الريفية من خلال الجمع بين التعاون الدولي، والتعليم غير الرسمي، وريادة الأعمال، والاستدامة، والتعلم القائم على المجتمع. تقدم النشرة مدخلا واضحا لفهم سبب إطلاق المشروع وكيف يسعى إلى جعل الحياة الريفية أكثر وضوحا وجاذبية وتوجها نحو المستقبل للشباب.</p>

          <h3>ماذا يتضمن هذا العدد؟</h3>
          <p>تسلط النشرة الضوء على التوجه الرئيسي للمشروع، بما في ذلك الحاجة إلى الاستجابة لتراجع السكان في المناطق الريفية، ومحدودية الوصول إلى الفرص، والفجوة بين طموحات الشباب والموارد المتاحة في مجتمعاتهم المحلية. كما تعرف بالمنظمات الشريكة التي تعمل معا من دول مختلفة وتوضح كيف تسهم خبراتها في نهج ROOT العام.</p>

          <p>يمكن للقراء الاطلاع على معلومات حول الأنشطة الأولى للمشروع، وأولويات التواصل، والخطوات الأولى لبناء أدوات وموارد تعليمية مشتركة. كما يقدم هذا العدد ROOT باعتباره جهدا تعاونيا، حيث يجلب كل شريك معرفة محلية وخبرة في العمل الشبابي والتزاما بإنشاء مسارات عملية للشباب الذين يرغبون في البقاء متصلين بجذورهم وبناء مستقبل مستدام.</p>

          <h3>لماذا هذا مهم؟</h3>
          <p>غالبا ما تواجه المجتمعات الريفية في أوروبا والمناطق المجاورة تحديات متشابهة: خدمات أقل، وحركة محدودة، وخيارات توظيف ضيقة، وانطباعا بأن الفرص المهمة توجد أساسا في المراكز الحضرية. يستجيب ROOT لهذه التحديات من خلال دعم الشباب والعاملين في مجال الشباب والجهات المحلية بموارد تساعد على تحديد الإمكانات الموجودة بالفعل في المناطق الريفية وتطوير فرص جديدة من خلال التعاون.</p>

          <p>لذلك فإن النشرة ليست مجرد تحديث للمشروع. إنها دعوة لمتابعة مسار من التعلم والتبادل والعمل العملي. ومن خلال الأنشطة والمخرجات القادمة، سيواصل ROOT مشاركة القصص والأدوات والأمثلة التي تبين كيف يمكن للمناطق الريفية أن تكون مساحات للابتكار والمشاركة وريادة الأعمال والتواصل الاجتماعي.</p>

          <h3>تنزيل النشرة</h3>
          <p>تتوفر النسخة الكاملة بصيغة PDF من النشرة الأولى لمشروع ROOT أدناه. يمكن للمستخدمين تنزيلها أو مشاركتها مع شبكاتهم أو استخدامها كمدخل للتعرف إلى المشروع وأعماله القادمة.</p>
        `,
        pdfLabel: 'نشرة ROOT، العدد الأول (PDF)',
      },
    },
  },
];
