import { Link } from "react-router-dom";
import { navbarLinks, sidebarIcon } from "../constants";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";

const AppSidebar = () => {
  const sidebarContext = useSidebar();

  const handleLinkClick = () => {
    sidebarContext.toggleSidebar();
  };

  return (
    <Sidebar>
      {/* Side */}
      <div className="pt-5 pl-5 px-3 mb-8 md:hidden">
        <SidebarHeader>
          <h1 className="h2-bold text-2xl">Sections</h1>
        </SidebarHeader>
        <div className="border-t-1 my-4"></div>
        <SidebarContent>
          <SidebarMenu className="flex flex-col gap-4">
            {Object.values(navbarLinks).map((values, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton>
                  <Link
                    className="flex items-center gap-2"
                    to={values.link}
                    onClick={handleLinkClick}
                  >
                    <values.icon className="size-5 w-fit" />
                    <p className="ml-1">{values.name}</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </div>
      {/* About me */}
      <div className="pl-5 px-3 md:pt-20">
        <SidebarHeader>
          <h1 className="h2-bold text-2xl">Links</h1>
        </SidebarHeader>
        <div className="border-t-1 my-4"></div>
        <SidebarContent>
          <SidebarMenu className="flex flex-col gap-4">
            {Object.values(sidebarIcon).map((values, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton>
                  <Link
                    className="flex items-center gap-2"
                    to={values.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    {typeof values.icon === "string" ? (
                      <img
                        className="size-5 w-fit"
                        src={values.icon}
                        alt={values.name}
                      />
                    ) : (
                      <values.icon className="size-5 w-fit" />
                    )}
                    <p className="ml-1">{values.name}</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </div>
      <SidebarFooter className="mt-auto py-4 pl-5 text-muted-foreground opacity-50 text-xs">
        <div className="text-muted-foreground opacity-50 text-xs">
          2025 ©Chiara Coletta All rights reserved
        </div>
        <div className="text-muted-foreground opacity-50 text-xs">
          Produced by @La Porta Manuel
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
