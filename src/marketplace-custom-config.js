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

const brands = [{ key: 'example-brand', label: 'Example Brand' }];

export const FIELD_TYPE_TEXT = 'text';
export const FIELD_TYPE_TEXTAREA = 'textarea';
export const FIELD_TYPE_BOOLEAN = 'boolean';
export const FIELD_TYPE_SELECT_SINGLE = 'select-single';

const FIELD_BRAND = 'brand';
const FIELD_MODEL_YEAR = 'modelYear';
const FIELD_WEIGHT_AGE_LIMIT = 'weightAgeLimit';
const FIELD_MIN_RENTING_PERIOD = 'minRentingPeriod';
const FIELD_RENTING_TERMS = 'rentingTerms';
const FIELD_CONTAINS_BRAND_MATERIAL = 'containsBrandMaterial';

const FIELD_SEAT_DIRECTION_CHANGEABLE = 'seatDirectionChangeable';
const FIELD_BACKREST_LEAN_ADJUSTMENT = 'backrestLeanAdjustment';
const FIELD_ACCESSORIES = 'accessories';
const FIELD_CRASH_FREE = 'crashFree';

export const fields = [
  {
    name: FIELD_BRAND,
    type: FIELD_TYPE_SELECT_SINGLE,
    options: brands,
    required: true,
  },
  {
    name: FIELD_MODEL_YEAR,
    type: FIELD_TYPE_TEXT,
    required: true,
  },
  {
    name: FIELD_WEIGHT_AGE_LIMIT,
    type: FIELD_TYPE_TEXT,
    required: true,
  },
  {
    name: FIELD_MIN_RENTING_PERIOD,
    type: FIELD_TYPE_TEXT,
    required: true,
  },
  {
    name: FIELD_RENTING_TERMS,
    type: FIELD_TYPE_TEXT,
    required: true,
  },
  {
    name: FIELD_CONTAINS_BRAND_MATERIAL,
    type: FIELD_TYPE_BOOLEAN,
    required: true,
  },

  {
    name: FIELD_SEAT_DIRECTION_CHANGEABLE,
    type: FIELD_TYPE_BOOLEAN,
    required: true,
  },
  {
    name: FIELD_BACKREST_LEAN_ADJUSTMENT,
    type: FIELD_TYPE_BOOLEAN,
    required: true,
  },
  {
    name: FIELD_ACCESSORIES,
    type: FIELD_TYPE_TEXT,
    required: false,
  },
  {
    name: FIELD_CRASH_FREE,
    type: FIELD_TYPE_BOOLEAN, // text in turnkey, can this be bool?
    required: true,
  },
];

const commonFields = [
  FIELD_BRAND,
  FIELD_MODEL_YEAR,
  FIELD_WEIGHT_AGE_LIMIT,
  FIELD_MIN_RENTING_PERIOD,
  FIELD_RENTING_TERMS,
  FIELD_CONTAINS_BRAND_MATERIAL,
];

const strollerFields = [
  FIELD_SEAT_DIRECTION_CHANGEABLE,
  FIELD_BACKREST_LEAN_ADJUSTMENT,
  FIELD_ACCESSORIES,
];

export const categoryFields = [
  { key: 'matkarattaat', fields: [...commonFields, ...strollerFields] },
  { key: 'yhdistelmarattaat', fields: [...commonFields, ...strollerFields] },
  { key: 'tupla-ja-sisarusrattaat', fields: [...commonFields, ...strollerFields] },
  { key: 'juoksurattaat', fields: [...commonFields, ...strollerFields] },
  { key: 'kantovalineet-ja-rinkat', fields: [...commonFields] },
  { key: 'matkasangyt', fields: [...commonFields] },
  { key: 'turvaistuimet', fields: [...commonFields, FIELD_CRASH_FREE, FIELD_ACCESSORIES] },
  { key: 'kuljetuslaukut-ja-vaunutarvikkeet', fields: [...commonFields, FIELD_ACCESSORIES] },
  { key: 'pyoraily', fields: [...commonFields, FIELD_ACCESSORIES] },
  { key: 'muut-lastentarvikkeet', fields: [...commonFields, FIELD_ACCESSORIES] },
];
