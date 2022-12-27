import Image from "next/image";
import React from "react";
import Aryan from "../public/aryan1.svg";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

function Hero() {
  return (
    <div className="px-5 py-10 sm:py-28 flex flex-col sm:space-x-7 items-center sm:px-20 sm:flex-row md:mx-44">
      <div className="relative flex flex-row">
        <div className="h-auto">
          <Image
            src={Aryan}
            alt="writer"
            // height="auto"
            width={700}
            loading="lazy"
          ></Image>
        </div>

        <div className="absolute right-7 top-16 py-4 sm:hidden flex flex-col items-center">
          <AiFillTwitterCircle className="text-4xl text-blue-500 cursor-pointer" />
          <AiFillLinkedin className="text-4xl text-blue-900 cursor-pointer" />
          <AiFillInstagram className="text-4xl text-pink-500 cursor-pointer" />
        </div>
      </div>

      <div className="my-5">
        <p className=" font-Quantico text-base md:text-xl  text-justif">
          I like to explore new areas of life and share my experience with
          others through my articles.
        </p>
        <div className="flex flex-col sm:flex-row py-5 sm:space-x-5">
          <button className="bg-blue-800 text-white my-1 py-1 px-3 font-semibold text-xl hover:cursor-pointer rounded-lg space-x-3">
            My Articles
          </button>
          <button className="bg-blue-200 text-blue-800 my-1 font-semibold text-xl hover:cursor-pointer px-3 py-1 rounded-lg space-x-3">
            More About Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
