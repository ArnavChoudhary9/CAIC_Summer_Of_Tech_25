import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-200 text-gray-800 " +
        (className || "")
      }
      {...props}
    />
  );
}

export { Badge };
