import React from "react";
import { FaFacebook, FaInstagram, FaMedium, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="px-4 pt-16 pb-5 container md:px-24 lg:px-4">
          <div className="grid grid-cols-2 gap-5 lg:col-span-5 md:grid-cols-6 pb-4">
            <div>
              <p className="font-poppins font-medium -tracking-wide text-gray-400">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    World
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Games
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    References
                  </Link>
                </li>
              </ul>
            </div>
            {/* 2nd category */}
            <div>
              <p className="font-poppins font-medium -tracking-wide text-gray-400">
                Apples
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Web
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            {/* 3rd category */}
            <div>
              <p className="font-poppins font-medium -tracking-wide text-gray-400">
                Cherry
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Brochure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Nonprofit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
             {/* 4th category */}
             <div>
              <p className="font-poppins font-medium -tracking-wide text-gray-400">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Infopreneur
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Personal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Forum
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Wiki
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-gray-500 transition-colors duration-300 hover:text-green-500"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          {/* Subscribtion */}    
          <div className="lg:col-span-2">
              <p className="font-poppins font-medium -tracking-wide text-gray-400">
                Supscribe for update
              </p>
              <form className="mt-4 flex flex-col lg:flex-row">
                <input type="email" placeholder="Your Email" className="flex-grow w-full h-12 px-4 mb-3 transition duration-300 bg-gray-200 font-poppins font-medium text-gray-700 border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-green-400 focus:outline-none placeholder:font-poppins placeholder:font-medium placeholder:text-gray-700 "/>
                <button type="submit" className="inline-flex items-center justify-center h-12 px-2 font-medium font-poppins tracking-wide text-white transition duration-300 rounded shadow-md hover:bg-green-500 focus:outline-none border">Subscribe</button>
              </form>
              <p className="mt-4 text-sm font-poppins text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet sapiente, repellat inventore.porro repudiandae odit maiores blanditiis velit saepe!</p>
            </div>
          </div>

          <div className="text-center border-t border-t-gray-400 pt-4">
            <p className="font-poppins font-medium text-md text-gray-400">&copy; Copyright 2024 | All right resereved</p>
            <div className="flex items-center justify-center space-x-4 md:mt-4 mt-0">
                <Link to="" className="text-gray-500 transition-all duration-300 hover:text-green-500">
                <FaTwitter className="w-6 h-5"/>
                </Link>
                <Link to="" className="text-gray-500 transition-all duration-300 hover:text-green-500">
                <FaInstagram className="w-6 h-5"/>
                </Link>
                <Link to="" className="text-gray-500 transition-all duration-300 hover:text-green-500">
                <FaFacebook className="w-6 h-5"/>
                </Link>
                <Link to="" className="text-gray-500 transition-all duration-300 hover:text-green-500">
                <FaMedium className="w-6 h-5"/>
                </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
