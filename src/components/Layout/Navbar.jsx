"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "react-feather";
import { NavBarList } from "@/constant";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= window.screen.height - 480
        ? setIsSticky(true)
        : setIsSticky(false);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="text-white pb-2 absolute top-0 left-0 w-[100vw] z-20">
      {isSticky && <div className="h-[80px]" />}

      <nav
        className={`h-[70px] text-secondary-dark py-1  ${
          isSticky ? "sticky-nav" : ""
        }`}
      >
        <div className="max-width flex items-center justify-between h-full ">
          <div className="flex items-center gap-x-2 uppercase">
            <Link href="/">
              <h1 className="font-condensed text-4xl font-light duration-150 ease-in hover:text-white/80">
                GMV
              </h1>
            </Link>
          </div>
          <ul className="hidden md:flex items-center gap-x-14">
            {NavBarList.map((nav, index) => (
              <li
                key={index}
                className={`duration-150 ease-in hover:text-white/80 text-base`}
              >
                <Link href={`/${nav.path}`}>{nav.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center flex-none gap-1">
            <button className="hidden md:block uppercase font-bold text-sm px-4 py-2 border-[1px] border-white/40 rounded-lg duration-150 ease-in hover:bg-white/5 hover:text-white/80">
              Contact Us
            </button>
            <button
              onClick={() => {
                setSidebarVisible(true);
              }}
              className="block md:hidden p-2 border-[1px] border-white/40 rounded-lg duration-150 ease-in hover:bg-white/5 hover:text-white/80"
            >
              <Menu size={18} />
            </button>
          </div>

          {/* background overlay */}
          <div
            onClick={() => setSidebarVisible(false)}
            className={`block sm:hidden h-[100vh] w-full bg-black opacity-30 z-[1100] fixed top-0 ${
              sidebarVisible ? "left-0" : "left-[100vw] duration-300"
            }`}
          />

          {/* sidebar mobile version  -----------------------------------------*/}
          <div
            className={`block md:hidden fixed bg-[#1D1F4D] text-font-primary z-[1100] w-[100vw] h-[100vh] top-0 shadow duration-300 ease-in ${
              sidebarVisible ? "right-0" : "-right-[100vw]"
            }`}
          >
            <div className="flex flex-col justify-start items-start h-full px-12 pt-16 gap-8">
              <ul className="w-full relative">
                <li>
                  <button
                    onClick={() => setSidebarVisible(false)}
                    className="absolute -top-10 right-0 p-2 border-[1px] border-white/40 rounded-lg duration-150 ease-in hover:opacity-70 flex flex-col items-center justify-center"
                  >
                    <X size={18} />
                  </button>
                </li>
                {NavBarList.map((nav, index) => (
                  <Fragment key={index}>
                    <Link
                      href={`/${nav.path}`}
                      onClick={() => setSidebarVisible(false)}
                      className={`duration-200 ease-in hover:opacity-70 `}
                    >
                      <li
                        className={`py-5 text-base flex justify-center items-center`}
                      >
                        {nav.name}
                      </li>
                    </Link>
                    {NavBarList.length - 1 > index && (
                      <div className="rounded-full h-[2px] bg-white/30 opacity-20" />
                    )}
                  </Fragment>
                ))}
              </ul>
              <div className="flex flex-grow items-end justify-center w-full pb-8">
                <button className="uppercase font-bold text-sm px-4 py-2 border-[1px] border-white/40 rounded-lg duration-150 ease-in hover:bg-white/5 hover:text-white/80">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
