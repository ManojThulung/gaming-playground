import { HeroIcon, PlayIcon } from "@/assets/icon";
import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen max-width pt-[80px] flex justify-center items-center pb-16">
      <div className="flex flex-col-reverse md:flex-row gap-5 w-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-7">
          <h2 className="uppercase text-base text-white/50">
            GAME DEVELOPMENT
          </h2>
          <h1 className="font-condensed text-5xl sm:text-6xl lg:text-7xl font-light md:max-w-[400px]">
            The Art Of Creating Games{" "}
          </h1>
          <p className="text-base sm:text-xl md:max-w-[450px]">
            Game Development is the art of creating games and describes the
            design, development and release.
          </p>
          <div className="flex flex-row gap-7 items-center justify-start">
            <div>
              <button className="btn-primary">PORTFOLIO</button>
            </div>
            <div className="flex flex-nowrap gap-3 items-center justify-start group cursor-pointer">
              <button className="flex-shrink-0 shadow h-[48px] w-[48px] rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center group-hover:opacity-80 duration-150 ease-in">
                <PlayIcon />
              </button>
              <p className="text-base text-white/50 group-hover:text-white/80 duration-150 ease-in">
                Play Vidoe
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center ">
          <HeroIcon className="max-w-[450px] md:w-full md:max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
