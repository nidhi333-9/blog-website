import React from "react";

function Subscribe() {
  return (
    <div className="bg-red-600 flex flex-col items-center justify-center font-Quantico p-3 md:p-23 md:py-24">
      <h1 className="text-white text-3xl py-5">
        Subscribe to Thrusday Newsletter
      </h1>
      <p className="text-white text-xl">
        I started this newsletter with a mission to share my learning with
        readers and challenge myself to be better than yesterday.
      </p>
      <div className="flex flex-col py-5">
        <label htmlFor="text"></label>
        <input
          type="text"
          className="border-none bg-red-600 active:border-none border-t-teal-400 my-10"
          placeholder="name"
        />
        <label htmlFor="text"></label>
        <input
          type="email"
          className="border-none bg-red-600 active:border-none border-t-teal-400 my-10"
          placeholder="email"
        />
      </div>
    </div>
  );
}

export default Subscribe;
