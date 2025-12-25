import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "*",
        element: <h1>404 Not Found</h1>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
