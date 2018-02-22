import React from 'react';
import { string, shape, bool, oneOf } from 'prop-types';
import { TextInputField } from '../../components';
import * as validators from '../../util/validators';
import config from '../../config';

const {
  FIELD_TYPE_TEXT,
  FIELD_TYPE_TEXTAREA,
  FIELD_TYPE_BOOLEAN,
  FIELD_TYPE_SELECT_SINGLE,
} = config.custom;

const CategoryFieldMaybe = props => {
  const { form, field } = props;
  const { name, type, label, placeholder, required } = field;

  const fieldRequiredMessage = 'Tämä kenttä on pakollinen';
  const validate = required ? validators.required(fieldRequiredMessage) : null;

  if (type === FIELD_TYPE_TEXT) {
    return (
      <TextInputField
        type="text"
        name={name}
        id={`${form}.${name}`}
        label={label}
        placeholder={placeholder}
        validate={validate}
      />
    );
  } else if (type === FIELD_TYPE_TEXTAREA) {
    return (
      <TextInputField
        type="textarea"
        name={name}
        id={`${form}.${name}`}
        label={label}
        placeholder={placeholder}
        validate={validate}
      />
    );
  } else if (type === FIELD_TYPE_BOOLEAN) {
    // TODO
  } else if (type === FIELD_TYPE_SELECT_SINGLE) {
    // TODO
  }

  return null;
};

CategoryFieldMaybe.propTypes = {
  form: string.isRequired,
  field: shape({
    name: string.isRequired,
    type: oneOf([
      FIELD_TYPE_TEXT,
      FIELD_TYPE_TEXTAREA,
      FIELD_TYPE_BOOLEAN,
      FIELD_TYPE_SELECT_SINGLE,
    ]).isRequired,
    label: string.isRequired,
    placeholder: string,
    required: bool.isRequired,
  }).isRequired,
};

const KinspiringCategoryFieldsMaybe = props => {
  const { form, category } = props;
  if (!category) {
    return null;
  }
  const categoryFields = config.custom.categoryFields.find(c => c.key === category);
  if (!categoryFields) {
    throw new Error(`Not extra fields defined for category: ${category}`);
  }
  return (
    <div>
      {categoryFields.fields.map(field => (
        <CategoryFieldMaybe key={field.name} form={form} field={field} />
      ))}
    </div>
  );
};

KinspiringCategoryFieldsMaybe.defaultProps = {
  category: null,
};

KinspiringCategoryFieldsMaybe.propTypes = {
  form: string.isRequired,
  category: string,
};

export default KinspiringCategoryFieldsMaybe;
