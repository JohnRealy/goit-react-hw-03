import { Form, Formik, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm({ users, setUsers, maxId }) {
  const usernameId = useId();
  const numId = useId();

  const handleSubmit = (values, actions) => {
    if (!values.username) {
      return console.log("Error");
    }
    setUsers([
      ...users,
      {
        id: "id-" + maxId,
        name: values.username,
        number: values.number,
      },
    ]);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          username: "",
          number: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor={usernameId}>Name</label>
          <Field
            type="text"
            name="username"
            id={usernameId}
            className={css.name}
          />
          <label htmlFor={numId}>Number</label>
          <Field type="number" name="number" id={numId} />
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
