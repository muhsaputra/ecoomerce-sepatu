import { Fragment, useState, useEffect, useRef } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import { Button } from "@material-tailwind/react";
import { getProducts } from "../services/products.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import { useSelector } from "react-redux";

const navProducts = () => {
  window.location.href = "/products";
};

const home = () => {
  window.location.href = "/";
};

// Products Page
const ProductPage = () => {
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      {/* navigation */}
      <div className="navbar bg-base-100 mb-11">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={home}>Home</a>
              </li>
              <li>
                <a onClick={navProducts}>Products</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a onClick={home} className="btn btn-ghost text-xl">
            Store
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content lg:w-[600px] w-[440px] bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg ml-5 mb-2">Cart</span>
                <table className="text-left table-auto border-separate border-spacing-x-5">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length > 0 &&
                      cart.map((item) => {
                        const product = products.find(
                          (product) => product.id === item.id
                        );
                        return (
                          <tr key={item.id}>
                            <td>{product.title.substring(0, 10)}..</td>
                            <td>
                              {product.price.toLocaleString("id-ID", {
                                styles: "currency",
                                currency: "USD",
                              })}
                            </td>
                            <td>{item.qty}</td>
                            <td>
                              ${" "}
                              {(item.qty * product.price).toLocaleString(
                                "USD",
                                { styles: "currency", currency: "IDR" }
                              )}
                            </td>
                          </tr>
                        );
                      })}

                    <tr ref={totalPriceRef}>
                      <td colSpan={3}>
                        <b>Total Price</b>
                      </td>
                      <td>
                        <b>
                          ${" "}
                          {totalPrice.toLocaleString("id-ID", {
                            styles: "currency",
                            currency: "IDR",
                          })}
                        </b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="card-actions">
                  <button className="btn bg-[#294B29] text-white btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex ml-3">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <img
                  className="rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="./public/images/profile/saputra.jpg"
                />
              </div>

              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <p>Username : {username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BreadCrumb */}
      <div className="text-sm breadcrumbs items-center flex  flex-wrap px-14 lg:px-28 mb-3">
        <ul>
          <li>
            <a onClick={home}>Home</a>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
      </div>
      <div className="min-h-screen w-full flex justify-center items-center flex-wrap gap-4">
        {/* Products Data */}
        {products.length > 0 &&
          products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header image={product.image} id={product.id} />
              <CardProducts.Body name={product.title} id={product.id}>
                {product.description}
              </CardProducts.Body>
              <CardProducts.Footer
                price={product.price}
                id={product.id}
                addToCart={products}
              />
            </CardProducts>
          ))}
      </div>
    </>
  );
};

export default ProductPage;
