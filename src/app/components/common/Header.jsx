"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/png/logo.png";
import CommonBtn from "./CommonBtn";
import { usePathname } from "next/navigation";
import { headerData } from "./Helper";


const Header = () => {
  const location = usePathname();
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = toggleNav ? "clip" : "auto";
  }, [toggleNav]);

 

  return (
    <div className=" sticky top-0 w-full z-10">
      <div className={`duration-300 bg-[#FBFBFB] `}>
        <div
          data-aos="fade-down"
          className={`sm:py-3 p-2 sm:px-4 max-w-[1360px] mx-auto flex justify-between w-full items-center`}
        >
          <Link href="/">
            <Image
              className={`w-28 sm:w-32 md:w-[160px] `}
              src={logo}
              alt="logo"
            />
          </Link>

          <div
            className={`flex gap-5 xl:gap-8 max-lg:fixed left-0 max-lg:h-screen max-lg:w-screen max-lg:items-center max-lg:justify-start flex-col lg:!flex-row bg-[#FFFFFF] lg:bg-transparent duration-300 z-10 ${
              !toggleNav ? "!-top-[100vh]" : "top-[71px]"
            }`}
          >
            {headerData.map((tab, index) => (
              <div key={index} onClick={() => setToggleNav(false)}>
                <Link
                  href={tab.path}
                  className={`font-normal text-base capitalize flex items-center gap-3 justify-between duration-300 hover:text-black/60 ${
                    location === tab.path ? "text-black" : "text-[#292524]"
                  }`}
                >
                  {tab.tabs}
                </Link>
              </div>
            ))}
            <CommonBtn
              path="https://apps.apple.com/us/app/learn-german-%C3%BCben/id6504501329"
              btnName="Download App"
              btnStyling="text-[#292524] bg-[#fcd34d] hover:bg-[#fcd34d]/65 capitalize w-full lg:hidden"
            />
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            {" "}
            <div className=" gap-1.5 sm:gap-2.5 hidden lg:flex">
              <CommonBtn
                path="https://apps.apple.com/us/app/learn-german-%C3%BCben/id6504501329"
                btnName="Download App"
                btnStyling="text-[#292524] bg-[#fcd34d] hover:bg-[#fcd34d]/65 capitalize"
              />
            </div>
            <div
              onClick={() => setToggleNav(!toggleNav)}
              className="flex flex-col justify-between h-5 w-6 lg:hidden z-[100] relative cursor-pointer duration-300"
            >
              <span
                className={` border-2 bg-black w-full rounded-sm duration-300 ${
                  toggleNav
                    ? "translate-y-[8px] -rotate-45 border-black"
                    : "border-black"
                }`}
              ></span>
              <span
                className={` border-2 bg-black w-full rounded-sm duration-300 ${
                  toggleNav ? "rotate-45 border-black" : "border-black"
                }`}
              ></span>
              <span
                className={` border-2 bg-black w-full rounded-sm duration-300 ${
                  toggleNav ? "opacity-0 border-black" : "border-black"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
