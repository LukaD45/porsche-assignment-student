import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e12] text-white px-6 sm:px-10 lg:px-20 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        <div>
          <h1 className="text-xl font-bold">Current Region / Language</h1>
          <p className="text-md mt-5">International / English</p>
        </div>

        <div>
          <h1 className="text-xl font-bold">Locations & Contacts</h1>
          <p className="text-md mt-3">Do you have any questions?</p>
          <Button
            variant="secondary"
            className="w-full sm:w-64 px-8 py-4 mt-5 text-lg rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            size="lg"
          >
            <a
              href="https://www.porsche.com/international/locations-and-contact/"
              target="_blank"
            >
              Get in touch
            </a>
          </Button>
        </div>

        <div>
          <h1 className="text-xl font-bold">Social Media</h1>
          <p className="text-md mt-3">Get in touch with us via social media.</p>
        </div>
      </div>

      <div className="mb-16">
        <h1 className="text-xl font-bold">Company</h1>
        <ul className="mt-5 space-y-2">
          <li className="text-md hover:underline">
            <Link href="#">Investor relations</Link>
          </li>
          <li className="text-md hover:underline">
            <Link href="#">Compliance</Link>
          </li>
        </ul>
      </div>

      <hr className="border-gray-700" />

      <div className="mt-10 space-y-4 text-sm leading-relaxed">
        <p>
          * If the values are given as ranges, these do not relate to a single,
          individual vehicle and do not constitute part of the offer. They are
          intended solely as a means of comparing different vehicle models and
          refer to the product portfolio that is available on the German market.
          Extra features and accessories (attachments, tyre formats etc.) can
          change relevant vehicle parameters such as weight, rolling resistance
          and aerodynamics and, in addition to weather and traffic conditions,
          as well as individual handling, can affect the fuel consumption,
          energy consumption, CO₂ emissions, range and performance values of a
          car.
        </p>
        <p>
          ** Important information about the all-electric Porsche models can be
          found{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://www.porsche.com/international/accessoriesandservice/porscheservice/vehicleinformation/bev/"
          >
            here.
          </Link>
        </p>
      </div>

      <div className="mt-20 mb-10 grid place-items-center">
        <Link href="https://www.porsche.com/international/">
          <Image
            width={250}
            height={300}
            src="/logo-white.png"
            alt="Porsche logo"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
