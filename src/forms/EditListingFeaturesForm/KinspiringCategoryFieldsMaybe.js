import React from 'react';
import { intlShape } from 'react-intl';
import { string, shape, bool, oneOf, arrayOf } from 'prop-types';
import { FieldTextInput, FieldSelect, FieldBoolean } from '../../components';
import * as validators from '../../util/validators';
import config from '../../config';

import css from './KinspiringCategoryFieldsMaybe.css';

const {
  FIELD_TYPE_TEXT,
  FIELD_TYPE_TEXTAREA,
  FIELD_TYPE_BOOLEAN,
  FIELD_TYPE_SELECT_SINGLE,
} = config.custom;

const CategoryFieldMaybe = props => {
  const { className, field, intl } = props;
  const { name, type, required, options = [] } = field;

  const label = intl.formatMessage({
    id: `KinspiringCategoryFieldsMaybe.${name}.label`,
  });
  const fieldRequiredMessage = intl.formatMessage({
    id: 'KinspiringCategoryFieldsMaybe.fieldRequired',
  });
  const validate = required ? validators.required(fieldRequiredMessage) : null;
  const validateBoolean = required ? validators.requiredBoolean(fieldRequiredMessage) : null;

  if (type === FIELD_TYPE_TEXT) {
    return (
      <FieldTextInput
        id={name}
        name={name}
        className={className}
        type="text"
        label={label}
        placeholder={intl.formatMessage({
          id: `KinspiringCategoryFieldsMaybe.${name}.placeholder`,
        })}
        validate={validate}
      />
    );
  } else if (type === FIELD_TYPE_TEXTAREA) {
    return (
      <FieldTextInput
        id={name}
        name={name}
        className={className}
        type="textarea"
        label={label}
        placeholder={intl.formatMessage({
          id: `KinspiringCategoryFieldsMaybe.${name}.placeholder`,
        })}
        validate={validate}
      />
    );
  } else if (type === FIELD_TYPE_BOOLEAN) {
    return (
      <FieldBoolean
        id={name}
        name={name}
        className={className}
        label={label}
        placeholder={intl.formatMessage({
          id: `KinspiringCategoryFieldsMaybe.${name}.placeholder`,
        })}
        validate={validateBoolean}
      />
    );
  } else if (type === FIELD_TYPE_SELECT_SINGLE) {
    return (
      <FieldSelect id={name} name={name} className={className} label={label} validate={validate}>
        <option value="">
          {intl.formatMessage({ id: `KinspiringCategoryFieldsMaybe.${name}.placeholder` })}
        </option>
        {options.map(option => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </FieldSelect>
    );
  } else {
    throw new Error(`Unknown field type: ${type}`);
  }
};

CategoryFieldMaybe.propTypes = {
  className: string.isRequired,
  field: shape({
    name: string.isRequired,
    type: oneOf([
      FIELD_TYPE_TEXT,
      FIELD_TYPE_TEXTAREA,
      FIELD_TYPE_BOOLEAN,
      FIELD_TYPE_SELECT_SINGLE,
    ]).isRequired,
    required: bool.isRequired,
    options: arrayOf(
      shape({
        key: string.isRequired,
        label: string.isRequired,
      })
    ),
  }).isRequired,
  intl: intlShape.isRequired,
};

const KinspiringCategoryFieldsMaybe = props => {
  const { category, intl } = props;
  if (!category) {
    return null;
  }
  const categoryFields = config.custom.categoryFields[category] || [];
  const fieldInfo = fieldName => {
    return config.custom.fields.find(f => f.name === fieldName);
  };

  return (
    <div className={css.root}>
      {categoryFields.map(fieldName => (
        <CategoryFieldMaybe
          key={fieldName}
          className={css.field}
          field={fieldInfo(fieldName)}
          intl={intl}
        />
      ))}
    </div>
  );
};

KinspiringCategoryFieldsMaybe.defaultProps = {
  category: null,
};

KinspiringCategoryFieldsMaybe.propTypes = {
  category: string,
  intl: intlShape.isRequired,
};

export default KinspiringCategoryFieldsMaybe;
