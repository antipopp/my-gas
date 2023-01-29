import classNames from "classnames";

type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const IconButton = ({
  children,
  className,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      className={classNames(
        "flex",
        "items-center",
        "justify-center",
        "w-10",
        "h-10",
        "rounded-md",
        "hover:bg-gray-100",
        "hover:text-gray-900",
        "transition",
        "duration-200",
        "ease-in-out",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;