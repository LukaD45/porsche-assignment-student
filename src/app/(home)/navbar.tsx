import { Button } from "@/components/Button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
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
  );
};
