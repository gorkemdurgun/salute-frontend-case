import { svg } from '@/assets/images/svg';
import ImageBox from '../common/ImageBox';
import HeaderDropdown from './HeaderDropdown';

import { CgMenuGridR as DashboardIcon } from 'react-icons/cg';
import {
  FaRocket as RocketIcon,
  FaQuestionCircle as QuestionIcon,
} from 'react-icons/fa';
import { BsGearWide as SettingsIcon } from 'react-icons/bs';

import { headerMenuDropdownItems } from '@/constants/menu';
import Button from '../common/Button';
import SearchBox from '../input/SearchBox';
import Avatar from '../common/Avatar';

const Header = () => {
  return (
    <header className="flex h-[60px] items-center justify-between border-b bg-white p-4">
      <div className="flex items-center space-x-6">
        {/* Icon */}
        <DashboardIcon className="h-6 w-6 text-neutral-dark" />
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <ImageBox alt="Jira" src={svg.JiraLogo} className="h-6 w-6" />
          <h1 className="text-2xl font-[300] text-neutral-dark">Jira</h1>
        </div>
        {/* Dropdowns */}
        <div className="flex items-center space-x-1">
          {headerMenuDropdownItems.map((item, index) => (
            <HeaderDropdown
              key={index}
              title={item.title}
              items={item.items}
              disabled={item.disabled}
            />
          ))}
          <Button className="!ml-4 bg-primary text-sm text-white">
            Create
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SearchBox />
        <RocketIcon className="h-5 w-5 text-neutral-dark" />
        <QuestionIcon className="h-5 w-5 text-neutral-dark" />
        <SettingsIcon className="h-5 w-5 text-neutral-dark" />
        <Avatar alt="User" src={svg.UserAvatar} />
      </div>
    </header>
  );
};
export default Header;
