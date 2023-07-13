import { Card, CardBody, Select, Option, Button, Checkbox, PageTitle, CardFooter, Spinner } from '../components';
import { BasePage } from './base';
import { InvalidFormStatePage } from './invalid-form-state';
import { Formik } from 'formik';
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from '../providers/RouterProvider';
import { useEffect } from 'react';
import { useColorsQuery } from '../api';

const MoreInfoPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, email, password } = state || {};
  const { data: colors, error, loading, sendRequest: fetchColors } = useColorsQuery();

  useEffect(() => {
    fetchColors();
  }, [])

  if (!name || !email || !password || error) {
    return <InvalidFormStatePage />
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleSubmit = (values) => {
    navigate(ROUTES.CONFIRMATION, { state: { ...state, ...values } })
  }

  return <BasePage>
    <Card>
      <Formik
        initialValues={{ color: '', terms: false }}
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
            {loading ? <Spinner /> :
              <>
                <CardBody>
                  <PageTitle>Additional Info</PageTitle>
                  {
                    colors?.length > 0 &&
                    <Select
                      name="color"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.color}
                      error={errors.color}
                      touched={touched.color}>
                      <Option label="Select a color" hidden />
                      {colors.map(color => <Option key={color} label={color} value={color} />)}
                    </Select>
                  }
                  <Checkbox
                    name="terms"
                    label="Agree to terms and conditions"
                    value={values.terms}
                    onChange={handleChange}
                    touched={touched.terms}
                    error={errors.terms} />
                  <div className='flex gap-3'>

                  </div>
                </CardBody>
                <CardFooter>
                  <Button variant="neutral" onClick={handleBack} className="flex-grow">Back</Button>
                  <Button type="submit" disabled={!isValid} className="flex-grow">Next</Button>
                </CardFooter>
              </>
            }
          </form>
        )}
      </Formik>
    </Card>
  </BasePage>
}

export { MoreInfoPage }

const validateForm = (values) => {
  const errors = {};
  if (!values.color) {
    errors.color = 'You must select a color';
  }
  if (!values.terms) {
    errors.terms = 'You must agree to the terms';
  }
  return errors;
}
