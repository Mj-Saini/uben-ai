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
    <div className="pt-12 md:pt-28 lg:pt-14">
      <div className="max-2xl:max-w-[1504px] md:px-10 mx-auto px-5 pb-10">
       
          <p
           data-aos="fade-up"
           data-aos-offset="100"
           data-aos-delay="100"
           className="text-xs md:text-base text-[#FA421D] tracking-[.5px] ff_general_medium animate-bottom">
           Contact us
          </p>
          <p  data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="200"
            data-aos-duration="300" className="md:text-[40px] text-[32px] text-black tracking-[-1.2px] font-semibold my-1.5 ff_general_semibold  animate-bottom">
            We&apos;d Love to Hear from You!
          </p>
          <p data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="200"
            data-aos-duration="300" className="text-[#4B5563] text-base md:text-[20px] mt-[20px] animate-bottom max-w-[780px]">
            Wheather you have questions, feedback,or need assistance.we&lsquo;re
            here to help.Reach out to us through any of the meathods below,and
            we'll get back to you as soon as possible.
          </p>
      

        <div className="flex flex-wrap flex-row justify-center lg:justify-start sm:-mx-3 ">
          {contactUsCardData.map((card, i) => (
            <div
              key={i}
              className="w-full sm:px-3 lg:w-6/12 mt-[40px]"
            >
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="400"
                data-aos-duration="500"
                className="bg-[#F9FAFB] p-[24px] rounded-[16px] border border-[#e5e7eb] animate-bottom h-full"
              >
                <span>{card.svg_img}</span>
                <p className="text-xl lg:text-[24px] text-[#323333] font-medium pt-[24px] ff_general_medium lg:mt-6">
                  {card.Heading}
                </p>
                <p className="text-[#6B7280] text-base mt-3">
                  {card.peragraph}
                </p>
                <p className="text-[#6B7280] text-base pb-4">{card.per}</p>

                <Link
                  href={`mailto:${card.content}`}
                  className="text-[#FA421D] text-base pt-[20px] font-medium ff_general_semibold"
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
