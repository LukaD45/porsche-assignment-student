"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SelectOption = {
  label: string;
  value: string;
};

interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Odaberite vrstu motora",
  value,
  onChange,
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div className={cn("relative inline-block w-64", className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "w-full bg-white border border-gray-300 text-left px-4 py-2 rounded-md shadow-sm",
          "hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500",
          "transition duration-200"
        )}
      >
        {selectedLabel || placeholder}
      </button>

      {open && (
        <ul
          className={cn(
            "absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md",
            "transition-all animate-fade-in"
          )}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={cn(
                "px-4 py-2 cursor-pointer hover:bg-gray-100",
                option.value === value && "bg-gray-100 font-medium"
              )}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
