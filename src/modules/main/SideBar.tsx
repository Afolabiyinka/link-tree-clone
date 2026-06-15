import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLinks } from "./libs/nav";
import SideItem from "./components/sidebar-item";
import CustomBtn from "@/components/shared/CustomBtn";

const SideBarComponent = () => {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold">Linky</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            {NavLinks.MainLinks.map(({ href, icon, name }, i) => (
              <SideItem href={href} icon={icon} name={name} key={i} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Customize</SidebarGroupLabel>
          <SidebarGroupContent>
            {NavLinks.customiseLinks.map(({ href, icon, name }, i) => (
              <SideItem href={href} icon={icon} name={name} key={i} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Share</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/share">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Profile
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <SidebarMenu>
          {NavLinks.settingsLinks.map(({ href, icon, name }, i) => (
            <SideItem href={href} icon={icon} name={name} key={i} />
          ))}

          <SidebarMenuItem>
            <CustomBtn
              variant={`destructive`}
              startIcon="LogOut"
              text="Logout"
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBarComponent;
