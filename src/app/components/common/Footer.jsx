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
      <div className="container max-w-[1360px] mx-auto px-4 ">
        <div className="footer-wrapper">
          {/* Top section with logo and links */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine"data-aos-delay="100"  className="w-1/3">
              {/* Logo */}
              <Link href="/">
                <Image
                  className={`w-28 sm:w-32 md:w-[180px] `}
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
                    <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine"data-aos-delay="100"  className="font-semibold text-[#4b5563] text-base capitalize">
                      Company
                    </h3>
                    <Link data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine"data-aos-delay="200" 
                      href="/why-uben"
                      className="font-normal text-[#292524] text-base hover:text-black"
                    >
                      About us
                    </Link>
                    <Link
                    data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine"data-aos-delay="300" 
                      href="/prices"
                      className="font-normal text-[#292524] text-base hover:text-black"
                    >
                      Prices
                    </Link>{" "}
                  </div>
                </div>
                {/* More links */}
                <div className=" w-1/2">
                  <div className="flex flex-col gap-2">
                    <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine"data-aos-delay="100"  className="font-semibold text-[#4b5563] text-base capitalize">
                      more
                    </h3>
                    <Link
                    data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine"data-aos-delay="200" 
                      href="/contact-us"
                      className="font-normal text-[#292524] text-base hover:text-black"
                    >
                      contact us
                    </Link>
                  
                    <Link
                    data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine"data-aos-delay="400" 
                      href="/faqs"
                      className="font-normal text-[#292524] text-base hover:text-black"
                    >
                      Help / FAQ
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-image-border_gradient"></div>

          {/* Bottom section with copyright and email */}
          <div className=" flex flex-wrap gap-3 justify-center sm:justify-between items-center">
            <p className=" text-gray-600 text-center sm:text-start">
            Copyright {currentYear} Üben AI. <span className="sm:block"> All rights reserved.</span>
            </p>
            <a
              href="mailto:help@ubenai.com"
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <div className="footer-bot_link-icon w-6 h-6 mr-2 text-gray-800">
                <EmailIcons/>
              </div>
              help@ubenai.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
