import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layaut";
import Sections from "../component/Sections";
import Products from "../component/products";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Sections />,
      },
      {
        path:"products",
        element:<Products/>
      }
    ],
  },
]);
