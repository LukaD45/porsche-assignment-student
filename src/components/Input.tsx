import * as React from "react";

import { cn } from "@/lib/utils";

/*
  Input komponenta
    Custom Input komponenta dizajnirana za upotrebu u formama i drugim korisničkim sučeljima. Bazirana je na HTML <input> elementu, s unaprijed definiranim stilovima i mogućnošću dodatnog prilagođavanja putem Tailwind klasa.

    Značajke
      Jednostavan i čist dizajn
      - TailwindCSS stilovi s fokus prstenom
      - Prilagodljiva putem className propa
      - Kompatibilna s raznim type vrijednostima (text, email, password...)

    Instalacija
      Ova komponenta koristi cn pomoćnu funkciju

      NAPOMENA:
       Ova komponenta pretpostavlja da se koristi TailwindCSS.
  
        Ako ne postoji u projektu:
        --> npm install tailwindcss
    
    Korištenje
      import { Input } from "@/components/Input";

      export default function Page() {
        return (
          <Input
            type="text"
            placeholder="Enter your name"
            className="border-gray-300 focus-visible:ring-blue-500"
          />
        );
      }
*/

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
