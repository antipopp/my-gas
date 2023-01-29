import classNames from "classnames";

type CardProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
};

const Card = ({ children, variant, ...rest }: CardProps) => {
  return (
    <div
        className={classNames(
            "bg-white",
            "shadow-md",
            "rounded-md",
            "p-4",
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "space-y-4",
            variant === "solid" && "border",
            variant === "outline" && "border-2",
            variant === "outline" && "border-gray-200"
        )}
    >
      {children}
    </div>
  );
};

export default Card;
