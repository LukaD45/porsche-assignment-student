import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
  Badge komponenta
    Custom React komponenta za prikaz badge-ova, izrađena pomoću TailwindCSS i class-variance-authority za varijantne stilove.

  Značajke
    - podrška za više varijanti (electro, gasoline, hybrid)
    - upravljanje klasama pomoću cva
    - proširiva i prilagodljiva

  Instalacija
    Ova komponenta pretpostavlja da se koristi TailwindCSS i class-variance-authority.
    
    Ako ne postoje u projektu:
    --> npm install tailwindcss
    --> npm install class-variance-authority

  NAPOMENA:
    komponenta koristi pomoćnu funkciju cn za spajanje klasa i ona se nalazi u @/lib/utils
  
  Korištenje

    import { Badge } from "@/components/Badge";

    export default function Page() {
      return (
        <div>
          <Badge variant="electro">Električno</Badge>
        </div>
      );
    }
  */

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
