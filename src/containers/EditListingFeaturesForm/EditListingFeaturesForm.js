import React from 'react';
import { bool, func, string, shape, arrayOf } from 'prop-types';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import classNames from 'classnames';

import { propTypes } from '../../util/types';
import { Button, Form } from '../../components';

import CustomCategorySelectFieldMaybe from './CustomCategorySelectFieldMaybe';
import KinspiringCategoryFieldsMaybe from './KinspiringCategoryFieldsMaybe';

import css from './EditListingFeaturesForm.css';

const EditListingFeaturesFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={fieldRenderProps => {
      const {
        disabled,
        rootClassName,
        className,
        handleSubmit,
        pristine,
        saveActionMsg,
        updated,
        updateError,
        updateInProgress,
        intl,
        categories,
        values,
      } = fieldRenderProps;

      const { category } = values || {};
      const classes = classNames(rootClassName || css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const errorMessage = updateError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}

          <CustomCategorySelectFieldMaybe
            id="category"
            name="category"
            className={css.category}
            categories={categories}
            intl={intl}
          />

          <KinspiringCategoryFieldsMaybe category={category} intl={intl} />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  updateError: null,
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,

  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),

  intl: intlShape.isRequired,
};

const EditListingFeaturesForm = injectIntl(EditListingFeaturesFormComponent);

export default EditListingFeaturesForm;
