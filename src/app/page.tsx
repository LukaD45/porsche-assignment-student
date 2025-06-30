import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-10">
      {/*
      <Button variant="primary" size="lg">
        Hello
      </Button>
      <Button variant="secondary" size="lg">
        Hello
      </Button>
      <Button variant="disabled" size="lg">
        Hello
      </Button>*/}

      <Card
        fuelType="Gasoline"
        carImage="/911-carrera.avif"
        modelName="911 Carrera "
        description="Fuel consumption combined (model range): 10.6 - 10.1l/100 km, CO2-emissions combined (model range): 240 - 229g/km"
        acceleration={2.9}
        power="290 kW / 394 PS"
        topSpd={294}
      ></Card>
    </div>
  );
}
