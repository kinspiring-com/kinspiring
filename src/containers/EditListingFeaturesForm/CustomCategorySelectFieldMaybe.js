import React from 'react';
import { required } from '../../util/validators';
import { SelectField } from '../../components';

const CustomCategorySelectFieldMaybe = props => {
  const { className, name, id, categories, intl } = props;
  const categoryLabel = intl.formatMessage({
    id: 'EditListingFeaturesForm.kinspiring.categoryLabel',
  });
  const categoryPlaceholder = intl.formatMessage({
    id: 'EditListingFeaturesForm.kinspiring.categoryPlaceholder',
  });
  const categoryRequired = required(
    intl.formatMessage({
      id: 'EditListingFeaturesForm.kinspiring.categoryRequired',
    })
  );
  return categories ? (
    <SelectField
      className={className}
      name={name}
      id={id}
      label={categoryLabel}
      validate={categoryRequired}
    >
      <option value="">{categoryPlaceholder}</option>
      {categories.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </SelectField>
  ) : null;
};

export default CustomCategorySelectFieldMaybe;
