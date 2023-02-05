import classNames from "classnames";

type TypographyProps = {
    children: React.ReactNode,
    variant?: "title" | "subtitle" | "overline" | "body" | "caption",
    className?: string,
    color?: "primary" | "secondary" | "white" | "black" | "error",
}

const Typography = ({ children, variant, className, color, ...rest }: TypographyProps) => {
    return (
        <p
            className={classNames(
                className,
                variant === "title" && "text-2xl",
                variant === "subtitle" && "text-xl",
                variant === "overline" && "text-xs",
                variant === "overline" && "uppercase",
                variant === "overline" && "tracking-wider",
                variant === "overline" && "font-semibold",
                variant === "body" && "text-base",
                variant === "caption" && "text-sm",
                variant === "caption" && "text-gray-500",
                color === "primary" && "text-primary",
                color === "secondary" && "text-secondary",
                color === "white" && "text-white",
                color === "black" && "text-black",
                color === "error" && "text-error",
            )}
            {...rest}
        >
            {children}
        </p>
    );
};

export default Typography;