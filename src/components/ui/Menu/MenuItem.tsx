import classNames from "classnames";

type MenuItemProps = {
    children: React.ReactNode;
    icon: React.ReactNode;
    onClick?: () => void;
    variant?: "solid" | "outline";
};

const MenuItem = ({ children, icon, onClick, variant }: MenuItemProps) => {
    return (
        <button
            className={classNames(
                "flex",
                "items-center",
                "space-x-2",
                "px-4",
                "py-2",
                "rounded-md",
                "hover:bg-gray-100",
                "hover:text-gray-900",
                "transition",
                "duration-200",
                "ease-in-out",
                variant === "solid" && "bg-gray-100",
                variant === "solid" && "text-gray-900",
                variant === "outline" && "border",
                variant === "outline" && "border-gray-200",
                variant === "outline" && "text-gray-700"
            )}
            onClick={onClick}
        >
            {icon}
            <span>{children}</span>
        </button>
    );
};

export default MenuItem;