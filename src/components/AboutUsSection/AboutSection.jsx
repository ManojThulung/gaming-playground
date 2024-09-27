import { AboutUsImgIcon } from "@/assets/icon";
import React from "react";

const AboutSection = () => {
  return (
    <section className="min-h-[70vh] max-width py-16" id="about-us">
      <div className="flex flex-col md:flex-row gap-5 w-full justify-between">
        <div className="w-full md:w-1/2 flex justify-center ">
          <AboutUsImgIcon className="max-w-[450px] md:w-full md:max-w-full h-auto" />
        </div>

        <div className="w-full md:max-w-[470px] md:w-1/2 flex flex-col justify-center items-start gap-7">
          <h2 className="uppercase text-base text-white/50">About Us</h2>
          <h1 className="font-condensed text-5xl font-light">
            Design, Development and Release of a Game
          </h1>
          <p className="text-base sm:text-xl">
            Video game developers take a designer's concepts and build them into
            a playable game for users.
          </p>
          <p className="text-base text-white/50">
            Also known as games developers or video game programmers, write code
            for games for a variety of formats, such as PCs, consoles, web
            browsers and mobile phones.
          </p>
          <div className="flex flex-row gap-7 items-center justify-start">
            <button className="btn-outline">Our Principles</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
