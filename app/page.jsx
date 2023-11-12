"use client";
import { useState, useEffect} from "react";
import Lenis from "@studio-freight/lenis";
import Project from "@/components/Project";
import Modal from "@/components/Modal";
import Social from "@/components/Social";
import Insta from"../public/insta.svg";
import Lini from"../public/linkedin.svg";
import Image from "next/image";
import School from "@/components/School";

const projects = [
  {
    title: "Portfolio 2023",
    src: "port.png",
    color: "#000000",
    linko:"https://tenzindelek.netlify.app/",
    
  },
  {
    title: "Vellore Eat",
    src: "velloreeat.png",
    color: "#8C8C8C",
    linko:"#",
   
  },
  {
    title: "Real Estate",
    src: "real.png",
    color: "#EFE8D3",
    linko:"https://realestatelearn.pages.dev/",
 
  },
  {
    title: "Vit Clone",
    src: "vit1.png",
    color: "#706D63",
     linko:"https://tenzdelek.github.io/tenzin-website/",
     
  },
];

export default function Home() {
  
// useEffect(() => {
//   const divWidth = divRef.current.offsetWidth;
//   const divHeight = divRef.current.offsetHeight;
//   console.log(divWidth, divHeight);
// }, []);//to calculate the width and the hieght
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
   
    <main className=" min-h-screen flex flex-col p-8">

    

      <div className=" flex flex-1 flex-col justify-between lg:max-w-6xl lg:mx-auto" id="Home">
        <div className=" grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 ">
          <div className=" flex flex-col gap-4 justify-center">
            <h1 className=" text-5xl xl:text-7xl font-bold mt-7">
              TENZIN DELEK<br/>
              <span className=" text-[#454545]">FRONTEND DEVELOPER UI/UX</span>
            </h1>
            <p className=" text-sm font-normal text-zinc-400">
              <span className=" text-white">Hello, this is Tenzin Delek,</span>
              Senior at Vellore Institute of Technology. I am currently pursing
              Bachelor in Computer Application. I have a keen interest working
              in UX /UI design and Web Development using Three js and App
              Development using Java. Desirable Programming language with JAVA.
              Apart from that I do 3d modeling and renders in Blender.
            </p>
          </div>
          <div>
            <div className=" relative w-full h-[15rem] lg:h-[35rem] rounded-3xl md:h-[25rem] ">
               <Image src="/main1.png" fill style={{objectFit:"contain"}} alt="main" className=" animate-tenzin"  /> 
            </div>
          </div>
        </div>
      </div>

      <section className=" grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4 mt-5" id="About">
        <div className=" lg:h-[21rem]  rounded-3xl p-10 flex flex-col gap-6 bg-[url('/11.png')] bg-cover">
          <h1 className=" text-4xl font-semibold">
          བཀྲ་ཤིས་བདེ་ལེགས། ངའི་མིང་ལ་བསྟན་འཛིན་བདེ་ལེགས་ཟེར།   
          </h1>
          <p className="flex-1 text-xs text-gray-200 ">Though equal benefits be conferred<br/>
On the excellent and the vulgar, the return is not equal.<br/>
Though there is no difference in the seed sown in different fields,<br/>
Yet there is immense variety in the crop..<br/><br/>
          <span className=" text-yellow-300 indent-40 text-base ">-- ས་སྐྱ​་པཎ་ཌི་ཏ་ཀུན་དགའ་རྒྱལ་མཚན་</span></p>
          <div className=" flex flex-col lg:flex-row items-center gap-4 justify-items-end">
            <button className=" bg-black text-white text-sm font-medium  py-3 px-3 rounded-full w-60 lg:w-auto">
              <a href="/resume.pdf" download>Download Resume</a>
              
            </button> 
            <div className=" flex items-center gap-10">
              <a href="https://www.linkedin.com/in/tenzin-delek-8a157724b/" target="_blank"><Social bgcolor="linkedin"><Lini className=" w-5 h-5"/> </Social></a>
              <a href=" https://www.instagram.com/tenz_delek_/" target="_blank"> <Social bgcolor="insta"> <Insta className=" w-5 h-5"/></Social></a>
             
            </div>
          </div>
        </div>
        <div  className="group relative lg:h-[21rem] h-[25rem]   ">
          <div className=" absolute  w-full h-full transform-style-preserve-3d transition-all duration-[0.5s] ease-in-out lg:group-hover:[transform:rotateY(180deg)]">
          <div className=" absolute w-full h-full  back rounded-3xl p-8 bg-[url('/12.jpg')] bg-cover bg-center" />
          <div className=" sm:flex hidden absolute w-full h-full  back rounded-3xl p-8 bg-[url('/bg.png')] bg-cover bg-center [transform:rotateY(180deg)]" />
          </div>
        </div>
       
      </section>

<section className=" grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4 mt-5">
<div className=" lg:h-[15rem]  p-5 space-y-8 ">
<p className=" font-bold text-4xl text-center">STUDIES</p>
<div className=" flex">
<School sname="TCV LOWER" year="2009-2013" stype="Secondary School" />
<School sname="TCV SELAKUI" year="2014-2021" stype="Senior Secondary School"/>
<School sname="VIT VELLORE" year="2021-2024" stype="Bachelor in Computer Application" />
</div>
{/* //line */}
<div className=" flex items-center">
  <div className=" h-1 lg:w-[28%] w-[18%] bg-white rounded-2xl"/>
<div className=" w-4 h-4 rounded-full bg-white"/>
<div className=" h-1 lg:w-[30%] w-[24%] bg-white rounded-2xl"/>
<div className=" w-4 h-4 rounded-full bg-white"/>
<div className=" h-1 lg:w-[30%] w-[34%] bg-white rounded-2xl"/>
<div className=" w-4 h-4 rounded-full bg-white"/>
</div>


</div>

</section>

    <div className=" font-bold text-4xl text-center mb-4" id="Project">PROJECTS</div>
      <div className=" flex flex-col lg:items-center lg:justify-center ">
        <div>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
                linko={project.linko}
                
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects}  />
      </div>

    </main>
   
  );
}
