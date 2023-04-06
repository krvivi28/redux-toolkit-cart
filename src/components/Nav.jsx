import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Nav() {
  const items = useSelector((state) => {
    return state.cart;
  });
  return (
    <>
      <div className="navbar flex bg-[#6d28d9] text-lg items-center justify-between px-5 py-3 text-white sticky top-0">
        <ul className="logo flex items-center gap-5">
          {" "}
          <li>
            {" "}
            <Link to="/">Redux-Toolkit</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
        </ul>
        <ul className="flex items-center gap-5">
          <li>
            {" "}
            <Link to="/cart">Cart</Link>{" "}
          </li>
          <li>
            <Link to="/cart">
              {" "}
              <div className="cart flex items-center justify-center">
                <AiOutlineShoppingCart />
                {items.length}
              </div>
            </Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
