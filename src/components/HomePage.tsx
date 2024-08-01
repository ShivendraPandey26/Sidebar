"use client";
import React from "react";
import TechIcons from "./TechIcons";


function HomePage() {
  return (
    <div className="p-10">
      <div className="dark:text-white text-black">
        <span className="text-5xl">👋</span>
        <h1 className="font-mono text-2xl lg:text-4xl">Hello there! I'm Shivendra Kumar Pandey</h1>
      </div>

      <div className="dark:text-white text-black">
        <p className="text-[#737373] py-5">
          I’m a Full-Stack Developer dedicated to building impactful products
          and web applications that make a difference. With a passion for
          creating solutions that reach and benefit millions, I bring a blend of
          creativity and technical expertise to every project. <br /> <br /> Explore my
          work and connect with me to collaborate on creating something
          extraordinary!
        </p>
      </div>

      <TechIcons /> 

      {/* <div className="flex flex-wrap bg-white">
      <img
        alt="Next.js"
        loading="lazy"
        width={200}
        height={200}
        className="object-contain mr-4 mb-4 h-10 w-14"
        src="https://sidefolio.vercel.app/_next/image?url=%2Fimages%2Flogos%2Fnext.png&w=256&q=75"
      />
      <img
        alt="AWS"
        loading="lazy"
        width={200}
        height={200}
        className="object-contain mr-4 mb-4 h-10 w-10"
        src="https://sidefolio.vercel.app/_next/image?url=%2Fimages%2Flogos%2Faws.webp&w=256&q=75"
      />
      <img
        alt="Figma"
        loading="lazy"
        width={200}
        height={200}
        className="object-contain mr-4 mb-4 h-10 w-8"
        src="https://sidefolio.vercel.app/_next/image?url=%2Fimages%2Flogos%2Ffigma.png&w=256&q=75"
      />
      <img
        alt="Framer Motion"
        loading="lazy"
        width={200}
        height={200}
        className="object-contain mr-4 mb-4 h-10 w-10"
        src="https://sidefolio.vercel.app/_next/image?url=%2Fimages%2Flogos%2Fframer.webp&w=256&q=75"
      />
      <img
        alt="Node"
        loading="lazy"
        width={200}
        height={200}
        className="object-contain mr-4 mb-4 h-10 w-12"
        src="https://sidefolio.vercel.app/_next/image?url=%2Fimages%2Flogos%2Fnode.png&w=256&q=75"
      />
      <img
        alt="Tailwind"
        loading="lazy"
        width={200}
        height={200}
        className="object-contain mr-4 mb-4 h-10 w-24"
        src="https://sidefolio.vercel.app/_next/image?url=%2Fimages%2Flogos%2Ftailwind.png&w=256&q=75"
      />
      <img
        alt="Vercel"
        loading="lazy"
        width={200}
        height={200}
        className="object-contain mr-4 mb-4 h-10 w-24"
        src="https://sidefolio.vercel.app/_next/image?url=%2Fimages%2Flogos%2Fvercel.png&w=256&q=75"
      />
    </div> */}
    </div>
  );
}

export default HomePage;
