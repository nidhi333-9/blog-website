import Image from "next/image";
import React, { lazy } from "react";
import Logo from "/public/logo.svg";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-center md:justify-between py-5 px-5 sm:px-20 md:mx-44">
        <div className="flex justify-center h-auto">
          <Image
            src={Logo}
            alt="logo"
            // height="auto"
            width={120}
            loading="lazy"
          ></Image>
        </div>
        <div>
          <ul className="hidden sm:flex items-center justify-between space-x-5 cursor-pointer font-Quantico">
            <li className="underline font-bold">Home</li>
            <li className="text-gray-500 hover:text-black hover:underline">
              Writing
            </li>
            <li className="text-gray-500 hover:text-black hover:underline">
              Work
            </li>
            <li className="text-gray-500 hover:text-black hover:underline">
              Book Club
            </li>
          </ul>
        </div>
      </nav>
      <div className="font-Quantico font-bold text-blue-800 p-5 sm:px-20 flex justify-center sm:justify-start md:mx-44">
        Learn, Create, Educate
      </div>
    </>
  );
}

export default Navbar;
