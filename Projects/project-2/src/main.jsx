import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Appex from "./Components/Appex/Appex.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import MoreInfo from "./Components/MoreInfo/MoreInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Appex></Appex>,
      },

      {
        path: "/product/:productID",
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.productID}`),
        element: <MoreInfo></MoreInfo>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
