export default function Button({ children, variant = 'default', className, ...props }) {
  const baseStyles = "px-4 py-2 rounded-xl font-medium transition-all duration-300";
  
  const variants = {
    default: "bg-[#FF3C38] text-white hover:bg-[#FF3C38]/80",
    outline: "border-2 border-[#FF3C38] text-[#FF3C38] hover:bg-[#FF3C38]/10",
    ghost: "text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}