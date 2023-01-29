import classNames from "classnames";

type MenuProps = {
    children: React.ReactNode;
    fullWidth?: boolean;
    fullHeight?: boolean;
    className?: string;
    variant?: "solid" | "outline";
};

const Menu = ({ children, className, variant, fullHeight, fullWidth }: MenuProps) => {
    return (
        <nav
            className={classNames(
                "flex",
                "flex-col",
                "space-y-2",
                "px-2",
                "py-4",
                "bg-white",
                "shadow-md",
                variant === "solid" && "border",
                variant === "solid" && "border-gray-200",
                variant === "outline" && "border-2",
                variant === "outline" && "border-gray-200",
                fullWidth && "w-full",
                fullHeight && "h-full",
                className
            )}
        >
            {children}
        </nav>
    );
};

export default Menu;