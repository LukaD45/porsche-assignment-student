import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 sm:px-6 lg:px-20 py-12 sm:py-16 ">
      <div className="mb-10">
        <h1 className="text-xl font-bold">Current Region / Language</h1>
        <p className="text-md mt-5">International / English</p>
      </div>
      <div className="mb-10 flex flex-col sm:flex-row">
        <div>
          <h1 className="text-xl font-bold">Locations & Contacts</h1>
          <p className="text-md mt-3 mb-10">Do you have any quesions?</p>
          <Button
            variant="secondary"
            className="px-24 py-4 text-lg rounded-md"
            size="lg"
          >
            Get in touch
          </Button>
        </div>
        <div className="sm:mx-10 mx-0 mt-10 sm:mt-0">
          <h1 className="text-xl font-bold">Social Media</h1>
          <p className="text-md mt-3 mb-10">
            Get in touch with us via social media.
          </p>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-xl font-bold">Company</h1>

        <p className="text-md mt-5">Investor relations</p>
        <p className="text-md mt-2">Compliance</p>
      </div>
      <hr />

      <p className="mt-10 text-md">
        * If the values are given as ranges, these do not relate to a single,
        individual vehicle and do not constitute part of the offer. They are
        intended solely as a means of comparing different vehicle models and
        refer to the product portfolio that is available on the German market.
        Extra features and accessories (attachments, tyre formats etc.) can
        change relevant vehicle parameters such as weight, rolling resistance
        and aerodynamics and, in addition to weather and traffic conditions, as
        well as individual handling, can affect the fuel consumption, energy
        consumption, CO₂ emissions, range and performance values of a car.
      </p>
      <p className="mt-4 text-md">
        ** Important information about the all-electric Porsche models can be
        found{" "}
        <Link
          className="underline"
          target="_blank"
          href="https://www.porsche.com/international/accessoriesandservice/porscheservice/vehicleinformation/bev/"
        >
          here
        </Link>
        .
      </p>
      <Image
        className="flex mx-auto mt-20 mb-20"
        width={250}
        height={300}
        src="/logo-white.jpg"
        alt="Porsche logo"
      />
    </footer>
  );
};

export default Footer;
