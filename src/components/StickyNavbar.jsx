import React from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "About" },
  { to: "/#experience", label: "Work" },
  { to: "/#writing", label: "Docs" },
  { to: "/#projects", label: "Projects" },
];

function NavList({ onNavigate }) {
  const location = useLocation();

  return (
    <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-8">
      {navLinks.map(({ to, label }) => {
        const isHash = to.includes("#");
        const isActive =
          !isHash && location.pathname === to;

        if (isHash) {
          return (
            <li key={to}>
              <a
                href={to}
                onClick={onNavigate}
                className="text-sm text-blue-gray-500 transition-colors duration-200 hover:text-blue-gray-900"
              >
                {label}
              </a>
            </li>
          );
        }

        return (
          <li key={to}>
            <Link
              to={to}
              onClick={onNavigate}
              className={`text-sm transition-colors duration-200 ${
                isActive
                  ? "text-blue-gray-900"
                  : "text-blue-gray-500 hover:text-blue-gray-900"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-gray-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-sm font-medium tracking-tight text-blue-gray-900"
        >
          Abraham Soclof
        </Link>

        <nav className="hidden lg:block">
          <NavList />
        </nav>

        <IconButton
          variant="text"
          className="ml-auto h-8 w-8 text-blue-gray-600 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Bars3Icon className="h-5 w-5" strokeWidth={1.5} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <div className="border-t border-blue-gray-100 px-6 py-4 lg:hidden">
          <NavList onNavigate={() => setOpenNav(false)} />
        </div>
      </Collapse>
    </header>
  );
}
