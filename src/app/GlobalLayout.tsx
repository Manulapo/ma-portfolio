import { Outlet } from "react-router-dom";
import AppSidebar from "../components/appSidebar";
import NavBar from "../components/shared/nav-bar";
import { SidebarProvider } from "../components/ui/sidebar";

const GlobalLayout = () => {
  return (
    <section className="dashboard-layout">
      <SidebarProvider>
        <div className="flex flex-col min-h-screen w-full">
          <NavBar /> 
          <div className="flex flex-1">
            <AppSidebar />
            <main className="md:p-8 md:pt-25 p-3 pt-18 overflow-hidden">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </section>
  );
};

export default GlobalLayout;
