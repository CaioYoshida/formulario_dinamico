import React from 'react';
import {View, Button} from 'react-native';
import {Formik, useFormik} from 'formik';
import {getItemComponent, getInitialValues} from '../../utils/UtilsFormik';

const Form = (props) => {
  const {fields} = props;

  const onSubmit = (values) => {
    console.log('VALUES: ', values);
  };

  const formikbag = useFormik({
    initialValues: getInitialValues(fields),
    onSubmit,
  });

  const {handleSubmit, handleChange, handleBlur, values} = formikbag;

  const renderFields = ({handleChange, handleBlur, values}) =>
    fields.map((field) => {
      const Field = getItemComponent(field);

      return (
        <View key={field}>
          <Field
            handlechange={handleChange(field)}
            handleBlur={handleBlur(field)}
            value={values[field]}
          />
        </View>
      );
    });

  return (
    <Formik initialValues={() => getInitialValues(fields)} onSubmit={onSubmit}>
      <View>
        {renderFields({handleChange, handleBlur, values})}
        <Button title="Save" onPress={handleSubmit} />
      </View>
    </Formik>
  );
};

export default Form;
