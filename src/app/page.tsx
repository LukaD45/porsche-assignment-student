import { Card } from "@/components/Card";
import { Input } from "@/components/Input";

const cars = [
  {
    fuelType: "Electro",
    carImage: "/porsche.jpg",
    modelName: "Porsche Taycan",
    description:
      "An electric sports car with impressive performance and range.",
    acceleration: 2.8,
    power: "560 kW",
    topSpd: 260,
  },
  {
    fuelType: "Hybrid",
    carImage: "/911-carrera.avif",
    modelName: "Panamera 4 E-Hybrid",
    description:
      "A luxurious plug-in hybrid sedan that combines power and efficiency.",
    acceleration: 4.4,
    power: "340 kW",
    topSpd: 280,
  },
  {
    fuelType: "Gasoline",
    carImage: "/porsche.jpg",
    modelName: "911 Carrera GTS",
    description: "The iconic 911 with raw performance and timeless design.",
    acceleration: 3.3,
    power: "353 kW / 420 PS",
    topSpd: 312,
  },
];

export default function ShowcasePage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12">Model Showcase</h1>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center">
        {cars.map((car, index) => (
          <Card key={index} {...car} />
        ))}
      </div>
      <Input className="mt-20" placeholder="Unesi e-mail adresu" />
    </main>
  );
}
