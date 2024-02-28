import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import Myorder from "../MyOrder";
import Myorders from "../MyOrders";
import NotFound from "../NotFound";
import Signin from "../Signin";
import Navbar from "../../components/Navbar";
import { ShoppinCartProvider } from "../../Context";

import "./App.css";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/signin", element: <Signin /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <Myorder /> },
    { path: "/my-orders", element: <Myorders /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppinCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppinCartProvider>
  );
};

export default App;
