import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2 mx-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        className="p-5 rounded-t-lg h-60 w-full object-cover"
        src={image}
        alt="product image"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name, id } = props;
  return (
    <>
      <div className="px-5 pb-5">
        <Link to={`/product/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name.substring(0, 20)}...
          </h5>
        </Link>
        <p>{children.substring(0, 100)}</p>
      </div>
    </>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();

  return (
    <div className="px-5 pb-5 flex items-center justify-between">
      <span className="text-2xl font-bold text-gray-900 dark:text-white">
        {" "}
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </span>
      <a
        href="#"
        className="text-white bg-[#294B29] hover:bg-[#192213] transition focus:ring-4 focus:outline-none focus:ring-[#789461] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={() => {
          dispatch(addToCart({ id, qty: 1 }));
        }}
      >
        Add to cart
      </a>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
