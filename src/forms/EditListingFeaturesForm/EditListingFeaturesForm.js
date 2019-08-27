import React from 'react';
import { bool, func, string, shape, arrayOf } from 'prop-types';
import classNames from 'classnames';
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
        updateInProgress,
        intl,
        categories,
        values,
        fetchErrors,
      } = fieldRenderProps;

      const { category } = values || {};
      const classes = classNames(rootClassName || css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

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
  fetchErrors: null,
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,

  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),

  intl: intlShape.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

const EditListingFeaturesForm = injectIntl(EditListingFeaturesFormComponent);

export default EditListingFeaturesForm;
