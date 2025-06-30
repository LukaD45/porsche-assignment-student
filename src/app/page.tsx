import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Hello
      </Button>
      <Button variant="secondary" size="lg">
        Hello
      </Button>
      <Button variant="disabled" size="lg">
        Hello
      </Button>

      <Card
        fuelType="Gasoline"
        carImage="/911-carrera.avif"
        modelName="911 Carrera 4S"
        description="An efficient beast An efficient beast An efficient beast An efficient beast An efficient beast"
        acceleration={2.9}
        power="290 kW / 394 PS"
        topSpd={294}
      ></Card>
    </div>
  );
}
