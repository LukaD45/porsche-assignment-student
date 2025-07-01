"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

/*
  Select komponenta
    Custom Select komponenta izgrađena u Reactu, namijenjena zamjeni klasičnog HTML <select> elementa s većom kontrolom nad izgledom i ponašanjem.
  
  Značajke
    Prikaz trenutnog odabira i padajuće liste opcija
    - Interaktivna animacija otvaranja i zatvaranja s ikonom
    - onChange callback za upravljanje stanjem
    - Kontrolirana komponenta (value i onChange su obavezni)

  Instalacija
    Ova komponenta koristi:
    - cn pomoćnu funkciju
    - lucide-react paket ikona

      NAPOMENA:
       Ova komponenta pretpostavlja da se koristi TailwindCSS.
       Provjeri da su te komponente dostupne i pravilno uvezene.
  
        Ako ne postoji u projektu:
        --> npm install tailwindcss
        --> npm install lucide-react
  
  Korištenje
    import { Select } from "@/components/Select";

     const [fuelType, setFuelType] = useState<string>("");

     <Select
        <Select
              options={[
                { label: "All", value: "" },
                { label: "Electro", value: "Electro" },
                { label: "Hybrid", value: "Hybrid" },
                { label: "Gasoline", value: "Gasoline" },
              ]}
              value={fuelType}
              onChange={setFuelType}
            />
*/

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

export const Select = ({
  options,
  placeholder = "",
  value,
  onChange,
  className,
}: SelectProps) => {
  const [open, setOpen] = React.useState(false);
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div className={cn("relative inline-block text-sm  w-30", className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "w-30 bg-white border border-gray-300 text-left px-2 py-0.5 flex items-center  rounded-md shadow-sm",
          "hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus-visible:ring-blue-500",
          "transition duration-200 flex justify-between"
        )}
      >
        {selectedLabel || placeholder}
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>

      {open && (
        <>
          <ul
            className={cn(
              "absolute z-10 mt-0.5 w-30 bg-white border border-gray-300 rounded-md shadow-md"
            )}
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={cn(
                  "px-2 py-0.5 cursor-pointer hover:bg-gray-100",
                  option.value === value && "bg-gray-100 "
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
        </>
      )}
    </div>
  );
};
