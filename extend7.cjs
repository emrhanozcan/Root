const fs = require('fs');
const path = require('path');

const addDict = {
  common: {
    project_no: {
      en: "Project No",
      tr: "Proje No",
      sr: "Broj projekta",
      es: "Nº de proyecto",
      ar: "رقم المشروع"
    }
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
