import { useState } from "react";
import Input from "../common/Input/Input";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button/Button";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/authSlice";
import { getUser } from "../../mock/mockAPI";

const LoginForm = ({
  handleCloseModal,
  isModal,
  handleSignUpModal,
}: {
  handleCloseModal?: () => void;
  isModal?: boolean;
  handleSignUpModal?: Function;
}) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    if (!loginData.email.trim() || !loginData.password.trim()) {
      //show required error
      return;
    }
    //validation code...

    //fetching dummy user
    try {
      const user = await getUser();
      if (user) {
        dispatch(login({ email: user.email, username: user.username }));
        handleCloseModal && handleCloseModal();
        navigate("/");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigation = () => {
    if (isModal) {
      handleCloseModal && handleCloseModal();
      handleSignUpModal && handleSignUpModal(true);
    } else {
      navigate("/signup");
    }
  };

  return (
    <>
      <p className="text-center uppercase text-[14px] text-[#6B6C70] leading-4 font-medium tracking-[1px] bg-transparent mb-2">
        WELCOME BACK
      </p>
      <h2 className="text-center text-[18px] leading-5 font-semibold bg-transparent mb-11">
        Log into your account
      </h2>
      <div className="bg-transparent">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email or username"
          label="Email or Username"
          value={loginData.email}
          onChange={handleChange}
          maxLength={50}
          className="bg-transparent"
        />
      </div>
      <div className="bg-transparent">
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          label="Password"
          value={loginData.password}
          onChange={handleChange}
          maxLength={50}
        />
      </div>
      <Button
        onClick={handleLogin}
        type="submit"
        className="text-white w-full rounded bg-[#4A96FF] font-medium text-[16px] leading-5 h-11"
        customCss=""
        isLoading={isLoading}
        disabled={false}
      >
        Login now
      </Button>
      <p
        className="text-left text-[14px] text-[#7F8084] leading-4 font-medium tracking-[1px] bg-transparent mt-4"
        onClick={handleNavigation}
      >
        Not registered yet?
        <span className="text-white cursor-pointer ml-1">Register →</span>
      </p>
    </>
  );
};

export default LoginForm;
