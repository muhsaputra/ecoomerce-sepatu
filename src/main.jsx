import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductPage from "./pages/products.jsx";
import { Button, ThemeProvider } from "@material-tailwind/react";
import "react-toastify/dist/ReactToastify.css";
import { TypeAnimation } from "react-type-animation";
import ProfilePage from "./pages/profile.jsx";
import DetailProductPage from "./pages/detailProducts.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const email = localStorage.getItem("email");

const navProducts = () => {
  window.location.href = "/products";
};

const home = () => {
  window.location.href = "/";
};

const handleLogout = () => {
  localStorage.clear();
  window.location.href = "/login";
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* Navigation */}
        <div className="navbar bg-base-100">
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
            <a className="btn btn-ghost text-xl">Store</a>
          </div>
          <div className="navbar-end mr-5">
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
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero  " id="heroSection">
          <div className="container mx-auto">
            <div className="flex py-16 lg:py-0 flex-col lg:flex-row items-center px-24">
              {/* text */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="lg:text-xl">Change Your Style</h1>
                <div className="text-[50px] lg:text-[75px] font-bold">
                  <span className="">Try be </span>
                  <TypeAnimation
                    sequence={[
                      "Stylish",
                      2000,
                      "Modern",
                      2000,
                      "Fancy",
                      2000,
                      "Elegant ",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-[#182d18]"
                    repeat={Infinity}
                  />
                </div>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  <br />
                  Similique, voluptas.
                </p>
                <div className="mt-5">
                  <Button>Contact Me</Button>
                </div>
              </div>
              {/* Img */}
              <div className="flex flex-1 max-w-[300px] lg:max-w-[500px] lg:items-center ">
                <img src={"./public/images/products/products6.webp"} alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
