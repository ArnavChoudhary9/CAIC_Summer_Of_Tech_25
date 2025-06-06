import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={
        "inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 bg-white text-black border border-gray-300 " +
        "hover:bg-white hover:text-black hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.85),0_0_20px_6px_rgba(255,255,255,0.5)] " +
        "hover:saturate-200 hover:brightness-125 transition disabled:opacity-50 disabled:pointer-events-none " +
        (className || "")
      }
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button };
