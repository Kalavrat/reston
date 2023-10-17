import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/MainPage/MainPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import ServicesPage from "./pages/ServicesPage/ServicesPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import CartPage from "./pages/CartPage/CartPage";
import PersonPage from "./pages/PersonPage/PersonPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    // errorElement:
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/person",
    element: <PersonPage />,
  },
]);
root.render(<RouterProvider router={router} />);
