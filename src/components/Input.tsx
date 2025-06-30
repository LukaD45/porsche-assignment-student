import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      className={cn(
        "h-10 w-84 min-w-0 rounded-xl border bg-transparent px-5 outline-none  md:text-sm focus-visible:ring-[2px]",
        className
      )}
      {...props}
    />
  );
};
