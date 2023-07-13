import { Card, CardBody, CardFooter, PageTitle, Button, Spinner } from '../components';
import { BasePage } from './base';
import { InvalidFormStatePage } from './invalid-form-state';
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from '../providers/RouterProvider';
import { useSignUpMutation } from '../api';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { loading, sendRequest: signUp } = useSignUpMutation();
  const { name, email, password, color, terms } = state || {};

  if (!name || !email || !password || !color) {
    return <InvalidFormStatePage />
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleSubmit = async (values) => {
    try {
      const req = {
        name,
        email,
        password,
        color,
        terms
      }

      await signUp(req);
      navigate(ROUTES.SUCCESS)
    } catch (e) {
      navigate(ROUTES.ERROR)
    }
  }

  const formattedPassword = password?.replace(/./g, '*')

  return <BasePage>
    <Card >
      {loading ? <Spinner /> :
        <>
          <CardBody>
            <PageTitle>Confirmation</PageTitle>
            <ul>
              <ListItem label="FIRST NAME">{name}</ListItem>
              <ListItem label="E-MAIL">{email}</ListItem>
              <ListItem label="PASSWORD">{formattedPassword}</ListItem>
              <ListItem label="FAVORITE COLOR">{color}</ListItem>
              <ListItem label="TERMS AND CONDITIONS">{terms ? 'AGREED' : 'NOT AGREED'}</ListItem>
            </ul>

          </CardBody>
          <CardFooter>
            <Button variant="neutral" onClick={handleBack} className="flex-grow">Back</Button>
            <Button onClick={handleSubmit} className="flex-grow">Submit</Button>
          </CardFooter>
        </>
      }

    </Card>
  </BasePage>
}

const ListItem = ({ label, children }) => {
  return <li className='flex items-center gap-2 my-1'>
    <strong>{label}:</strong> <span >{children}</span>
  </li>
}


export { ConfirmationPage }
