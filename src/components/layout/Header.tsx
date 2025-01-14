import { svg } from "@/assets/images/svg";
import ImageBox from "../common/ImageBox";
import HeaderDropdown from "./HeaderDropdown";

import { TbGridDots as DashboardIcon } from "react-icons/tb";

const Header = () => {
  return (
    <header className="h-[60px] flex items-center justify-between p-4 border-b border-neutral bg-white">
      <div className="flex items-center space-x-6">
        {/* Icon */}
        <DashboardIcon className="w-6 h-6 text-neutral-dark" />
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <ImageBox alt="Jira" src={svg.JiraLogo} className="w-6 h-6" />
          <h1 className="text-2xl text-neutral-dark">Jira</h1>
        </div>
        {/* Dropdowns */}
        <div className="flex items-center space-x-4"></div>
      </div>
      <div>a</div>
    </header>
  );
};
export default Header;
