"use client";
import React from "react";
import TechIcons from "./TechIcons";

function HomePage() {
  return (
    <>
      <div className="container p-10">
        <div className="dark:text-white text-black">
          <h1 className="font-mono text-2xl lg:text-4xl" data-aos="zoom-in-up">
            <span className="h-20">👋</span>
            <br /> Hello there! I&apos;m Shivendra Kumar Pandey
          </h1>
        </div>

        <div className="dark:text-white text-black" data-aos="zoom-in-up">
          <p className="text-[#737373] py-5">
            I’m a Full-Stack Developer dedicated to building impactful products
            and web applications that make a difference. With a passion for
            creating solutions that reach and benefit millions, I bring a blend
            of creativity and technical expertise to every project. <br />{" "}
            <br />
            Explore my work and connect with me to collaborate on creating
            something extraordinary!
          </p>
        </div>
      </div>
      <div className="p-3 lg:px-20">
        <TechIcons />
      </div>
    </>
  );
}

export default HomePage;
