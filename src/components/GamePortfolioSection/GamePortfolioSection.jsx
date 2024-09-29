import { GamesList } from "@/constant";
import React from "react";
import GameCard from "./GameCard";

const GamePortfolioSection = () => {
  return (
    <section className="min-h-screen max-width py-16" id="games">
      <div className="flex flex-col gap-7 w-full justify-between text-center">
        <h2 className="uppercase text-base text-white/50">GAME PORTFOLIO</h2>

        <h1 className="font-condensed text-5xl font-light">
          Explore Our Games
        </h1>

        <p className="text-base text-white/50 max-w-[570px] mx-auto">
          Game Development is the art of creating games and describes the
          design, development and release.
        </p>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-3 gap-8">
            {GamesList.map((game, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "col-span-1 md:col-span-3 xl:col-span-2 row-span-2"
                    : "col-span-1 md:col-span-2 xl:col-span-1"
                }`}
              >
                <GameCard key={game.name} game={game} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button className="btn-outline">WATCH ALL</button>
        </div>
      </div>
    </section>
  );
};

export default GamePortfolioSection;
