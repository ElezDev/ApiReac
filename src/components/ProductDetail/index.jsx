import { useContext } from "react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { ShoppinCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppinCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } produc-detail flex-col fixed right-0 rounded-lg border border-black bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon className="h-6 w-6 text-black" onClick={()=>context.closeProdcutDetail()}></XMarkIcon>
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.ProductToShow.images}
          alt={context.ProductToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-xl">
          ${context.ProductToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.ProductToShow.title}
        </span>
        <span className="font-light text-sm">
          {context.ProductToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
