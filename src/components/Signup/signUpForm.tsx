import React, { useState } from "react";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({
  handleCloseModal,
  handleLoginModal,
  isModal,
}: {
  handleCloseModal?: Function;
  handleLoginModal?: Function;
  isModal?: boolean;
}) => {
  const [signupData, setsignupData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsignupData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSignup = () => {
    if (
      !signupData.email.trim() ||
      !signupData.password.trim() ||
      !signupData.username.trim()
    ) {
      //show required error
      return;
    }
    //validation code...

    if (isModal) {
      handleCloseModal && handleCloseModal();
      handleLoginModal && handleLoginModal(true);
    } else {
      navigate("/login");
    }
  };

  const handleNavigation = () => {
    if (isModal) {
      handleCloseModal && handleCloseModal();
      handleLoginModal && handleLoginModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <p className="text-center uppercase text-[14px} text-[#6B6C70] leading-4 font-medium tracking-[1px] bg-transparent mb-2">
        Sign up
      </p>
      <h2 className="text-center text-[18px] leading-5 font-semibold bg-transparent mb-11">
        Create an account to continue
      </h2>
      <div className="bg-transparent">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          label="Email"
          //   inputError={}
          value={signupData.email}
          onChange={handleChange}
          maxLength={50}
          className="bg-transparent"
        />
      </div>
      <div className="bg-transparent">
        <Input
          type="username"
          name="username"
          placeholder="Choose a preferred username"
          label="Username"
          value={signupData.username}
          onChange={handleChange}
          maxLength={50}
          className="bg-transparent"
        />
      </div>
      <div className="bg-transparent">
        <Input
          type="password"
          name="password"
          placeholder="Choose a strong password"
          label="Password"
          value={signupData.password}
          onChange={handleChange}
          maxLength={50}
        />
      </div>
      <Button
        onClick={handleSignup}
        type="submit"
        className="text-white w-full rounded bg-[#4A96FF] font-medium text-[16px] leading-5 h-11"
        customCss=""
        isLoading={false}
        disabled={false}
      >
        Continue
      </Button>
      <p
        className="text-[14px] text-[#7F8084] leading-4 font-medium tracking-[1px] bg-transparent mt-4"
        onClick={handleNavigation}
      >
        Already have an account?
        <span className="text-white cursor-pointer ml-1">Login →</span>
      </p>
    </>
  );
};

export default SignUpForm;
