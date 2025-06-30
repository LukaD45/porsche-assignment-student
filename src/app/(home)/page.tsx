"use client";

import { useState } from "react";

import { cars } from "../../../constants";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";

export default function ShowcasePage() {
  const [fuelType, setFuelType] = useState<string>("");

  const filteredCars = fuelType
    ? cars.filter((car) => car.fuelType === fuelType)
    : cars;

  return (
    <div>
      <main className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 sm:py-16 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
          Model overview
        </h1>

        <div className="mb-10 mr-5 pl-5 flex justify-start items-start md:justify-end md:items-end flex-col">
          <label className="block  mb-2 text-sm  font-medium text-gray-700">
            Sort by engine type:
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

        <Button
          className="flex mx-auto mt-10 px-20"
          size="lg"
          onClick={() => {}}
        >
          Add Model
        </Button>

        <div className="mt-20 max-w-md mx-auto w-full">
          <Input placeholder="Unesi e-mail adresu" />
        </div>
      </main>
    </div>
  );
}
