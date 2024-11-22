"use client";
import { faqsData } from "@/app/components/common/Helper";
import WeStarted from "@/app/components/WeStarted";
import Link from "next/link";

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
    <>
   
    <div className="pt-12 md:pt-28 lg:pt-16 pb-12 bg-bg_img_gradient bg-cover bg-no-repeat bg-top">
      <div className="max-2xl:max-w-[1504px] md:px-10 mx-auto px-4">
       
          <p  data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"  className="text-[#fa421d] text-xs md:text-base animate-bottom ff_general_medium">Help</p>
          <h2  data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"  className="text-[32px] lg:text-[40px] text-black font-semibold py-3 ff_general_semibold animate-bottom ">
            Common Questions
          </h2>

          <p  data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="300"
            data-aos-duration="500"
            className="text-base md:text-xl font-normal text-[#4b5563] py-3 md:my-6 animate-bottom">
            Everything you need to know about Üben AI. Still have questions?{" "}
            <Link className="text-[#292524] font-medium mt-2 md:mt-0 md:ms-3 block md:inline text-xl" href="/contact-us">
              Contact Us
            </Link>
          </p>
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] pt-4">
          {faqsData.map((faq, index) => (
            <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="500"
            data-aos-duration="600"

              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col animate-bottom"
            >
              <h3 className="text-[#323333] font-semibold text-xl lg:text-2xl mb-5 lg:mb-3 ">
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
