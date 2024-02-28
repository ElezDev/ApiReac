import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

import { ShoppinCartContext } from "../../Context";
const Card = (data) => {
  const ShowProduct = (productDetail) => {
    context.openProdcutDetail();
    context.setProductToShow(productDetail);
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProduct([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProdcutDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="w-4 h-4 text-green-500"></CheckIcon>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductToCart(event, data.data)}
        >
          <PlusIcon className="w-4 h-4 text-black" />
        </div>
      );
    }
  };
  const context = useContext(ShoppinCartContext);
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => ShowProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 text-black text-xs m-2 bg-white/60 rounded-lg px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        ></img>
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light"> {data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};
export default Card;
