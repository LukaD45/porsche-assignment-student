import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm transition duration-250",
  {
    variants: {
      variant: {
        primary:
          "bg-[#010205] border-2 border-solid border-[#010205] text-white hover:opacity-70   ",
        secondary:
          "bg-transparent text-black border-solid border-2 border-[#010205]  hover:bg-[#010205] hover:text-white focus:ring-black",
        disabled: "bg-gray-200 text-gray-500 cursor-not-allowed",
      },
      size: {
        sm: "text-sm px-3 py-1",
        lg: "text-base px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
