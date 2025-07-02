import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import Image from "next/image";
import { Badge } from "./Badge";

/*
 Card komponenta
    Custom Card komponenta za prikaz modela automobila s osnovnim informacijama poput slike, tipa goriva, naziv modela, opisa, specifikacija i CTA gumba.

  Značajke
    - Prikaz slike automobila putem Next.js Image
    - Informacije o modelu: slika, naziv modela, opis, akceleracija, snaga i maksimalna brzina
    - Prikaz tipa goriva pomoću custom Badge komponente
    - CTA gumb (custom Button komponenta)
    - Animacija prilikom hovera
    - Responzivan dizajn

    Instalacija
      Ova komponenta koristi:
      - Next.js Image
      - Pomoćnu 'cn' funkciju za spajanje klasa
      - Custom komponente: Badge i Button

      NAPOMENA:
        komponenta pretpostavlja da se koristi TailwindCSS
        komponenta koristi pomoćnu funkciju cn za spajanje klasa i ona se nalazi u @/lib/utils
  
        Ako ne postoji u projektu:
        --> npm install tailwindcss
        
    
    Korištenje

      import { Card } from "@/components/Card";

      export default function Page() {
        return (
          <Card
            fuelType="Hybrid"
            carImage="/cars/taycan.png"
            modelName="Porsche Taycan"
            description="A sleek and powerful electric vehicle designed for both performance and comfort."
            acceleration={3.5}
            power="500 kW / 680 PS"
            topSpd={250}
          />
        );
      }
 */

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  fuelType: string;
  carImage: string;
  modelName: string;
  description: string;
  acceleration: number;
  power: string;
  topSpd: number;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      fuelType,
      carImage,
      modelName,
      description,
      acceleration,
      power,
      topSpd,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="hover:cursor-pointer">
        <div
          ref={ref}
          className={cn(
            "min-w-[280px] max-w-[750px] w-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-102 p-6 sm:p-8",
            className
          )}
          {...props}
        >
          <Badge className="mb-4 sm:mb-6">{fuelType}</Badge>

          <div className="relative w-full aspect-[3/1] mb-6">
            <Image
              src={carImage}
              alt={modelName}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-1">
              {modelName}
            </h3>
            <p className="text-sm h-20 md:pr-5 text-card-text my-4">
              {description}
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-xl font-bold">{acceleration} s</p>
                <p className="text-card-text text-sm">
                  Acceleration 0 - 100 km/h with Sport Chrono Package
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">{power}</p>
                <p className="text-card-text text-sm">
                  Power (kW) / Power (PS)
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">{topSpd} km/h</p>
                <p className="text-card-text text-sm">Top speed</p>
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            className="w-full text-base sm:text-lg"
            size="lg"
            onClick={() => {}}
          >
            Select model
          </Button>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
