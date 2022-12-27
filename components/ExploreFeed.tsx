import React from "react";
import Productivity from "../public/productivity.svg";
import Life from "../public/life.svg";
import Work from "../public/work.svg";
import Book from "../public/books.svg";
import Explore from "../public/explore.svg";
import Image from "next/image";

function ExploreFeed() {
  return (
    <div className="px-5 sm:px-20  md:pt-24 md:mx-44">
      <Image
        src={Explore}
        width={150}
        height={100}
        alt="explore"
        className="pb-10"
      ></Image>
      <div className="flex flex-col items-center p-3">
        <div className="grid  grid-cols-1 gap-x-14 sm:grid-cols-2">
          <div className="card">
            <Image
              src={Productivity}
              width={100}
              height={100}
              alt="Productivity"
            ></Image>
            <h3 className="font-bold text-xl font-Quantico">Productivity</h3>
            <p className="font-Quantico text-base text-gray-500 text-center">
              My understanding of various productive method which I have tried.
            </p>
          </div>
          <div className="card">
            <Image
              src={Life}
              width={100}
              height={100}
              alt="Productivity"
            ></Image>
            <h3 className="font-bold text-xl font-Quantico">Life</h3>
            <p className="font-Quantico text-base text-gray-500 text-center">
              My understanding of various productive method which I have tried.
            </p>
          </div>
          <div className="card">
            <Image
              src={Book}
              width={100}
              height={100}
              alt="Productivity"
            ></Image>
            <h3 className="font-bold text-xl font-Quantico">Book</h3>
            <p className="font-Quantico text-base text-gray-500 text-center">
              My understanding of various productive method which I have tried.
            </p>
          </div>
          <div className="card">
            <Image
              src={Work}
              width={100}
              height={100}
              alt="Productivity"
            ></Image>
            <h3 className="font-bold text-xl font-Quantico">Work</h3>
            <p className="font-Quantico text-base text-gray-500 text-center">
              My understanding of various productive method which I have tried.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreFeed;
