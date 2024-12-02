import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layaut";
import Sections from "../component/Sections";
import Products from "../component/products";
import ProductPage from "../component/Karzinka";
import Saralangan from "../Saralangan";
import Notfound from "../Notfound";

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
        path: "products",
        element: <Products />,
      },
      {
        path: "productpage",
        element: <ProductPage />,
      },
      {
        path: "saralangan",
        element:<Saralangan/>
      }
      
    ],
  },
  {
    path:'*',
    element:<Notfound/>
  }
]);
