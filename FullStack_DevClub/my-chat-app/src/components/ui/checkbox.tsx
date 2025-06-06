"use client";

import * as React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      className={
        "h-4 w-4 rounded border border-gray-400 text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed " +
        (className || "")
      }
      ref={ref}
      {...props}
    />
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
