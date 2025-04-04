import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const initialValues = {
  username: "",
  phone: "",
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.phone,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId} />
        <ErrorMessage name="username" component="span" />
        <label htmlFor={phoneFieldId}>Phone</label>
        <Field type="text" name="phone" id={phoneFieldId} />
        <ErrorMessage name="phone" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
