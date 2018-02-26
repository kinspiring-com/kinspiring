import React from 'react';
import { FormattedMessage } from 'react-intl';
import config from '../../config';

import css from './KinspiringPublicData.css';

const { FIELD_TYPE_BOOLEAN, FIELD_TYPE_SELECT_SINGLE } = config.custom;

const FieldItemMaybe = props => {
  const { field, publicData } = props;
  let rawValue = publicData[field.name];
  if (typeof rawValue !== 'boolean' && !rawValue) {
    // Ignore empty values (undefined, null, '')
    return null;
  }
  let value = rawValue;
  if (field.type === FIELD_TYPE_BOOLEAN) {
    value = rawValue ? (
      <FormattedMessage id="KinspiringPublicData.booleanLabelYes" />
    ) : (
      <FormattedMessage id="KinspiringPublicData.booleanLabelNo" />
    );
  } else if (field.type === FIELD_TYPE_SELECT_SINGLE) {
    const selectedOption = field.options ? field.options.find(o => o.key === rawValue) : null;
    value = selectedOption ? selectedOption.label : rawValue;
  }
  return (
    <li className={css.field}>
      <span className={css.label}>
        <FormattedMessage id={`KinspiringPublicData.${field.name}.label`} />
      </span>
      <span>{value}</span>
    </li>
  );
};

const KinspiringPublicData = props => {
  const { publicData = {} } = props;
  return (
    <div className={css.root}>
      <h2 className={css.heading}>
        <FormattedMessage id="KinspiringPublicData.heading" />
      </h2>
      <ul className={css.fields}>
        {config.custom.fields.map(field => (
          <FieldItemMaybe key={field.name} field={field} publicData={publicData} />
        ))}
      </ul>
    </div>
  );
};

export default KinspiringPublicData;
