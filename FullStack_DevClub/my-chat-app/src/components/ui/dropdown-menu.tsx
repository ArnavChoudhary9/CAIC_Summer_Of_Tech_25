"use client";

import * as React from "react";

export interface DropdownMenuProps {
  children: React.ReactNode;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  return <div className="relative inline-block">{children}</div>;
}

export function DropdownMenuTrigger({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function DropdownMenuContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      {children}
    </div>
  );
}

export function DropdownMenuRadioGroup({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function DropdownMenuRadioItem({ children, value, className, ...props }: any) {
  return (
    <div
      className={
        "flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 " + (className || "")
      }
      data-value={value}
      {...props}
    >
      {children}
    </div>
  );
}
