/*
 * Marketplace specific configuration.
 */

export const amenities = [];

export const categories = [
  { key: 'matkarattaat', label: 'Matkarattaat' },
  { key: 'yhdistelmarattaat', label: 'Yhdistelmärattaat' },
  { key: 'tuplaJaSisarusrattaat', label: 'Tupla- ja sisarusrattaat' },
  { key: 'juoksurattaat', label: 'Juoksurattaat' },
  { key: 'kantovalineetJaRinkat', label: 'Kantovälineet ja rinkat' },
  { key: 'matkasangyt', label: 'Matkasängyt' },
  { key: 'turvaistuimet', label: 'Turvaistuimet' },
  { key: 'kuljetuslaukutJaVaunutarvikkeet', label: 'Kuljetuslaukut & vaunutarvikkeet' },
  { key: 'pyoraily', label: 'Pyöräily' },
  { key: 'muutLastentarvikkeet', label: 'Muut lastentarvikkeet' },
];

const brands = [
  { key: 'babyzen', label: 'Babyzen' }, // turnkey id: 101288
  { key: 'bugaboo', label: 'Bugaboo' }, // turnkey id: 101290
  { key: 'babybjorn', label: 'BabyBjörn' }, // turnkey id: 101289
  { key: 'britax', label: 'Britax' }, // turnkey id: 101719
  { key: 'babyJogger', label: 'Baby Jogger' }, // turnkey id: 101302
  { key: 'cybex', label: 'Cybex' }, // turnkey id: 101291
  { key: 'deuter', label: 'Deuter' }, // turnkey id: 103928
  { key: 'emmaljunga', label: 'Emmaljunga' }, // turnkey id: 101292
  { key: 'gesslain', label: 'Gesslain' }, // turnkey id: 101718
  { key: 'manduca', label: 'Manduca' }, // turnkey id: 101293
  { key: 'mountainBuggy', label: 'Mountain Buggy' }, // turnkey id: 101294
  { key: 'maxiCosi', label: 'Maxi-Cosi' }, // turnkey id: 101298
  { key: 'maclaren', label: 'Maclaren' }, // turnkey id: 101717
  { key: 'philAndTeds', label: 'Phil & Teds' }, // turnkey id: 101295
  { key: 'recaro', label: 'Recaro' }, // turnkey id: 101716
  { key: 'stokke', label: 'Stokke' }, // turnkey id: 101296
  { key: 'samsonite', label: 'Samsonite' }, // turnkey id: 101299
  { key: 'kidco', label: 'Kidco' }, // turnkey id: 101549
  { key: 'quinny', label: 'Quinny' }, // turnkey id: 101805
  { key: 'ergobaby', label: 'Ergobaby' }, // turnkey id: 103929
  { key: 'ora', label: 'Ora' }, // turnkey id: 138550
  { key: 'tula', label: 'Tula' }, // turnkey id: 193754
  { key: 'other', label: 'Muu' }, // turnkey id: 101303
];

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

// Configuration for all the publicData fields. This is used to show a
// correct input for the listing creation/edit and to render the value
// in the listing page. The order affect how the values are rendered
// in the listing page.
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

// Configuration for publicData fields in listing
// creation/edit. Defines which fields should be shown for each
// category and in which order (in the listing creation/edit).
export const categoryFields = {
  matkarattaat: [...commonFields, ...strollerFields],
  yhdistelmarattaat: [...commonFields, ...strollerFields],
  tuplaJaSisarusrattaat: [...commonFields, ...strollerFields],
  juoksurattaat: [...commonFields, ...strollerFields],
  kantovalineetJaRinkat: [...commonFields],
  matkasangyt: [...commonFields],
  turvaistuimet: [...commonFields, FIELD_CRASH_FREE, FIELD_ACCESSORIES],
  kuljetuslaukutJaVaunutarvikkeet: [...commonFields, FIELD_ACCESSORIES],
  pyoraily: [...commonFields, FIELD_ACCESSORIES],
  muutLastentarvikkeet: [...commonFields, FIELD_ACCESSORIES],
};
