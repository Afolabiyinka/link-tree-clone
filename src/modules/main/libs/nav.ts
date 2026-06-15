import { IconName } from "@/components/shared/Icon";

export type NavLinkItem = {
   name: string;
   icon: IconName;
   href: string;
};

export const NavLinks: Record<string, NavLinkItem[]> = {
   MainLinks: [
      { name: "Dashboard", icon: "Home", href: "/" },
      { name: "My Links", icon: "Link2", href: "/links" },
      { name: "Analytics", icon: "BarChart3", href: "/analytics" },
   ],

   customiseLinks: [
      { name: "Customise", icon: "Palette", href: "/customise" },
      { name: "Themes", icon: "Layout", href: "/themes" },
      { name: "Preview", icon: "Eye", href: "/preview" },
   ],

   settingsLinks: [
      { name: "Profile", icon: "User", href: "/me" },
      { name: "Settings", icon: "Settings", href: "/settings" }, // ✅ also fixed "Eye" typo here
   ],
};