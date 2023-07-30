import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import BookTable from "../pages/Reservation/BookTable";
import About from "../pages/ServicesPages/About_us/About";
import Faq from "../pages/ServicesPages/FAQ/Faq";
import ServiceSingle from "../pages/ServicesPages/Our Services/ServiceSingle/ServiceSingle";
import ServiceList from "../pages/ServicesPages/Our Services/ServiceList/ServiceList";
import ServiceGrid from "../pages/ServicesPages/Our Services/ServiceGrid/ServiceGrid";
import Contact from "../pages/ContactPage/Contact";
import CheckOutPage from "../pages/ServicesPages/Shop/ChackOut/CheckOutPage";
import Cart from "../pages/ServicesPages/Shop/ShoppingCart/Cart";
import Signup from "../pages/Auth/Signup/Signup";
import Login from "../pages/Auth/Login/Login";

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
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/singleservice",
        element: <ServiceSingle />,
      },
      {
        path: "/servicelist",
        element: <ServiceList />,
      },
      {
        path: "/servicegrid",
        element: <ServiceGrid />,
      },
      {
        path: "cartpage",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
