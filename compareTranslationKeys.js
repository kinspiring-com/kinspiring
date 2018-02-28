const _ = require('lodash');
const en = require('./src/translations/en.json');
const fi = require('./src/translations/fi.json');
const keysEn = Object.keys(en).sort();
const keysFi = Object.keys(fi).sort();

const containsMarketplaceName = s => {
  return s && s.toLowerCase().includes('kinspiring');
};

const missingKeys = _.difference(keysEn, keysFi);

// Filter out keys that have a custom key.
const extraKeys = _.difference(keysFi, keysEn).filter(s => !containsMarketplaceName(s));

console.log('Keys missing from fi.json:', missingKeys);
console.log('Extra keys in fi.json:', extraKeys);
