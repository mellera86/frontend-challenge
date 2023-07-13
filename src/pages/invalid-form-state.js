import { useNavigate } from "react-router-dom"
import { ROUTES } from '../providers/RouterProvider';
import { Card, CardBody, Button, PageTitle } from '../components';
import { BasePage } from './base';

const InvalidFormStatePage = () => {
  const navigate = useNavigate();

  return <BasePage>
    <Card>
      <CardBody>
        <PageTitle>Oops, we need more info about you. <br /> Please sign up again</PageTitle>
        <Button onClick={() => navigate(ROUTES.SIGN_UP)}>Sign Up</Button>
      </CardBody>
    </Card>
  </BasePage>
}

export { InvalidFormStatePage }