"use client";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cars = [
  {
    fuelType: "Electro",
    carImage: "/taycan.avif",
    modelName: "Taycan",
    description:
      "(Performance battery) Eleotrio energy consumption oombined (model range): 19.1 - 16.7 kWh/100 km, Co2-emissions oombined (model range): 0 g/km",
    acceleration: 4.8,
    power: "300 kW / 408 PS",
    topSpd: 230,
  },
  {
    fuelType: "Gasoline",
    carImage: "/gt3-rs.avif",
    modelName: "911 GT3 RS",
    description:
      "Fuel consumption combined: 13.2 l/100 km (preliminary value), CO2-emissions combined (WLTP)*: 299 g/km (preliminary value), CO2 Class: G (preliminary value)",
    acceleration: 3.2,
    power: "386 kW / 525 PS",
    topSpd: 296,
  },
  {
    fuelType: "Gasoline",
    carImage: "/911-carrera-gts.avif",
    modelName: "911 Carrera GTS",
    description:
      "Fuel consumption combined (model range): 11.0 – 10.4 l/100 km, CO₂-emissions combined (model range): 248 – 236 g/km",
    acceleration: 3.0,
    power: "398 kW / 541 PS",
    topSpd: 312,
  },
  {
    fuelType: "Hybrid",
    carImage: "/panamera-4.avif",
    modelName: "Panamera 4",
    description:
      "Fuel consumption combined (model range): 11.0 – 10.2 l/100 km, CO₂-emissions combined (model range): 250 – 230 g/km",
    acceleration: 4.4,
    power: "260 kW / 353 PS",
    topSpd: 280,
  },
  {
    fuelType: "Gasoline",
    carImage: "/718-spyder-rs.avif",
    modelName: "718 Spyder RS",
    description:
      "Fuel consumption combined: 12.7 l/100 km (preliminary value), CO2-emissions combined (WLTP)*: 288 g/km (preliminary value), CO2 Class: G (preliminary value)",
    acceleration: 3.4,
    power: "368 kW / 500 PS",
    topSpd: 308,
  },
];

export default function ShowcasePage() {
  const [fuelType, setFuelType] = useState<string>("");

  const filteredCars = fuelType
    ? cars.filter((car) => car.fuelType === fuelType)
    : cars;

  return (
    <div>
      <nav className="flex justify-around items-center h-30">
        <Link
          className="p-2 flex rounded-sm hover:bg-gray-300 transition-colors duration-200"
          href="#"
        >
          <Menu className=" mr-2" />
          <p className="hidden sm:block">Menu</p>
        </Link>
        <Link
          className="hidden sm:block"
          href="https://www.porsche.com/international/"
        >
          <Image width={400} height={300} src="/logo.png" alt="Porsche logo" />
        </Link>

        <Link
          className="block sm:hidden"
          href="https://www.porsche.com/international/"
        >
          <Image
            width={30}
            height={300}
            src="/porsche-logo.svg"
            alt="Porsche logo"
          />
        </Link>
        <Button variant="secondary" size="sm">
          <Link href="https://www.porsche.com/international/locations-and-contact/">
            Contact
          </Link>
        </Button>
      </nav>
      <main className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
          Model Showcase
        </h1>

        <div className="mb-10 max-w-md mx-auto w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Odaberite vrstu motora:
          </label>
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
        </div>

        <div className="grid pl-5 pr-5 gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-3 justify-items-center">
          {filteredCars.map((car, index) => (
            <Card key={index} {...car} />
          ))}
        </div>

        <div className="mt-20 max-w-md mx-auto w-full">
          <Input placeholder="Unesi e-mail adresu" />
        </div>
      </main>
    </div>
  );
}
