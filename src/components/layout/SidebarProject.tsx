import { svg } from '@/assets/images/svg';
import ImageBox from '../common/ImageBox';

const SidebarProject = () => {
  return (
    <div className="flex items-center gap-3 p-4">
      <ImageBox
        alt="Project Logo"
        src={svg.ProjectLogo}
        className="h-8 w-8 rounded-md bg-warning"
      />
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-neutral-dark">
          Waystar Project
        </h3>
        <p className="text-xs text-neutral-dark">waystar.atlassian.net</p>
      </div>
    </div>
  );
};

export default SidebarProject;
