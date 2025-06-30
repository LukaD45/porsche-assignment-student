import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-block px-3 py-2 text-sm text-balck  rounded-sm font-medium",
  {
    variants: {
      variant: {
        electro: "bg-grey-100 ",
        gasoline: "bg-gray-100 ",
        hybrid: "bg-gray-100 ",
      },
    },
    defaultVariants: {
      variant: "gasoline",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
