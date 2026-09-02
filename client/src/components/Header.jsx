import { Bell01 } from "@untitledui/icons";

import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";

import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";

const subItems = [
  { label: "Overview", href: "/dashboard/overview" },
  { label: "Notifications", href: "/dashboard/notifications" },
  { label: "Analytics", href: "/dashboard/analytics" },
  { label: "Saved reports", href: "/dashboard/saved-reports" },
  { label: "Scheduled reports", href: "/dashboard/scheduled-reports" },
  { label: "User reports", href: "/dashboard/user-reports" },
];

const items = [
  { label: "Home", href: "/" },
  {
    label: "Dashboard",
    href: "/dashboard",
    items: subItems,
  },
  { label: "Projects", href: "/projects" },
  { label: "Tasks", href: "/tasks" },
  { label: "Reporting", href: "/reporting" },
  { label: "Users", href: "/users" },
];

export const Header = () => {
  return (
    <HeaderNavigationBase
      activeUrl="/dashboard"
      items={items}
      actions={
        <>
         

          <div className="flex gap-0.5">
            

            <div className="relative">
              <NavButton
                icon={Bell01}
                label="Notifications"
                href="/notifications"
                tooltipPlacement="bottom"
              />

              <div className="absolute -top-px -right-px flex size-3.5 items-center justify-center rounded-full bg-fg-error-primary text-[10px] font-bold text-white">
                2
              </div>
            </div>
          </div>

          <DropdownAvatar />
        </>
      }
    />
  );
};

export default Header;