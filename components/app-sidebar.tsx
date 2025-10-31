import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";
import { SearchForm } from "@/components/search-form";
import { Home } from "lucide-react";

interface UserData {
  name: string;
  email: string;
  avatar: string;
}

interface NavMenuGroupItem {
  title: string;
  url: string;
  items: NavMenuItem[];
}

interface NavMenuItem {
  title: string;
  url: string;
  isActive?: boolean;
}

interface SampleData {
  user: UserData;
  versions: string[];
  navMain: NavMenuGroupItem[];
}

// This is sample data.
const data: SampleData = {
  user: {
    name: "Patrick van Zadel",
    email: "patrick.van.zadel@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Patrick+van+Zadel",
  },
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Bezienswaardigheden",
      url: "#",
      items: [
        {
          title: "Musea",
          url: "#",
        },
        {
          title: "Monumenten",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Home />
                <span className="text-base font-semibold">Canon Connect</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
