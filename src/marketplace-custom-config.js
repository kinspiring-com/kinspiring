/*
 * Marketplace specific configuration.
 */

export const amenities = [];

export const categories = [
  { key: 'matkarattaat', label: 'Matkarattaat' },
  { key: 'yhdistelmarattaat', label: 'Yhdistelmärattaat' },
  { key: 'tupla-ja-sisarusrattaat', label: 'Tupla- ja sisarusrattaat' },
  { key: 'juoksurattaat', label: 'Juoksurattaat' },
  { key: 'kantovalineet-ja-rinkat', label: 'Kantovälineet ja rinkat' },
  { key: 'matkasangyt', label: 'Matkasängyt' },
  { key: 'turvaistuimet', label: 'Turvaistuimet' },
  { key: 'kuljetuslaukut-ja-vaunutarvikkeet', label: 'Kuljetuslaukut & vaunutarvikkeet' },
  { key: 'pyoraily', label: 'Pyöräily' },
  { key: 'muut-lastentarvikkeet', label: 'Muut lastentarvikkeet' },
];

export const FIELD_TYPE_TEXT = 'text';
export const FIELD_TYPE_TEXTAREA = 'textarea';
export const FIELD_TYPE_BOOLEAN = 'boolean';
export const FIELD_TYPE_SELECT_SINGLE = 'select-single';

const commonFields = [
  //{ name: 'brand',  },
  {
    name: 'modelYear',
    type: FIELD_TYPE_TEXT,
    label: 'Käyttöönottovuosi/vuosimalliarvio',
    placeholder: 'esim. 2018',
    required: true,
  },
  {
    name: 'weightAgeLimit',
    type: FIELD_TYPE_TEXT,
    label: 'Painorajat/suositusikä',
    placeholder: 'esim. 10-15kg',
    required: true,
  },
  {
    name: 'minRentingPeriod',
    type: FIELD_TYPE_TEXT,
    label: 'Minimivuokrausaika',
    placeholder: 'esim. 1 viikko',
    required: true,
  },
  {
    name: 'rentingTerms',
    type: FIELD_TYPE_TEXT,
    label: 'Vuokrausehdot (esim. omavastuun suuruus)',
    placeholder: 'esim. omavastuu 100€',
    required: true,
  },
  {
    name: 'containsBrandMaterial',
    type: FIELD_TYPE_BOOLEAN,
    label: 'Ilmoitus sisältää valmistajan kuva- tai videomateriaalia',
    required: true,
  },
];

export const categoryFields = [
  { key: 'matkarattaat', fields: [...commonFields] },
  { key: 'yhdistelmarattaat', fields: [...commonFields] },
  { key: 'tupla-ja-sisarusrattaat', fields: [...commonFields] },
  { key: 'juoksurattaat', fields: [...commonFields] },
  { key: 'kantovalineet-ja-rinkat', fields: [...commonFields] },
  { key: 'matkasangyt', fields: [...commonFields] },
  { key: 'turvaistuimet', fields: [...commonFields] },
  { key: 'kuljetuslaukut-ja-vaunutarvikkeet', fields: [...commonFields] },
  { key: 'pyoraily', fields: [...commonFields] },
  { key: 'muut-lastentarvikkeet', fields: [...commonFields] },
];
