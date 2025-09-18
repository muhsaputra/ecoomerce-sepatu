import { Link } from "react-router-dom";

const Button = (props) => {
  const notify = () => {
    toast("Wow so easy!");
  };
  const { children, classname, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`h-10 px-6  hover:bg-[#182d18] transition font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
