import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import Button from "../ui/Button/Button";
import Logo from "../ui/Logo/Logo";

const AppBar = () => {
  const { data: sessionData } = useSession();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between bg-primary px-4 py-2 shadow-md">
      <Logo onClick={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {sessionData && (
            <p className="text-secondary">Welcome, {sessionData.user?.name}</p>
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
  );
};

export default AppBar;
