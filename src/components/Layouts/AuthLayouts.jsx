import { Link } from "react-router-dom";

const AuthLayout = ({ title, children, type }) => {
  return (
    <div className={`flex justify-center min-h-screen items-center`}>
      <div className="w-full max-w-xs">
        <h1 className="text-[#294B29] font-bold mb-2 text-3xl">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        {Navigation({ type })}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Dont have an account? {""}
        <Link to={"/register"} className="font-bold text-[#294B29]">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account? {""}
        <Link to={"/login"} className="font-bold text-[#294B29]">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
