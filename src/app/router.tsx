import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import SignUpPage from "../features/auth/SignUpPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path:"/signup",
    element:<SignUpPage/>,
  }
]);
