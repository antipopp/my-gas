import classNames from "classnames";
import React, { forwardRef } from "react";
import Typography from "../Typography/Typography";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number" | "date" | "datetime-local";
  fullWidth?: boolean;
  required?: boolean;
  helperText?: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    className,
    onChange,
    value,
    placeholder,
    type,
    fullWidth,
    required,
    helperText,
    error,
    ...rest
  }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        {label && (
          <Typography variant="overline" color="black">
            {label}
          </Typography>
        )}
        <input
          ref={ref}
          required={required}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          type={type || "text"}
          className={classNames(
            "px-4",
            "py-2",
            "rounded-md",
            "flex",
            "items-center",
            "justify-center",
            "transition",
            "duration-200",
            "ease-in-out",
            "border",
            "border-gray-200",
            "focus:border-primary",
            "focus:outline-none",
            fullWidth && "w-full",
            error && "border-error",
            error && "focus:border-error",
            className
          )}
          {...rest}
        />
        {helperText && <Typography variant="caption">{helperText}</Typography>}
      </div>
    );
  }
);

export default Input;
