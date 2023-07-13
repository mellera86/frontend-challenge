import { useNavigate } from "react-router-dom"
import { ROUTES } from '../providers/RouterProvider';
import { Card, CardBody, Button, PageTitle } from '../components';
import { BasePage } from './base';

const ErrorPage = () => {
  const navigate = useNavigate();

  return <BasePage>
    <Card>
      <CardBody>
        <PageTitle>ERROR</PageTitle>
        <span>Uh oh, something went wrong. Please try again later.</span>
        <div className="mt-5">
          <Button variant="info" onClick={() => navigate(ROUTES.SIGN_UP)}>Restart</Button>
        </div>
      </CardBody>
    </Card>
  </BasePage>
}

export { ErrorPage }