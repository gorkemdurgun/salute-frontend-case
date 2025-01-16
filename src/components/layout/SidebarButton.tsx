type Props = SidebarMenuItem & {
  active?: boolean;
  onClick?: () => void;
};

const SidebarButton: React.FC<Props> = ({ icon, title, active, onClick }) => {
  const Icon = icon;

  const defaultClasses =
    'relative flex items-center w-full py-2 px-4 text-md text-neutral-dark rounded-md transition-colors duration-200';

  return (
    <button
      className={`${defaultClasses} ${active ? 'bg-primary/20 text-primary' : 'hover:bg-neutral-light'}`}
      onClick={onClick}
    >
      {active && (
        <div className="absolute left-0 h-1/2 w-1 rounded-r-md bg-primary" />
      )}
      {<Icon className="h-5 w-5" />}
      <span className="ml-4">{title}</span>
    </button>
  );
};

export default SidebarButton;
