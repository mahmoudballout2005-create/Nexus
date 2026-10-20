import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import SignUpPage from "../features/auth/SignUpPage";
import SideBar from "../components/ui/layout/Sidebar"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path:"/signup",
    element:<SignUpPage/>,
  },
  {path:"/sidebar",
    element:<SideBar/>

  },
  {
    path:"/",
    element:<LoginPage/>
  }
]);
