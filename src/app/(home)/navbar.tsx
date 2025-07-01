import { Button } from "@/components/Button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 sm:grid-cols-4 items-center justify-items-center h-20 md:h-30 px-4 sm:px-8">
      <Link
        className="p-2 grid grid-cols-[auto_1fr] items-center gap-2 rounded-sm hover:bg-gray-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        href="#"
      >
        <Menu />
        <p className="hidden sm:block">Menu</p>
      </Link>

      <Link
        className="hidden sm:block col-span-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        href="#"
      >
        <Image width={400} height={300} src="/logo.svg" alt="Porsche logo" />
      </Link>

      <Link
        className="block sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        href="https://www.porsche.com/international/"
      >
        <Image
          width={30}
          height={300}
          src="/porsche-logo.svg"
          alt="Porsche logo"
        />
      </Link>

      <div className="col-span-1">
        <Button variant="secondary" size="sm">
          <Link
            href="https://www.porsche.com/international/locations-and-contact/"
            target="_blank"
          >
            Contact
          </Link>
        </Button>
      </div>
    </nav>
  );
};
