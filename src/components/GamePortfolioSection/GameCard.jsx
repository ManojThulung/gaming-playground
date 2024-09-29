import { ExportIcon, PlayIcon } from "@/assets/icon";
import Image from "next/image";
import React from "react";

const GameCard = ({ game, index }) => {
  return (
    <div className="text-start flex flex-col h-full">
      <Image
        src={game.img}
        alt={game.name}
        className={`w-full h-full rounded-lg rounded-b-none object-cover ${
          index === 0
            ? "aspect-[3/1.5] md:aspect-[3/2] xl:aspect-[5/3]"
            : "aspect-[3/1.5]"
        }`}
      />
      <div className="flex items-center px-4 py-4 bg-gradient-to-b from-[#333572] to-[#2B2D67] rounded-b-lg h-full border-[2px] border-t-0 border-[#44467D]">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col gap-3">
            <p className="text-base text-white/50">{game.type}</p>
            <h1
              className={`text-2xl ${
                index === 0 ? "text-2xl md:text-3xl" : ""
              }`}
            >
              {game.name}
            </h1>
          </div>
          <div>
            <button className="flex-shrink-0 shadow h-[48px] w-[48px] rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 duration-150 ease-in">
              <ExportIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
