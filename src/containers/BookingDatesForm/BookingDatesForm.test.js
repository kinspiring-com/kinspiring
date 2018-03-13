import React from 'react';
import { shallow } from 'enzyme';
import Decimal from 'decimal.js';
import { types as sdkTypes } from '../../util/sdkLoader';
import { renderShallow } from '../../util/test-helpers';
import { fakeIntl, fakeFormProps } from '../../util/test-data';
import { LINE_ITEM_NIGHT, TRANSITION_REQUEST } from '../../util/types';
import { BookingBreakdown } from '../../components';
import { BookingDatesFormComponent } from './BookingDatesForm';

const { Money } = sdkTypes;

const noop = () => null;

describe('BookingDatesForm', () => {
  it('matches snapshot without selected dates', () => {
    const tree = renderShallow(
      <BookingDatesFormComponent
        {...fakeFormProps}
        unitType={LINE_ITEM_NIGHT}
        intl={fakeIntl}
        dispatch={noop}
        onSubmit={v => v}
        price={new Money(1099, 'USD')}
        bookingDates={{}}
        startDatePlaceholder="today"
        endDatePlaceholder="tomorrow"
      />
    );
    expect(tree).toMatchSnapshot();
  });
  it('matches selected dates', () => {
    const price = new Money(1099, 'USD');
    const startDate = new Date(Date.UTC(2017, 3, 14));
    const endDate = new Date(Date.UTC(2017, 3, 16));
    const tree = shallow(
      <BookingDatesFormComponent
        {...fakeFormProps}
        unitType={LINE_ITEM_NIGHT}
        intl={fakeIntl}
        dispatch={noop}
        onSubmit={v => v}
        price={price}
        bookingDates={{ startDate, endDate }}
        startDatePlaceholder="today"
        endDatePlaceholder="tomorrow"
      />
    );
    const breakdown = tree.find(BookingBreakdown);
    const { userRole, transaction, booking } = breakdown.props();
    expect(userRole).toEqual('customer');
    expect(booking.attributes.start).toEqual(startDate);
    expect(booking.attributes.end).toEqual(endDate);
    expect(transaction.attributes.lastTransition).toEqual(TRANSITION_REQUEST);
    expect(transaction.attributes.payinTotal).toEqual(new Money(2242, 'USD'));
    expect(transaction.attributes.payoutTotal).toEqual(new Money(2242, 'USD'));
    expect(transaction.attributes.lineItems).toEqual([
      {
        code: 'line-item/night',
        includeFor: ['customer', 'provider'],
        unitPrice: price,
        quantity: new Decimal(2),
        lineTotal: new Money(2198, 'USD'),
        reversal: false,
      },
      {
        code: 'line-item/customer-commission',
        includeFor: ['customer'],
        unitPrice: new Money(2198, 'USD'),
        lineTotal: new Money(44, 'USD'),
        reversal: false,
      },
    ]);
  });
});
