import InputForm from "../Elements/input/";
import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button/buttonIndex";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  // Handle login
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {/* Email Form */}
      <InputForm
        label="Username"
        type="text"
        placeholder="Enter your Username"
        name="username"
        ref={usernameRef}
      />

      {/* Password Form */}
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />

      {/* Button */}
      <Button classname="bg-[#294B29] w-full" type="submit">
        Login
      </Button>

      {loginFailed && (
        <p className="text-red-500 mt-3 text-center">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
