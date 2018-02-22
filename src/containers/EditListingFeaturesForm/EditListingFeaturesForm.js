import React from 'react';
import { bool, func, string, shape, arrayOf } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { reduxForm, propTypes as formPropTypes, formValueSelector } from 'redux-form';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';

import { propTypes } from '../../util/types';
import { Button, Form } from '../../components';
import CustomCategorySelectFieldMaybe from './CustomCategorySelectFieldMaybe';
import KinspiringCategoryFieldsMaybe from './KinspiringCategoryFieldsMaybe';

import css from './EditListingFeaturesForm.css';

const EditListingFeaturesFormComponent = props => {
  const {
    form,
    submitting,
    disabled,
    rootClassName,
    className,
    handleSubmit,
    saveActionMsg,
    updated,
    updateError,
    updateInProgress,
    categories,
    category,
    intl,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const submitReady = updated;
  const submitInProgress = submitting || updateInProgress;
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
        name="category"
        id={`${form}.category`}
        categories={categories}
        intl={intl}
      />

      <KinspiringCategoryFieldsMaybe form={form} category={category} intl={intl} />

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
};

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  updateError: null,
};

EditListingFeaturesFormComponent.propTypes = {
  ...formPropTypes,
  rootClassName: string,
  className: string,
  name: string.isRequired,
  handleSubmit: func.isRequired,
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

  // from mapStateToProps
  category: string,

  intl: intlShape.isRequired,
};

const formName = 'EditListingFeaturesForm';
const selector = formValueSelector(formName);
const mapStateToProps = state => ({
  category: selector(state, 'category'),
});

export default compose(connect(mapStateToProps), reduxForm({ form: formName }), injectIntl)(
  EditListingFeaturesFormComponent
);
