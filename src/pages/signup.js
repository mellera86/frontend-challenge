import { Card, CardBody, CardFooter, TextField, Button, PageTitle } from '../components';
import { BasePage } from './base';
import { Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../providers/RouterProvider';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate(ROUTES.MORE_INFO, { state: values })
  }

  return <BasePage>
    <Card>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validate={validateForm}
        onSubmit={handleSubmit}
        validateOnMount={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <CardBody>
              <PageTitle>Sign up</PageTitle>
              <TextField
                name="name"
                placeholder="FIRST NAME"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={errors.name}
                touched={touched.name} />
              <TextField
                name="email"
                placeholder="EMAIL"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email}
                touched={touched.email} />
              <TextField
                name="password"
                placeholder="PASSWORD"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password}
                touched={touched.password} />

            </CardBody>
            <CardFooter>
              <Button type="submit" disabled={!isValid} fullWidth>Next</Button>
            </CardFooter>
          </form>
        )}
      </Formik>

    </Card>
  </BasePage>
}

export { SignUpPage }

const validateForm = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'First Name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  }
  // else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  // ) {
  //   errors.email = 'Invalid email address';
  // }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
}
