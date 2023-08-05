import React, { useState } from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import {
  BaseInput,
  CalendarWrapper,
  FormikForm,
  Heading,
  InputWrapper,
  TwoColumnRow,
} from 'components/ModalEdit/ModalAddTransactionStyled';
import Switch from './Switch/Switch';
import CategorySelect from 'components/CategorySelect/CategorySelect';
import DatetimePicker from 'components/DatetimePicker/DatetimePicker';
import { CiCalendarDate } from 'react-icons/ci';
import Textarea from 'components/TextArea/TextArea';

const options = [
  { value: 'main expenses', label: 'Main expenses' },
  { value: 'products', label: 'Products' },
  { value: 'car', label: 'Car' },
  { value: 'self care', label: 'Self care' },
  { value: 'child care', label: 'Child care' },
  { value: 'household products', label: 'Household products' },
  { value: 'education', label: 'Education' },
  { value: 'leisure', label: 'Leisure' },
  { value: 'other expenses', label: 'Other expenses' },
  { value: 'entertainment', label: 'Entertainment' },
];

const ModalAddTransaction = () => {
  const [isChecked, setIsChecked] = useState(false);

  const formatDate = inputString => {
    const date = moment(inputString, 'DD MM YYYY HH:mm:ss GMTZZ');
    const formattedDate = date.format('DD.MM.YYYY');
    return formattedDate;
  };
  const handleCheckboxChange = () => {
    setIsChecked(isChecked => !isChecked);
  };
  return (
    <Formik
      initialValues={{
        date: `${formatDate(new Date())}`,
        type: isChecked,
      }}
    >
      <FormikForm>
        <Heading>Add transaction</Heading>
        <Switch
          name="type"
          checked={isChecked}
          onClick={handleCheckboxChange}
          type="radio"
        />

        {!isChecked && (
          <InputWrapper>
            <CategorySelect
              name="category"
              placeholder="Select a category"
              options={options}
            />
          </InputWrapper>
        )}

        <TwoColumnRow>
          <InputWrapper>
            <BaseInput
              placeholder="0.00"
              title="Please put the transaction value"
              name="value"
              type="number"
              autoComplete="off"
            />
          </InputWrapper>
          <CalendarWrapper>
            <DatetimePicker
              dateFormat="DD.MM.YYYY"
              name="date"
              type="date"
              timeFormat={false}
            />
            <CiCalendarDate />
          </CalendarWrapper>
        </TwoColumnRow>

        <InputWrapper>
          <Textarea
            placeholder="Comment"
            title="Please describe your transaction."
            name="comment"
            type="text"
            autoComplete="off"
          />
        </InputWrapper>
      </FormikForm>
    </Formik>
  );
};

export default ModalAddTransaction;
