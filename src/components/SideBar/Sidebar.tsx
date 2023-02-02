import { HomeIcon, ScaleIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { useRouter } from "next/router";
import Logo from "../ui/Logo/Logo";
import Menu from "../ui/Menu/Menu";
import MenuLink from "../ui/Menu/MenuLink";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const items = [
  {
    icon: <HomeIcon className="h-5 w-5" />,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: <ScaleIcon className="h-5 w-5" />,
    label: "Usage",
    href: "/usage",
  }
];

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  // current location is used to determine which menu item is active
  const { pathname } = useRouter();

  return (
    <aside
      className={classNames(
        "fixed",
        "top-0",
        "left-0",
        "h-screen",
        "w-64",
        "bg-primary",
        "shadow",
        "z-10",
        "transition",
        "duration-300",
        "ease-in-out",
        isOpen && "transform",
        isOpen && "translate-x-0",
        !isOpen && "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between border-b bg-brand px-4 py-2">
        <Logo onClick={toggleSidebar} />
      </div>
      <Menu fullHeight>
        <ul>
          {items.map((item) => (
            <li key={item.label}>
              <MenuLink
                icon={item.icon}
                href={item.href}
                isSelected={pathname === item.href}
                fullWidth
              >
                {item.label}
              </MenuLink>
            </li>
          ))}
        </ul>
      </Menu>
    </aside>
  );
};

export default Sidebar;
