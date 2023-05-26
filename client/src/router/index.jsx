import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/LandingPage";
import { Home } from "../pages/home/Home";
import DetailCountry from "../pages/detailCountry/DetailCountry";
import Layaout from "../layaout/Layaout";
import CreateActivity from "../pages/createActivity/CreateActivity";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  { path: "/welcome", element: <LandingPage /> },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Layaout />,
        children: [
          { index: true, element: <Home /> },
          { path: "/country/:id", element: <DetailCountry /> },
          { path: "/create-activity", element: <CreateActivity /> },
        ],
      },
    ],
  },
]);
