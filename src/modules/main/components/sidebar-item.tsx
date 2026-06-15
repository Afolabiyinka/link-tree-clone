import Icon, { IconName } from "@/components/shared/Icon";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";

const SideItem = ({
  href,
  icon,
  name,
}: {
  href: string;
  icon: IconName;
  name: string;
}) => {
  return (
    <SidebarMenuItem className="p-1 hover:p-2 transition-all">
      <SidebarMenuButton asChild>
        <Link href={href}>
          {icon && <Icon icon={icon} />}

          <p className="text-md">{name}</p>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default SideItem;
