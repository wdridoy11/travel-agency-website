import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css"
import "./index.css";
import "./common.css";
import AuthProvider from "./providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
  </React.StrictMode>
);
