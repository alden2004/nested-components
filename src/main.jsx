import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import{createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404.jsx";
import ForgotpasswordPage from "./Pages/forgotpassword.jsx";
import ProductsPage from "./Pages/products";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="flex justify-center min-h-screen items-center flex-col text-8xl font-black">
      Heloo Gaess
      <h1 className="text-4xl font-medium mt-5"><b>Silahkan masuk ke halaman login</b></h1>
      </div>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotpasswordPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
