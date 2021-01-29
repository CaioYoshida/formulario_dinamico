import React from 'react';

import FormikInput from '../components/FormikInput';

const EmailField = ({handlechange, handleBlur, value}) => (
  <FormikInput
    placeholder="Type your email"
    handlechange={handlechange}
    handleBlur={handleBlur}
    value={value}
  />
);

const TaxIDField = ({handlechange, handleBlur, value}) => (
  <FormikInput
    placeholder="Type your taxID"
    handlechange={handlechange}
    handleBlur={handleBlur}
    value={value}
  />
);

const PhoneField = ({handlechange, handleBlur, value}) => (
  <FormikInput
    placeholder="Type your phone"
    handlechange={handlechange}
    handleBlur={handleBlur}
    value={value}
  />
);

const AddressField = ({handlechange, handleBlur, value}) => (
  <FormikInput
    placeholder="Type your addres"
    handlechange={handlechange}
    handleBlur={handleBlur}
    value={value}
  />
);

export const LOGIN_FIELDS = {
  EMAIL: 'EMAIL',
  TAXID: 'TAXID',
  PHONE: 'PHONE',
  ADDRESS: 'ADDRESS',
};

export const getItemComponent = (field) => {
  const LOGIN_FIELDS_FIELD = {
    [LOGIN_FIELDS.EMAIL]: EmailField,
    [LOGIN_FIELDS.TAXID]: TaxIDField,
    [LOGIN_FIELDS.PHONE]: PhoneField,
    [LOGIN_FIELDS.ADDRESS]: AddressField,
  };
  return LOGIN_FIELDS_FIELD[field];
};

export const getInitialValue = (field) => {
  const LOGIN_FIELDS_INITIAL_VALUES = {
    [LOGIN_FIELDS.EMAIL]: {EMAIL: 'caio'},
    [LOGIN_FIELDS.TAXID]: {TAXID: ''},
    [LOGIN_FIELDS.PHONE]: {PHONE: ''},
    [LOGIN_FIELDS.ADDRESS]: {ADDRESS: ''},
  };

  return LOGIN_FIELDS_INITIAL_VALUES[field];
};

export const getInitialValues = (fields) => {
  const initialValues = fields.reduce(
    (acc, field) => ({
      ...acc,
      ...getInitialValue(field),
    }),
    {},
  );

  return initialValues;
};
