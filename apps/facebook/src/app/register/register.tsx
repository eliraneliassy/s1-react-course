import { useFormik } from 'formik';
import styles from './register.module.css';
import * as Yup from 'yup';
import { useRef } from 'react';

/* eslint-disable-next-line */
export interface RegisterProps {}

interface RegisterForm {
  email: string;
  password: string;
}

export function Register(props: RegisterProps) {

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Must be a valid email'),
    password: Yup.string().min(2)
  })
  const formik = useFormik<RegisterForm>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: RegisterForm) => {
      console.log(values);
    },
    validationSchema
  });
  console.log(formik.values);


  const passwordRef= useRef<HTMLInputElement>(null);

  

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          placeholder="Email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.errors.email && formik.touched.email && <span>{formik.errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input type="password" placeholder="Password" ref={passwordRef}></input>
      </div>

      <button type="submit" disabled={!formik.isValid}>Login</button>
    </form>
  );
}

export default Register;
