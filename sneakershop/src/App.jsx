import { Header } from "./Components/header/header";
import { Main } from "./Components/main/main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Catalog } from "./pages/catalog/Catalog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { Cart } from "./pages/cart/Cart";
import { Footer } from "./Components/footer/footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "catalog",
    element: <Catalog />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);
export const App = () => {
  return (
    <>
      <div className="container-fluid">
        <RouterProvider router={router}>
          <Header />
          <Footer />
        </RouterProvider>
      </div>
    </>
  );
};
