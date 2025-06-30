import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import Image from "next/image";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  fuelType: "Electro" | "Hybrid" | "Gasoline";
  carImage: string;
  modelName: string;
  description: string;
  acceleration: number;
  accDesc: string;
  power: string;
  powerDesc: string;
  topSpd: number;
  topSpdDesc: string;
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
      <div
        ref={ref}
        className={cn(
          "max-w-sm bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg hover:tranistion-shadow transform transition-transform duration-400 ease-in-out hover:scale-102 ",
          className
        )}
        {...props}
      >
        <p>{fuelType}</p>
        <Image
          width={600}
          height={100}
          src={carImage}
          alt={modelName}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{modelName}</h3>
          <p className="text-xs text-gray-700 mb-5 mt-4">{description}</p>
          <p className="mb-0 text-xl font-bold">{acceleration} s</p>
          <p className="text-gray-700 mb-4">
            Acceleration 0 - 100 km/h with Sport Chrono Package
          </p>
          <p className="mb-0 text-xl font-bold">{power}</p>
          <p className="text-gray-700 mb-4">Power (kW) / Power (PS)</p>
          <p className="mb-0 text-xl font-bold">{topSpd} km/h</p>
          <p className="text-gray-700 mb-4">Top speed</p>

          <Button variant="primary" size="lg">
            Select model
          </Button>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
