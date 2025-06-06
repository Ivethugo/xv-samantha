type ButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
  w: string;
  border?: boolean;
  classNames?: string;
};

export function Button({
  onClick,
  children,
  w,
  border,
  classNames,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
      ${w}
      h-[40px]
      ${border && "border-1"} 
      ${border && "rounded-[10px]"} 
      ${border && "hover:border-2"} 
      ${border && "hover:bg-base-100"} 
      ${border && "hover:text-white-50"} 
      ${border && "active:border-gold/80"} 
      border-gold text-gold ${classNames}`}
    >
      {children}
    </button>
  );
}
