import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, json, RouterProvider } from "react-router-dom";

import "styles/normalize.css";
import "styles/reset.css";
import "styles/index.css";
import App from "./App";
import { ErrorPage, FourZeroFourPage, HomePage } from "pages";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        // *only catch 404 for outlet of App
        // *navBar outside of outlet ErrorPage will handle error
        errorElement: <FourZeroFourPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "men",
            element: <div>men</div>,
            // *manually throw error
            loader: () => {
              throw json({ sorry: "you're fired" }, { status: 404 });
              // throw new Response("Not found", { status: 404 });
            },
          },
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
