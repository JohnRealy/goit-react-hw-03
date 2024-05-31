import { Formik,  Field } from "formik";
import { useId } from "react";
import css from './SearchBox.module.css';

export default function SearchBox({setSearchQuery}) {
  const searchId = useId()

  const search = (e)=>{
    setSearchQuery(e.target.value)
    console.log('THIS IS:', e.target.value);
  }

  return <Formik initialValues={{}}>
    <div className={css.form}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <Field type="text" name="search" className={css.input} onChange={search}/>
      </div>
  </Formik>;
}
