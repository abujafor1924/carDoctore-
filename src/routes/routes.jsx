import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import About from "../Components/pages/About";
import Login from "../Components/pages/Login";
import SingUp from "../Components/pages/SingUp";
import ChecOut from "../Components/pages/ChecOut";
import Bookings from "../Components/pages/Bookings";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/checkout/:id",
        element: (
          <ProtectedRoute>
            <ChecOut></ChecOut>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-project.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/bookings",
        element: (
          <ProtectedRoute>
            <Bookings></Bookings>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
