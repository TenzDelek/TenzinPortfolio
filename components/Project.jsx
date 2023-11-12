"use client";
import React from "react";

export default function Index({ index, title, setModal,linko}) {
  return (
    <a href={linko} target="_blank">
    <div
      className=" lg:w-[800px]  lg:flex flex-col lg:items-center lg:justify-center
   "
    >
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className=" lg:group flex w-full justify-between items-center  pt-12 pl-24 pb-12 pr-24 gap-1 lg:gap-0  border-t-[1px] border-t-[#EDEDEC] cursor-pointer transition-all duration-[0.2s] hover:opacity-50"
      >
        <h2 className=" lg:text-3xl  m-0 font-bold transition-all duration-[0.4s] lg:group-hover:translate-x-[-10px]">
          {title}
        </h2>
        <p className=" font-light transition-all duration-[0.4s] lg:group-hover:translate-x-[10px]">
          Design & Development 
        </p>
      </div>
    </div>
    </a>
  );
}
