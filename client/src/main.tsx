import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import GreetingsPage from "./layout/GreetingsPage/GreetingsPage";
import NotFoundPage from "./layout/NotFoundPage/NotFoundPage";
import { StrictMode } from "react";
import Login from "./layout/Login/Login";
import Register from "./layout/Register/Register";
import Rules from "./layout/Rules/Rules";

// Настройка путей (роутов) приложения
const router = createBrowserRouter([
  {
    path: "/",
    element: <GreetingsPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/rules",
    element: <Rules />,
    //errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
