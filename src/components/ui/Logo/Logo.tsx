import { FireIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

type LogoProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Logo = ({ children, className, onClick }: LogoProps) => {
  return (
    <div
      className={classNames(
        "flex",
        "items-center",
        "space-x-2",
        "px-4",
        "py-2",
        "rounded-md",
        "text-secondary",
        onClick && "hover:bg-gray-100",
        onClick && "hover:text-primary",
        onClick && "transition",
        onClick && "duration-200",
        onClick && "ease-in-out",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <FireIcon
        className={classNames("w-6", "h-6", "stroke-current")}
      />
    </div>
  );
};

export default Logo;
