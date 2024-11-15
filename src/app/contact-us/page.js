'use client'/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { contactUsCardData } from "../components/common/Helper";
import WeStarted from "../components/WeStarted";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        AOS.init({
          duration: 300, // Animation duration
          once: true, // Whether animation should happen only once
        });
      }, []);
  return (
    <div className="pt-16 pb-10">
      <div className="container max-w-[1360px] mx-auto px-4">
        <div className="text-center lg:text-start ">
          <p className="text-[16px] text-[#FA421D] font-medium tracking-[.5px] ff_general_medium">
            Contact us
          </p>
          <p className="md:text-[40px] text-[30px] text-black tracking-[-1.2px] font-semibold mt-[2px] ff_general_semibold">
            We&apos;d Love to Hear from You!
          </p>
          <p className="text-[#4B5563] text-[20px] lg:w-[60%] mt-[20px] md:w-[80%] text-center lg:text-start mx-auto lg:mx-0">
            Wheather you have questions, feedback,or need assistance.we&lsquo;re
            here to help.Reach out to us through any of the meathods below,and
            we'll get back to you as soon as possible
          </p>
        </div>

        <div className="flex flex-wrap flex-row justify-center lg:justify-start sm:-mx-3 ">
          {contactUsCardData.map((card, i) => (
            <div
              key={i}
              className="lg:w-4/12 sm:px-3 md:w-6/12 mt-[40px] sm:w-9/12 w-full"
            >
              <div
                data-aos="flip-left"
                data-aos-easing="ease-in-sine"
                className="bg-[#F9FAFB] p-[24px] rounded-[16px] min-h-[250px] border border-[#e5e7eb] "
              >
                <span>{card.svg_img}</span>
                <p className="text-xl lg:text-[24px] text-[#323333] font-medium pt-[24px]ff_general_medium mt-5">
                  {card.Heading}
                </p>
                <p className="text-[#6B7280] text-base mt-3">
                  {card.peragraph}
                </p>
                <p className="text-[#6B7280] text-base pb-4">{card.per}</p>

                <Link
                  href={`mailto:${card.content}`}
                  className="text-[#FA421D] text-base pt-[20px] font-medium ff_general_mediums"
                >
                  {card.content}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Get Started */}

      <WeStarted />
    </div>
  );
}
