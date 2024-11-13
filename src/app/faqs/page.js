"use client";
import { faqsData } from "@/app/components/common/Helper";
import WeStarted from "@/app/components/WeStarted";
import Link from "next/link";

import AOS from "aos";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
   
    <div className="pt-16 pb-12 bg-bg_img_gradient bg-cover bg-no-repeat bg-top">
      <div className="container max-w-[1360px] mx-auto px-4">
        <div className="">
          <p  data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-easing="ease-in-sine"  className="text-[#fa421d] text-sm lg:text-base">Help</p>
          <h2  data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-easing="ease-in-sine"  className="text-3xl md:text-4xl lg:text-[40px] text-black font-semibold mt-2 ff_general_semibold">
            Common Questions
          </h2>

          <p  data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-easing="ease-in-sine"  className="text-lg lg:text-xl font-normal text-[#4b5563] my-6">
            Everything you need to know about Üben AI. Still have questions?{" "}
            <Link className="text-[#292524] font-medium " href="">
              Contact Us
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] pt-4">
          {faqsData.map((faq, index) => (
            <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine" 
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
            >
              <h3 className="text-[#323333] font-semibold text-xl lg:text-2xl mb-2 ">
                {faq.question}
              </h3>
              <p className="text-[#4b5563] bg-[#f9fafb] text-lg lg:text-xl pt-5 pr-16 pb-4 pl-4 h-full rounded-xl font-normal">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>{" "}
    </div>

<WeStarted/>
 </>
    
  );
}
