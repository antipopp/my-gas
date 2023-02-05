import classNames from "classnames";
import { Fragment, useState } from "react";
import AppBar from "../AppBar/AppBar";
import Sidebar from "../SideBar/Sidebar";

const DashboardLayoutRoot = ({
  children,
  isSidebarOpen,
}: {
  children: React.ReactNode;
  isSidebarOpen: boolean;
}) => {
  return (
    <div
      className={classNames(
        "flex",
        "flex-auto",
        "h-screen",
        "flex-row",
        "bg-secondary",
        isSidebarOpen && "lg:pl-64",
      )}
    >
      {children}
    </div>
  );
};

const DashboardLayoutContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className={classNames("flex", "flex-auto", "flex-col", "w-full", "p-24", "bg-slate-50")}>
      {children}
    </main>
  );
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <Fragment>
      <AppBar toggleSidebar={toggleSidebar} />
      <DashboardLayoutRoot isSidebarOpen={openSidebar}>
        <Sidebar isOpen={openSidebar} toggleSidebar={toggleSidebar} />
        <DashboardLayoutContent>{children}</DashboardLayoutContent>
      </DashboardLayoutRoot>
    </Fragment>
  );
};

export default DashboardLayout;
