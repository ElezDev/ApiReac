import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { ShoppinCartContext } from "../../Context";
import OrderCart from "../OrderCard/idex";
import { totalPrice } from "../../utils";
const CheckoutSideMenu = () => {
  const context = useContext(ShoppinCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProduct(filteredProducts);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } check-side-menu  flex-col fixed right-0 rounded-lg border border-black bg-white`}
     >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCart
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6">
          <p className='flex justify-between items-center'>
            <span className='font-light'>Total:</span>
            <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
          </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
