import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "styles/normalize.css";
import "styles/reset.css";
import "styles/index.css";
import App from "./App";
import { ErrorPage, FourZeroFourPage, HomePage, NoMatchPage } from "pages";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <FourZeroFourPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "products",
            element: <div>products page</div>,
          },
          { path: "*", element: <NoMatchPage /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
