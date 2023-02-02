import classNames from "classnames";
import { Fragment, useState } from "react";
import AppBar from "../AppBar/AppBar";
import Sidebar from "../SideBar/Sidebar";

const DashboardLayoutRoot = ({ children, isSidebarOpen }: { children: React.ReactNode, isSidebarOpen: boolean }) => {
  return (
    <div
      className={classNames(
        "flex",
        "flex-auto",
        "h-screen",
        "flex-col",
        "pt-16",
        "bg-secondary",
        isSidebarOpen && "lg:pl-64",
      )}
    >
      {children}
    </div>
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
      <Sidebar isOpen={openSidebar} toggleSidebar={toggleSidebar} />
      <DashboardLayoutRoot isSidebarOpen={openSidebar}>
        <main className={classNames("flex", "flex-auto", "flex-col", "w-full")}>
          {children}
        </main>
      </DashboardLayoutRoot>
    </Fragment>
  );
};

export default DashboardLayout;
