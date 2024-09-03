import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const aboutimg = "./src/assets/about.png";
const user1 = "./src/assets/user-01.png";
const user2 = "./src/assets/user-02.png";
const user3 = "./src/assets/user-03.png";
const user4 = "./src/assets/mahmud.png";
import { IoDocumentTextOutline } from "react-icons/io5";

const aurther = [
  {
    id: 1,
    image: user1,
    name: "Adrio Devid",
    position: "Director of Operations",
    publised: (
      <div className="flex items-center gap-x-2">
        <IoDocumentTextOutline /> 12 Article publised
      </div>
    ),
  },
  {
    id: 2,
    image: user2,
    name: "Rayna Mario",
    position: "Content Writer",
    publised: (
      <div className="flex items-center gap-x-2">
        <IoDocumentTextOutline /> 8 Article publised
      </div>
    ),
  },
  {
    id: 3,
    image: user3,
    name: "Devid Tac",
    position: "Head of Marketing",
    publised: (
      <div className="flex items-center gap-x-2">
        <IoDocumentTextOutline /> 4 Article publised
      </div>
    ),
  },
  {
    id: 4,
    image: user4,
    name: "Mahmud Hasab",
    position: "Full Stack Developer",
    publised: (
      <div className="flex items-center gap-x-2">
        <IoDocumentTextOutline /> 5 Article publised
      </div>
    ),
  },
];
const AboutContent = () => {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 py-10">
        <div>
          <img
            className="object-cover bg-cover bg-no-repeat w-full"
            src={aboutimg}
            alt=""
          />
        </div>
        <div className="mt-9">
          <h3 className="font-poppins font-semibold text-base text-green-500">
            Who We are
          </h3>
          <h2 className="w-4/5 font-poppins font-semibold text-4xl text-gray-900">
            We provide high quality Aritals & Blogs
          </h2>
          <div className="font-poppins font-normal text-sm text-gray-500 mt-4">
            <p className="mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              architecto quos, nulla quia doloremque maiores inventore officiis
              voluptates enim autem accusantium sed a consequatur quisquam iure
              repudiandae ipsa necessitatibus est asperiores debitis deleniti?
              Nemo debitis labore repudiandae, voluptas quidem, sed illum nam
              delectus qui nulla tenetur eius beatae vero vel. Facere suscipit
              voluptas atque dolorem iusto quae, sunt maxime repellendus
              voluptate, non eius earum doloribus architecto rem itaque
              obcaecati ipsa voluptatum accusantium reiciendis tempora.
              Repudiandae mollitia eius excepturi minima itaque.
            </p>
          </div>
          <Link
            to="/"
            className="font-medium text-sm font-poppins py-2 px-6 bg-green-600 rounded hover:bg-white/90 hover:border hover:border-green-500 outline-none hover:text-green-500 duration-300 inline-flex items-center"
          >
            Learn more
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
      <div>
        <h3 className="font-poppins font-bold text-gray-900 text-4xl my-6">
          Top Authors
        </h3>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4 pb-6">
          {aurther.map((writer) => (
            <div
              key={writer.id}
              className="flex items-center justify-center flex-col bg-gray-300 p-6 rounded shadow-md transition duration-200 hover:scale-105 cursor-pointer"
            >
              <div>
                <img
                  className="w-20 h-20 rounded-full"
                  src={writer.image}
                  alt=""
                />
              </div>
              <h2 className="text-sm font-bold font-poppins text-black pt-1">
                {writer.name}
              </h2>
              <h4 className="font-normal text-base font-poppins text-black pt-2">
                {writer.position}
              </h4>
              <p className="font-normal text-md font-poppins text-black">
                {writer.publised}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
