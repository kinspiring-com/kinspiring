/**
 * DEPRECATED: this component is part of Redux Form - we are migrating to react-final-form.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'classnames';
import { ValidationError } from '../../components';

import css from './SelectField.css';

const SelectFieldComponent = props => {
  const { rootClassName, className, id, label, input, meta, children, ...rest } = props;

  if (label && !id) {
    throw new Error('id required when a label is given');
  }

  const { valid, invalid, touched, error } = meta;

  // Error message and input error styles are only shown if the
  // field has been touched and the validation has failed.
  const hasError = touched && invalid && error;

  const selectClasses = classNames(css.select, {
    [css.selectSuccess]: valid,
    [css.selectError]: hasError,
  });
  const selectProps = { className: selectClasses, id, ...input, ...rest };

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select {...selectProps}>{children}</select>
      <ValidationError fieldMeta={meta} />
    </div>
  );
};

SelectFieldComponent.defaultProps = {
  rootClassName: null,
  className: null,
  id: null,
  label: null,
  children: null,
};

const { string, object, node } = PropTypes;

SelectFieldComponent.propTypes = {
  rootClassName: string,
  className: string,

  // Label is optional, but if it is given, an id is also required so
  // the label can reference the input in the `for` attribute
  id: string,
  label: string,

  // Generated by redux-form's Field component
  input: object.isRequired,
  meta: object.isRequired,

  children: node,
};

const SelectField = props => {
  return <Field component={SelectFieldComponent} {...props} />;
};

export default SelectField;
