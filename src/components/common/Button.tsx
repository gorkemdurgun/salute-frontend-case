type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-md px-4 py-2 transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
