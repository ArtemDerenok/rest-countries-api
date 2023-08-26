import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App";
import CountryPage from "./components/Page/CountryPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import AllCountryPage from "./components/Page/AllCountryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "country/:id",
        element: <CountryPage />,
      },
      {
        path: "/",
        element: <AllCountryPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
