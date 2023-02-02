import { signIn, signOut, useSession } from "next-auth/react";
import Button from "../ui/Button/Button";
import Logo from "../ui/Logo/Logo";

type AppBarProps = {
  toggleSidebar: () => void;
};

const AppBar = ({ toggleSidebar }: AppBarProps) => {
  const { data: sessionData } = useSession();

  return (
    <header className="flex-shrink-0 lg:left-64 width-[calc(100%_-_16rem)]">
      <div className="flex items-center justify-between bg-primary px-4 py-2 shadow-md">
        <Logo onClick={toggleSidebar} />
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {sessionData && (
              <p className="text-secondary">
                Welcome, {sessionData.user?.name}
              </p>
            )}
          </div>
          <Button
            onClick={() => {
              sessionData ? void signOut() : void signIn();
            }}
            variant="outline"
            color="secondary"
          >
            {sessionData ? "Sign Out" : "Sign In"}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
