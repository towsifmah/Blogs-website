import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
  const [ismenuOpen, setismenuOpen] = useState(false);
  const [isopenModal , setIsopenModal ]= useState(false);
  // Navitems======
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/service", link: "Service" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  // ====Modal Details======
  const handleopenModal = () =>{
    setIsopenModal(true)
  }

  const handlecloseModal = () =>{
    setIsopenModal(false)
  }
  return (
    <header className="bg-black text-white fixed left-0 right-0 top-0 z-50">
      <nav className="container mx-auto py-4 max-w-7xl flex items-center justify-between">
        <a href="/" className="text-xl font-bold font-poppins text-white">
          Hedia<span className="text-green-500 text-2xl">MH</span>
        </a>
        {/* =====NavItem for lg device======== */}
        <ul className="md:flex items-center gap-x-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white font-poppins" key={path}>
              <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
        {/* menu icon */}
        <div className="text-white lg:flex items-center gap-4 hidden">
          <a href="" className="hover:text-green-500 duration-300">
            <FaFacebook />
          </a>
          <a href="" className="hover:text-green-500 duration-300">
            <FaDribbble />
          </a>
          <a href="" className="hover:text-green-500 duration-300">
            <FaTwitter />
          </a>
          <button onClick={handleopenModal} className="text-white bg-green-500 px-6 py-2 font-medium font-poppins rounded hover:text-green-500 hover:bg-white transition-all duration-300">
            Login
          </button>
        </div>

        {/* Our Modal Component is here */}
        <Modal isOpen={isopenModal} onClose={handlecloseModal}/> 

        {/* Mobile Device menu screen*/}
        <div className="md:hidden">
          <button
            onClick={() => setismenuOpen(!ismenuOpen)}
            className="cursor-pointer hover:text-green-500 duration-300"
          >
            {ismenuOpen ? <FaXmark  className="w-5 h-5"/> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {/* --------only for mobile device */}
      <ul className={`md:hidden items-center gap-x-12 text-lg px-4 py-6 bg-white block space-y-3 ${ismenuOpen ?"fixed left-0 right-0 w-full transition-all ease-out duration-300" :"hidden"}`}>
          {navItems.map(({ path, link }) => (
            <li className="text-black font-poppins text-md" key={path}>
              <NavLink onClick={() => setismenuOpen(!ismenuOpen)} to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
    </header>
  );
};

export default Navbar;
