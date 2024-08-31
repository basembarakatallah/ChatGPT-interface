import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";
import { Home } from "@/pages/Home";
import { Chat } from "../pages/Chat/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
