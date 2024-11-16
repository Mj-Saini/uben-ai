"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
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
            <div className="w-1/3 animate-top">
              {/* Logo */}
              <Link href="/">
                <Image
                  className={`w-28 sm:w-32 md:w-[160px] `}
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
                <div className="w-1/2 animate-top">
                  <div
                    className="flex flex-col gap-2 "
                  
                  >
                    <h3 className="font-semibold text-[#4b5563] text-base capitalize">
                      Company
                    </h3>
                    <span>
                      {" "}
                      <Link
                        href="/why-uben"
                        className="font-normal text-black text-base hover:text-black/60"
                      >
                        About us
                      </Link>
                    </span>
                    <span>
                      {" "}
                      <Link
                        href="/prices"
                        className="font-normal text-black text-base hover:text-black/60"
                      >
                        Prices
                      </Link>{" "}
                    </span>
                  </div>
                </div>
                {/* More links */}
                <div className=" w-1/2">
                  <div
                    className="flex flex-col gap-2 animate-top"
                  
                  >
                    <h3 className="font-semibold text-[#4b5563] text-base capitalize">
                      more
                    </h3>
                    <span>
                      {" "}
                      <Link
                        href="/contact-us"
                        className="font-normal text-black text-base hover:text-black/60"
                      >
                        contact us
                      </Link>
                    </span>
                    <span>
                      <Link
                        href="/faqs"
                        className="font-normal text-black text-base hover:text-black/60"
                      >
                        Help / FAQ
                      </Link>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-image-border_gradient"></div>

          {/* Bottom section with copyright and email */}
          <div
            className=" flex flex-wrap gap-3 justify-start sm:justify-between items-center "
          
          >
            <p className=" text-gray-600 text-start">
              Copyright {currentYear} Üben AI.{" "}
              <span className="block"> All rights reserved.</span>
            </p>
            <Link
              href="mailto:help@ubenai.com"
              className="flex items-center text-gray-600 "
            >
              <div className="footer-bot_link-icon w-6 h-6 mr-2 text-gray-800">
                <EmailIcons />
              </div>
              help@ubenai.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
