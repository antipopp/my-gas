import classNames from "classnames";
import Link from "next/link";

type MenuLinkProps = {
  children: React.ReactNode;
  href: string;
  icon: React.ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
  isSelected?: boolean;
};

const MenuLink = ({
  children,
  href,
  icon,
  onClick,
  fullWidth,
  color = "primary",
  isSelected = false,
}: MenuLinkProps) => {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
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
          fullWidth && "w-full",
          color === "primary" && "bg-secondary",
          color === "primary" && "text-primary",
          color === "primary" && "hover:bg-brand-200",
          color === "primary" && "hover:text-primary",
          color === "secondary" && "bg-primary",
          color === "secondary" && "text-secondary",
          color === "secondary" && "hover:bg-brand-200",
          color === "secondary" && "hover:text-primary",
          color === "danger" && "bg-danger",
          color === "danger" && "text-white",
          color === "danger" && "hover:bg-danger-200",
          color === "danger" && "hover:text-white",
          isSelected && "bg-gray-100"
        )}
      >
        {icon}
        <span>{children}</span>
      </button>
    </Link>
  );
};

export default MenuLink;
