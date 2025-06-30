import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import Image from "next/image";
import { Badge } from "./Badge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  fuelType: "Electro" | "Hybrid" | "Gasoline";
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
      <div
        ref={ref}
        className={cn(
          "max-w-sm md:max-w-md bg-white rounded-xl shadow-sm hover:shadow-xl hover:transition-all transform  duration-400 ease-in-out hover:scale-102 p-8",
          className
        )}
        {...props}
      >
        <Badge className="mb-6">{fuelType}</Badge>

        <Image
          width={600}
          height={100}
          src={carImage}
          alt={modelName}
          className="w-82 h-24 object-cover"
        />

        <div className="mt-10 mb-10">
          <h3 className="text-3xl font-semibold mb-1">{modelName}</h3>
          <p className="text-sm text-gray-500 mb-5 mt-4">{description}</p>
          <p className="text-2xl mb-2 font-bold">{acceleration} s</p>
          <p className="text-gray-500 text-sm mb-4">
            Acceleration 0 - 100 km/h with Sport Chrono Package
          </p>
          <p className=" text-2xl mb-2 font-bold">{power}</p>
          <p className="text-gray-500 text-sm mb-4">Power (kW) / Power (PS)</p>
          <p className=" text-2xl mb-2 font-bold">{topSpd} km/h</p>
          <p className="text-gray-500 text-sm mb-4">Top speed</p>
        </div>
        <Button variant="primary" className="text-lg" size="lg">
          Select model
        </Button>
      </div>
    );
  }
);

Card.displayName = "Card";
