import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from './SearchBox.module.css';

export default function SearchBox() {
  const searchId = useId()

  return <Formik initialValues={{}}>
    <Form className={css.form}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <Field type="text" name="search" className={css.input}/>
    </Form>
  </Formik>;
}
