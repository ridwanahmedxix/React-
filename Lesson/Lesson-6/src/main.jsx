import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> Hello Ridwan </div>,
  },

  {
    path: "/about",
    element: (
      <div>
        {" "}
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto odio
          iste aut officia minima reprehenderit, enim commodi ducimus molestias
          explicabo totam temporibus quas recusandae? Odit, praesentium autem ea
          odio quaerat, dolor rerum amet reiciendis quibusdam illum
          exercitationem molestias incidunt accusamus quasi quis nesciunt
          tenetur laborum officia tempore debitis natus! Pariatur illum quaerat
          dicta a voluptate, est reprehenderit neque voluptas aspernatur aliquam
          iusto quidem explicabo consequatur mollitia vitae possimus sed
          nesciunt omnis ipsam quos fugit nam quo. Laudantium veniam ea
          sint!{" "}
        </p>{" "}
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
