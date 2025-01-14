interface HeaderMenuDropdownItem {
  title: string;
  href: string;
  disabled?: boolean;
}
interface HeaderMenuDropdown {
  title: string;
  disabled?: boolean;
  items: HeaderMenuDropdownItem[];
}
