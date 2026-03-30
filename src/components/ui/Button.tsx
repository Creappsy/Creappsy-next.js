import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const variants = {
      primary:
        "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:opacity-90",
      secondary:
        "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700",
      ghost: "text-slate-400 hover:text-white hover:bg-slate-800/50",
      outline:
        "border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white bg-transparent",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-8 py-4 text-lg",
      icon: "w-10 h-10 p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
