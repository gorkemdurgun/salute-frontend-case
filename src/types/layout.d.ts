type HeaderMenuDropdownItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
type HeaderMenuDropdown = {
  title: string;
  disabled?: boolean;
  items: HeaderMenuDropdownItem[];
};

type SidebarMenuItem = {
  icon: IconType;
  title: string;
  href: string;
  disabled?: boolean;
};
type SidebarMenu = {
  category?: string;
  items: SidebarMenuItem[];
}[];
