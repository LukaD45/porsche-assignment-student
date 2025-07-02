import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
  Button komponenta
    Custom React Button komponenta izrađena pomoću TailwindCSS i class-variance-authority (cva) za fleksibilno upravljanje stilovima.

  Značajke
    Podrška za više varijanti (primary, secondary, disabled)
    - Dvije veličine (sm, lg)
    - Prilagodljivo ponašanje i stil
    - Fokus stilovi za pristupačnost (accessibility)
    
  Intslacija
    Ova komponenta pretpostavlja da se koristi TailwindCSS i class-variance-authority.
  
    Ako ne postoje u projektu:
    --> npm install tailwindcss
    --> npm install class-variance-authority

    NAPOMENA:
      komponenta koristi pomoćnu funkciju cn za spajanje klasa i ona se nalazi u @/lib/utils

  Korištenje
    
  import { Button } from "@/components/Button";

  export default function Page() {
    return (
      <div className="space-x-2">
        <Button variant="primary" size="lg">Primary</Button>
        <Button variant="secondary" size="sm">Secondary</Button>
        <Button variant="disabled" disabled>Disabled</Button>
      </div>
    );
  }
    
  */

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm hover:cursor-pointer transition duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-button border-2 border-solid border-primary-button text-white hover:opacity-70   ",
        secondary:
          "bg-white text-black border-solid border-2 border-secondary-button hover:bg-secondary-button-hover ",
        disabled: "bg-disabled text-disabled-text cursor-not-allowed",
      },
      size: {
        sm: "text-sm px-3 py-1",
        lg: "text-base px-10 py-3",
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
