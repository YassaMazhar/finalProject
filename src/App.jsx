import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import Brands from "./Pages/Brands/Brands";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Orders from "./Pages/Orders/Orders";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Pages/Notfound/Notfound";
import { Toaster } from "react-hot-toast";
import TokenProvider from "./Components/Context/TokenProvider";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./Components/Context/CartProvider";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Wishlist from "./Pages/Wishlist/Wishlist";
import WishlistProvider from "./Components/Context/WishlistContext";
import  ProductsProvider  from "./Components/Context/Product.context";
import CategoriesProvider from "./Components/Context/Categories.Context";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "allorders", element: <Home /> },
        { path: "/product/:id", element: <ProductDetails /> },
        { path: "/categories", element: <Categories /> },
        { path: "/brands", element: <Brands /> },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              {" "}
              <Cart />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <ProtectedRoute>
              {" "}
              <Wishlist />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/checkout",
          element: (
            <ProtectedRoute>
              {" "}
              <Checkout />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/orders",
          element: (
            <ProtectedRoute>
              {" "}
              <Orders />{" "}
            </ProtectedRoute>
          ),
        },
        { path: "/signup", element: <SignUp /> },
        { path: "/login", element: <Login /> },
        { path: "/verify-email", element: <VerifyEmail /> },
        { path: "/forget-password", element: <ForgetPassword /> },
        { path: "/reset-password", element: <ResetPassword /> },
      ],
    },
    { path: "*", element: <Notfound /> },
  ]);

  return (
    <>
      <ProductsProvider>
        <CategoriesProvider>
          <TokenProvider>
            <CartProvider>
              <WishlistProvider>
                <RouterProvider router={router} />
                <Toaster />
              </WishlistProvider>
            </CartProvider>
          </TokenProvider>
        </CategoriesProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
