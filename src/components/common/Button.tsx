type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 bg-transparent text-white rounded-md transition-all ${className}`}>
      {children}
    </button>
  );
};

export default Button;
