import { useState } from "react";
import Eyeicon from "./eyeicon";

type InputProps = {
  type: string;
  label?: string;
  placeholder?: string;
  inputError?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  required?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input = ({
  type,
  label,
  placeholder,
  inputError,
  value,
  onChange,
  maxLength,
  required = false,
  onBlur,
  name,
  id,
  disabled = false,
  onFocus,
  className,
}: InputProps) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    if (disabled) {
      return;
    }
    setShow((prev) => !prev);
  };

  return (
    <div className="mb-4">
      <label
        className={`block mb-2 text-left text-[#C5C7CE] ${
          inputError ? "text-red-500" : ""
        } ${disabled ? "text-gray-400" : ""}`}
        htmlFor={id}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          className={`bg-transparent w-full px-4 py-3 text-[rgba(127, 128, 132, 1)] text-base border-[1.5px]  rounded transition-colors focus:outline-none focus:border-blue-500 ${
            inputError ? "border-red-500" : "border-[#35373B]"
          } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""} ${
            className || ""
          }`}
          placeholder={placeholder}
          type={type === "password" ? (show ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          name={name}
          maxLength={maxLength}
          onBlur={onBlur}
          disabled={disabled}
          onFocus={onFocus}
        />
        {type === "password" && (
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleShow}
          >
            <Eyeicon show={show} />
          </div>
        )}
      </div>
      {inputError && (
        <div className="text-red-500 text-sm mt-1">{inputError}</div>
      )}
    </div>
  );
};

export default Input;
