'use client'
import React from "react";

import { Link } from "react-scroll";

const Navbar = () => {
  const listlink=[
    {
      id:1,
      title:'Home',
    },
    {
      id:2,
      title:'About',
    },
    {
      id:3,
      title:'Project',
    },
  ]
  

  return (
    <div className="sm:flex items-center justify-between bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4 text-xs max-w-[412px] lg:max-w-[1280px] fixed top-0 w-full z-10 rounded-3xl">
      <div className="sm:flex hidden items-center space-x-3">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="animate-pulse tracking-widest">TENZIN DELEK</span>
      </div>
      <div className="flex justify-center lg:gap-10 gap-10 lg:justify-between lg:ml-[200px] text-zinc-500 ">
        {listlink.map((link) => (
          <div key={link.id} className="text-white cursor-pointer">
            <Link to={link.title} smooth={true} offset={-100} duration={500}>
              {link.title}
            </Link>
          </div>
        ))}
      </div>
      <div />
      <button className=  "bg-orange-500  hidden lg:flex md:hidden text-white text-xs font-medium py-3 px-3 rounded-full w-60 lg:w-auto">
        <a href="/resume.pdf" download>
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default Navbar;
