import { createContext, useState } from "react";

export const ShoppinCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppinCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProdcutDetail = () => setIsProductDetailOpen(true);
  const closeProdcutDetail = () => setIsProductDetailOpen(false);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //detalle de los productos
  const [ProductToShow, setProductToShow] = useState({});
  //estado para el carro de compras
  const [cartProducts, setCartProduct] = useState([]);

  return (
    <ShoppinCartContext.Provider
      value={{
        count,
        setCount,
        openProdcutDetail,
        closeProdcutDetail,
        isProductDetailOpen,
        ProductToShow,
        setProductToShow,
        cartProducts,
        setCartProduct,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        
      }}
    >
      {children}
    </ShoppinCartContext.Provider>
  );
};
