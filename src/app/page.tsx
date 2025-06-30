import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Hello
      </Button>
      <Button variant="secondary" size="sm">
        Hello
      </Button>
      <Button variant="disabled" size="lg">
        Hello
      </Button>
    </div>
  );
}
