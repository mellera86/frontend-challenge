import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUpPage, MoreInfoPage, ConfirmationPage, ErrorPage, SuccessPage } from "../pages";

const ROUTES = {
  SIGN_UP: "/",
  MORE_INFO: "/more-info",
  CONFIRMATION: "/confirmation",
  ERROR: "/error",
  SUCCESS: "/success",
}

const router = createBrowserRouter([
  {
    path: ROUTES.SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: ROUTES.MORE_INFO,
    element: <MoreInfoPage />,
  },
  {
    path: ROUTES.CONFIRMATION,
    element: <ConfirmationPage />,
  },
  {
    path: ROUTES.ERROR,
    element: <ErrorPage />,
  },
  {
    path: ROUTES.SUCCESS,
    element: <SuccessPage />,
  },
]);

const AppRouterProvider = ({ children }) => {
  return (
    <RouterProvider router={router}>
      {children}
    </RouterProvider>
  );
}

export { AppRouterProvider, ROUTES };