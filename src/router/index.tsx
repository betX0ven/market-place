import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/base";

import PageHome from "../pages/home";
import homeLoader from "../pages/home/loader";
import PageSignIn from "../pages/signin";
import PageBasket from "../pages/basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <PageHome />,
        loader: homeLoader,
      },
      {
        path: "signin",
        element: <PageSignIn />,
      },
      {
        path: "basket",
        element: <PageBasket />,
      },
      {
        path: "product/:id",
        element: <PageHome />,
      },
    ],
  },
]);

export default router;
