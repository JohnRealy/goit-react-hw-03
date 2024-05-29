import { Formik, Form, Field } from "formik";
import { useId } from "react";

export default function SearchBox() {
  const searchId = useId()

  return <Formik initialValues={{}}>
    <Form>
      <label htmlFor={searchId}>Find contacts by name</label>
      <Field type="text" name="search"/>
    </Form>
  </Formik>;
}
