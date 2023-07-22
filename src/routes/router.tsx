import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import BookTable from "../pages/Reservation/BookTable";
import About from "../pages/ServicesPages/About_us/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booktable",
        element: <BookTable />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
