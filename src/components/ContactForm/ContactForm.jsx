import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormSubmitButton,
  Label,
  InputForm,
  InputField,
  ErrorMsg,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я0-9'-\s]+$/,
      'Name may contain only letters, Cyrillic letters, digits, apostrophe, dash, and spaces.'
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^[0-9\s+()-]+$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <InputForm>
        <Label>
          Name
          <InputField type="text" name="name" />
          <ErrorMessage name="name" component={ErrorMsg} />
        </Label>

        <Label>
          Tel
          <InputField type="tel" name="number" />
          <ErrorMessage name="number" component={ErrorMsg} />
        </Label>

        <FormSubmitButton type="submit">Add contact</FormSubmitButton>
      </InputForm>
    </Formik>
  );
};
