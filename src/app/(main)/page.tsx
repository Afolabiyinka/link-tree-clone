import Themetoggle from "@/components/shared/theme-toggle";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SideBarComponent from "@/modules/main/SideBar";

const MainLayout = () => {
  return (
    <SidebarProvider>
      <SideBarComponent />
      <SidebarInset>
        <main className="p-6 w-full h-full">
          <Themetoggle />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
