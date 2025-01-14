import {
  TbSTurnRight as RoadmapIcon,
  TbServer as BacklogIcon,
  TbTableDashed as BoardIcon,
  TbChartLine as ReportsIcon,
  TbCopy as IssuesIcon,
  TbCode as CodeIcon,
  TbLock as SecurityIcon,
  TbShip as DeployIcon,
  TbSettings as SettingsIcon,
} from "react-icons/tb";

export const headerMenuDropdownItems: HeaderMenuDropdown[] = [
  {
    title: "Your Work",
    items: [
      {
        title: "Projects",
        href: "/projects",
      },
      {
        title: "Tasks",
        href: "/tasks",
      },
      {
        title: "Issues",
        href: "/issues",
      },
      {
        title: "Reports",
        href: "/reports",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Create Project",
        href: "/projects/create",
      },
      {
        title: "View Projects",
        href: "/projects",
      },
    ],
  },
  {
    title: "Filter",
    items: [
      {
        title: "Filter Item 1",
        href: "/filter/1",
      },
      {
        title: "Filter Item 2",
        href: "/filter/2",
      },
    ],
  },
  {
    title: "Dashboards",
    items: [
      {
        title: "Dashboard Item 1",
        href: "/dashboard/1",
      },
      {
        title: "Dashboard Item 2",
        href: "/dashboard/2",
      },
    ],
  },
  {
    title: "Teams",
    items: [
      {
        title: "Team Item 1",
        href: "/team/1",
      },
      {
        title: "Team Item 2",
        href: "/team/2",
      },
    ],
  },
  {
    title: "Plans",
    items: [
      {
        title: "Plan Item 1",
        href: "/plan/1",
      },
      {
        disabled: true,
        title: "Plan Item 2",
        href: "/plan/2",
      },
    ],
  },
  {
    title: "Apps",
    disabled: true,
    items: [
      {
        title: "App Item 1",
        href: "/app/1",
      },
    ],
  },
];

export const sidebarMenuItems: SidebarMenu = [
  {
    category: "Planning",
    items: [
      {
        title: "Roadmaps",
        href: "/roadmaps",
        icon: RoadmapIcon,
      },
      {
        title: "Backlog",
        href: "/backlog",
        icon: BacklogIcon,
      },
      {
        title: "Boards",
        href: "/boards",
        icon: BoardIcon,
      },
      {
        title: "Reports",
        href: "/reports",
        icon: ReportsIcon,
      },
      {
        title: "Issues",
        href: "/issues",
        icon: IssuesIcon,
      },
    ],
  },
  {
    category: "Development",
    items: [
      {
        title: "Code",
        href: "/code",
        icon: CodeIcon,
      },
      {
        title: "Security",
        href: "/security",
        icon: SecurityIcon,
      },
      {
        title: "Deploy",
        href: "/deploy",
        icon: DeployIcon,
      },
    ],
  },
  {
    items: [
      {
        title: "Project settings",
        href: "/settings",
        icon: SettingsIcon,
      },
    ],
  },
];
