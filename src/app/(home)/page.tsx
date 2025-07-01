"use client";

import { useState } from "react";

import { cars } from "../../../constants";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Select } from "@/components/Select";
import { Input } from "@/components/Input";

export default function ShowcasePage() {
  const [fuelType, setFuelType] = useState<string>("");

  const filteredCars = fuelType
    ? cars.filter((car) => car.fuelType === fuelType)
    : cars;

  return (
    <div>
      <main className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 sm:py-8">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-10">
          Model overview
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-6 mb-10 px-5 sm:px-0">
          <div className="md:col-start-2 3xl:col-start-3 md:justify-self-end">
            <label className="block mb-2 text-sm font-medium text-gray-700">
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
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 px-5 sm:px-0 justify-items-center">
          {filteredCars.map((car, index) => (
            <Card key={index} {...car} />
          ))}
        </div>

        <Button
          className="block mx-auto mt-10 px-20"
          size="lg"
          onClick={() => {}}
        >
          Add Model
        </Button>
      </main>
      <section className="bg-white grid place-items-center px-4 py-16">
        <div className="grid gap-6 text-center max-w-xl w-full">
          <h1 className="text-3xl sm:text-5xl font-medium uppercase">
            Join us on our ride!
          </h1>
          <p className="text-lg sm:text-xl">
            To receive news, enter your email
          </p>
          <Input
            type="email"
            className="max-w-sm block mx-auto"
            placeholder="ivan.peric@gmail.com"
          />
        </div>
      </section>
    </div>
  );
}
