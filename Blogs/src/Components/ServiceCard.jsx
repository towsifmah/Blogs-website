import React from "react";
import { FaAutoprefixer, FaCss3 } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";
import { PiBoundingBoxDuotone } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";

const serviceItem = [
  {
    id: 1,
    icon: <FaAutoprefixer />,
    title: "Refreshing Design",
    description:
      "We dejoy working with discerning clients, people for whome qulity, service, integrity, aesthetics",
  },
  {
    id: 2,
    icon: <FaCss3 />,
    title: "Based on Tailwind CSS",
    description:
      "We dejoy working with discerning clients, people for whome qulity, service, integrity, aesthetics",
  },
  {
    id: 3,
    icon: <IoLogoWebComponent />,
    title: "300 + Compontents",
    description:
      "We dejoy working with discerning clients, people for whome qulity, service, integrity, aesthetics",
  },
  {
    id: 4,
    icon: <HiComputerDesktop />,
    title: "Speen Optimized",
    description:
      "We dejoy working with discerning clients, people for whome qulity, service, integrity, aesthetics",
  },
  {
    id: 5,
    icon: <PiBoundingBoxDuotone />,
    title: "Fully Customizable",
    description:
      "We dejoy working with discerning clients, people for whome qulity, service, integrity, aesthetics",
  },
  {
    id: 6,
    icon: <AiOutlineLike />,
    title: "Regular Updates",
    description:
      "We dejoy working with discerning clients, people for whome qulity, service, integrity, aesthetics",
  },
];
const ServiceCard = () => {
  return (
    <div>
      <div className="text-center pt-10">
        <h5 className="font-poppins font-semibold text-sm text-green-500">
          Our Service
        </h5>
        <h2 className="font-poppins font-semibold text-4xl text-black">
          What we offer
        </h2>
        <p className="w-1/3 mx-auto font-poppins text-sm font-normal text-gray-800">
          There are many variations of passage of Lorem ipsum dolor sit, amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 py-8">
          {serviceItem.map((servicecard) => (
            <div
              key={servicecard.id}
              className="bg-white rounded-lg p-4 shadow-md transform transition-transform duration-200 hover:scale-105"
            >
              <div>
                <p className="text-4xl text-green-500">{servicecard.icon}</p>
              </div>
              <h2 className="font-poppins text-2xl font-bold text-gray-900 my-2">
                {servicecard.title}
              </h2>
              <p className="font-poppins text-base font-normal text-gray-900">
                {servicecard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
