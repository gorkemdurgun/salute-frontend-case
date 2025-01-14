import { svg } from "@/assets/images/svg";
import ImageBox from "../common/ImageBox";

const SidebarProject = () => {
  return (
    <div className="flex items-center gap-3 p-4">
      <ImageBox alt="Project Logo" src={svg.ProjectLogo} className="w-8 h-8 bg-warning rounded-md" />
      <div className="flex flex-col">
        <h3 className="text-neutral-dark text-sm font-semibold">Waystar Project</h3>
        <p className="text-neutral-dark text-xs">waystar.atlassian.net</p>
      </div>
    </div>
  );
};

export default SidebarProject;
