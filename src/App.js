import React from "react";
import "./App.css";
import Main from "./Components/Main";
import { createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import FilteredProducts from "./Components/filteredProducts";
import Error from "./Components/error";
import SingleProduct from "./Components/singleProduct";
import Cart from "./Components/cart";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />, // keep it in parent
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/filteredProducts/:type",
        element: <FilteredProducts />,
      },
      {
        path: "/filteredProducts/:type/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  // {
  //   path:"/",
  //   element: <Body/>
  // }
]);

export default App;
