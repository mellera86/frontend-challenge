import { useNavigate } from "react-router-dom"
import { ROUTES } from '../providers/RouterProvider';
import { Card, CardBody, Button, PageTitle, CardFooter } from '../components';
import { BasePage } from './base';

const SuccessPage = () => {
  const navigate = useNavigate();

  return <BasePage>
    <Card>
      <CardBody>
        <PageTitle>SUCCESS!</PageTitle>
        <span>You should receive a confirmation email soon</span>
        <div className="mt-5">
          <Button variant="info" onClick={() => navigate(ROUTES.SIGN_UP)}>Restart</Button>
        </div>
      </CardBody>
    </Card>
  </BasePage>
}

export { SuccessPage }