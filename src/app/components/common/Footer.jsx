"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/images/png/logo.png";

import { EmailIcons } from "./Icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#F9FAFB] border border-[#ccc] py-10">
      <div className="max-2xl:max-w-[1504px] mx-auto px-4 md:px-10 ">
        <div className="footer-wrapper">
          {/* Top section with logo and links */}
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div
          
              className="md:w-1/3"
            >
              {/* Logo */}
              <Link href="/">
                <Image
                  className={`w-[128px] sm:w-32 md:w-[160px] `}
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            {/* Links */}
            <div className="w-full md:w-1/2">
              {" "}
              <div className="flex flex-row gap-8 mt-8 sm:mt-4 md:mt-0">
                {/* Company links */}
                <div className="w-1/2">
                  <div className="flex flex-col gap-2">
                    <h3
                      // data-aos="fade-up"
                      // data-aos-offset="100"
                      // data-aos-easing="ease-in-sine"
                      // data-aos-delay="100"
                      className="font-semibold text-[#4b5563] text-base capitalize"
                    >
                      Company
                    </h3>
                    <Link
                      // data-aos="fade-up"
                      // data-aos-offset="100"
                      // data-aos-easing="ease-in-sine"
                      // data-aos-delay="100"
                      href="/why-uben"
                      className="font-normal text-[#292524] text-base hover:text-black/60 duration-300"
                    >
                      About us
                    </Link>
                    <Link
                      // data-aos="fade-up"
                      // data-aos-offset="100"
                      // data-aos-easing="ease-in-sine"
                      // data-aos-delay="100"
                      href="/prices"
                      className="font-normal text-[#292524] text-base hover:text-black/60 duration-300"
                    >
                      Prices
                    </Link>{" "}
                  </div>
                </div>
                {/* More links */}
                <div className=" w-7/12">
                  <div className="flex flex-col gap-2">
                    <h3
                      // data-aos="fade-up"
                      // data-aos-offset="100"
                      // data-aos-easing="ease-in-sine"
                      // data-aos-delay="100"
                      className="font-semibold text-[#4b5563] text-base capitalize"
                    >
                      more
                    </h3>
                    <Link
                      // data-aos="fade-up"
                      // data-aos-offset="100"
                      // data-aos-easing="ease-in-sine"
                      // data-aos-delay="100"
                      href="/contact-us"
                      className="font-normal text-[#292524] text-base hover:text-black/60 duration-300 capitalize"
                    >
                      contact us
                    </Link>
                    <Link
                      // data-aos="fade-up"
                      // data-aos-offset="100"
                      // data-aos-easing="ease-in-sine"
                      // data-aos-delay="100"
                      href="/faqs"
                      className="font-normal text-[#292524] text-base hover:text-black/60 duration-300"
                    >
                      Help / FAQ
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t footer-divider"></div>

          {/* Bottom section with copyright and email */}
          <div className=" flex flex-wrap gap-4 justify-start sm:justify-between items-center">
            <p className=" text-gray-600 text-start">
              Copyright {currentYear} Üben AI.{" "}
              <span className="block"> All rights reserved.</span>
            </p>
            <Link
              href="mailto:help@ubenai.com"
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <div className="footer-bot_link-icon w-6 h-6 mr-2 text-gray-800">
                <EmailIcons />
              </div>
            <span>  help@ubenai.com</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
