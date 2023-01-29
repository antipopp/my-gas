import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  color?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
};

const Button = ({
    children,
    className,
    onClick,
    variant,
    color,
    fullWidth,
}: ButtonProps) => {
    return (
        <button
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
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;