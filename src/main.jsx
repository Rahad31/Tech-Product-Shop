import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import Addpro from "./components/AddPro/Addpro";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./components/Provider/Provider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Mycart from "./components/Mycart/Mycart";
import Error from "./components/Error/Error";
import BrandDetail from "./components/brandDetail/brandDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <Addpro></Addpro>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <Mycart></Mycart>
          </PrivateRoute>
        ),
      },
      {
        path: "/brandDetails",
        loader: () => fetch("http://localhost:5000/product"),
        element: (
          <PrivateRoute>
            <BrandDetail></BrandDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/*",
        element: <Error></Error>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
