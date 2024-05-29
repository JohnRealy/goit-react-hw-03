import { Form, Formik, Field } from "formik";
import { useId } from "react";

export default function ContactForm() {
  const usernameId = useId();
  const numId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };


  return <Formik initialValues={{}} onSubmit={handleSubmit} >
    <Form>
      <label htmlFor={usernameId}>Name</label>
      <Field type="text" name="username" id={usernameId}/>
      <label htmlFor={numId}>Number</label>
      <Field type="number" name="number" id={numId}/>
    <button type="submit">Submit</button>
    </Form>
  </Formik>;
}
