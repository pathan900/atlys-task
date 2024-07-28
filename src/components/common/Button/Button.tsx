import { MouseEventHandler, ReactElement } from "react";

type ButtonProps = {
  children: ReactElement | string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset";
  variant?: string;
  className: string;
  customCss: string;
  isLoading: boolean;
  disabled: boolean;
};

const Button = ({
  children,
  onClick,
  type,
  variant,
  className,
  customCss,
  isLoading = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      disabled={disabled || isLoading}
      className={`${
        customCss
          ? customCss
          : `common-btn ${variant}-btn ${className ? className : null}`
      }`}
      //   style={variant === "solid" ? { backgroundColor: accentHexcode}:{}}
    >
      {children}
    </button>
  );
};

export default Button;
