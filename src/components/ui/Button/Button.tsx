import classNames from "classnames";
import Typography from "../Typography/Typography";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "solid" | "outline";
  color?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
};

type LoadingButtonProps = ButtonProps & {
    loading: boolean;
}

const Button = ({
    children,
    disabled,
    className,
    onClick,
    type = "button",
    color = "primary",
    fullWidth,
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            type={type}
            onClick={onClick}
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
                fullWidth && "w-full",
                color === "primary" && "bg-primary",
                color === "primary" && "text-white",
                color === "primary" && "hover:bg-brand-200",
                color === "primary" && "hover:text-white",
                color === "secondary" && "bg-secondary",
                color === "secondary" && "text-primary",
                color === "secondary" && "hover:bg-brand-200",
                color === "secondary" && "hover:text-primary",
                disabled && "bg-gray-200",
                disabled && "text-gray-500",
                disabled && "cursor-not-allowed",
                className
            )}
        >
            <Typography variant="body">{children}</Typography>
        </button>
    );
};

const LoadingButton = ({
    children,
    disabled,
    className,
    onClick,
    type = "button",
    color = "primary",
    fullWidth,
    loading,
}: LoadingButtonProps) => {
    return (
        <button
            disabled={disabled}
            type={type}
            onClick={onClick}
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
                fullWidth && "w-full",
                color === "primary" && "bg-primary",
                color === "primary" && "text-white",
                color === "primary" && "hover:bg-brand-200",
                color === "primary" && "hover:text-white",
                color === "secondary" && "bg-secondary",
                color === "secondary" && "text-primary",
                color === "secondary" && "hover:bg-brand-200",
                color === "secondary" && "hover:text-primary",
                disabled && "bg-gray-200",
                disabled && "text-gray-500",
                disabled && "cursor-not-allowed",
                className
            )}
        >
            {loading ? (
                <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
                    ></path>
                </svg>
            ) : (
                <Typography variant="body">{children}</Typography>
            )}
        </button>
    );
};

export { Button, LoadingButton };
