import InputForm from "../Elements/input/";
import Button from "../Elements/Button/buttonIndex";
const FormRegister = () => {
  return (
    <form action="">
      {/* Email Form */}
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Enter your Fullname"
        name="fullname"
      />

      {/* Email Form */}
      <InputForm
        label="Email"
        type="email"
        placeholder="Enter your Email"
        name="email"
      />

      {/* Password Form */}
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      {/* Confirm Password Form */}
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="Enter your password"
        name="confirmPassword"
      />
      {/* Button */}
      <Button classname="bg-[#294B29] w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
