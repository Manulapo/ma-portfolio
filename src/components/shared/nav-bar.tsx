/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import { SidebarTrigger } from "../ui/sidebar";

const navbarLinksObj = {
  home: {
    name: "Home",
    link: "/",
  },
  about: {
    name: "About",
    link: "/about",
  },
  projects: {
    name: "Projects",
    link: "/projects",
  },
  skills: {
    name: "Skills",
    link: "/skills",
  },
};

const NavBar = () => {
  const location = useLocation(); // Get the current location object
  const pathName = location.pathname; // Extract the pathname
  console.log(pathName); // Log the pathname to the console

  const isRootPath = pathName === "/"; // Check if the current path is the root

  return (
    <nav className="flex items-center gap-10 w-full bg-black text-white z-50 fixed ">
      <div className="home-button bg-amber-400 h-full w-[60px] p-4 flex items-center justify-center">
        <SidebarTrigger className="cursor-pointer p-0 hover:bg-transparent hover:text-white hover:opacity-60" />
      </div>
      <div className="flex gap-5">
        {Object.entries(navbarLinksObj).map(([_, values]) => {
          return (
            <Link
              key={values.name}
              to={values.link}
              className={`text-m ${
                (isRootPath && values.link === "/") ||
                pathName === values.link
                  ? "font-semibold"
                  : ""
              }`}
            >
              {values.name}
            </Link>
          );
        })}
      </div>
      <div className="ml-auto pr-10 flex gap-4 items-center">
        <p>Account</p>
        <Link to={"/about"}>
          <img
            className="rounded-full"
            width={40}
            height={40}
            src="https://randomuser.me/api/portraits/women/8.jpg"
            alt="avatar"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
