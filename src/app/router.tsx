import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import SignUpPage from "../features/auth/SignUpPage";
import DashboardPage from "../features/dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path:"/signup",
    element:<SignUpPage/>,
  },
  {path:"/dashboard",
    element:<DashboardPage/>

  },
  {
    path:"/",
    element:<LoginPage/>
  }
]);
