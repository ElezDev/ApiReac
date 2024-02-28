import { ShoppingBagIcon } from "@heroicons/react/24/solid";

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppinCartContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppinCartContext);

  const activeStyle = "underline underline-offset-4";

  const isNavLinkActive = (match, location) => {
    return match || location.pathname === "/";
  };

  return (
    <nav className="fixed top-0 w-full py-5 px-8 text-sm font-light bg-white z-10 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="font-semibold text-lg">
          Shopi
        </NavLink>

        {/* Categorías */}
        <ul className="flex gap-3">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName={activeStyle}
            isActive={isNavLinkActive}
          >
            All
          </NavLink>
          <NavLink
            to="/clothes"
            className="nav-link"
            activeClassName={activeStyle}
          >
            Clothes
          </NavLink>
          <NavLink
            to="/electronics"
            className="nav-link"
            activeClassName={activeStyle}
          >
            Electronics
          </NavLink>
          <NavLink
            to="/furnitures"
            className="nav-link"
            activeClassName={activeStyle}
          >
            Furnitures
          </NavLink>
          <NavLink
            to="/toys"
            className="nav-link"
            activeClassName={activeStyle}
          >
            Toys
          </NavLink>
          <NavLink
            to="/order"
            className="nav-link"
            activeClassName={activeStyle}
          >
            Orders
          </NavLink>
        </ul>

        {/* Usuario y enlaces de cuenta */}
        <ul className="flex gap-3 items-center">
          <li className="text-black/60">Elezdev</li>
          <NavLink
            to="/my-orders"
            className="nav-link"
            activeClassName={activeStyle}
          >
            my-orders
          </NavLink>
          <NavLink
            to="/my-account"
            className="nav-link"
            activeClassName={activeStyle}
          >
            my-account
          </NavLink>
          <NavLink
            to="/signin"
            className="nav-link"
            activeClassName={activeStyle}
          >
            signin
          </NavLink>
          <li className='flex items-center'>
            <ShoppingBagIcon className="w-6 h-6 text-black"></ShoppingBagIcon>
          <div>
          {context.count}
          </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
