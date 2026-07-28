export const Button = ({ className = "", size = "default", children, href, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-primary-foreground bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 no-underline";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <span className="flex items-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      <span className="flex items-center gap-4">
        {children}
      </span>
    </button>
  );
};