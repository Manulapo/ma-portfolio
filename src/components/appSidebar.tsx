import { Link } from "react-router-dom";
import { sidebarIcon } from "../constants/icon";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const AppSidebar = () => {
  return (
    <Sidebar>
      <div className="pt-20 pl-5 px-3 h-full">
        <SidebarHeader>
          <h1 className="h2-bold text-2xl">About me</h1>
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
        2025 ©Chiara Coletta All rights reserved
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
