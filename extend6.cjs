const fs = require('fs');
const path = require('path');

const addDict = {
  common: {
    location: {
      en: "Belgrade, Serbia",
      tr: "Belgrad, Sırbistan",
      sr: "Beograd, Srbija",
      es: "Belgrado, Serbia",
      ar: "بلغراد، صربيا"
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
