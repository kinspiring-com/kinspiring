const _ = require('lodash');
const en = require('./src/translations/en.json');
const fi = require('./src/translations/fi.json');
const keysEn = Object.keys(en).sort();
const keysFi = Object.keys(fi).sort();

console.log('Keys in en.json', _.difference(keysEn, keysFi));
console.log('Keys in fi.json', _.difference(keysFi, keysEn));
