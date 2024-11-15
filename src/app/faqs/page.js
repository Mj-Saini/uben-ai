"use client";
import { faqsData } from "@/app/components/common/Helper";
import WeStarted from "@/app/components/WeStarted";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {

  const animateRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-top");  // or animate-bottom
        }
      });
    }, { threshold: 0.1 });

    animateRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
   
    <div className="pt-16 pb-12 bg-bg_img_gradient bg-cover bg-no-repeat bg-top">
      <div className="container max-w-[1360px] mx-auto px-4">
        <div className="">
          <p  className="text-[#fa421d] text-sm lg:text-base animate-bottom">Help</p>
          <h2  ref={(el) => animateRefs.current.push(el)} className="text-3xl md:text-4xl lg:text-[40px] text-black font-semibold mt-2 ff_general_semibold animate-bottom ">
            Common Questions
          </h2>

          <p   ref={(el) => animateRefs.current.push(el)}className="text-lg lg:text-xl font-normal text-[#4b5563] my-6 animate-bottom">
            Everything you need to know about Üben AI. Still have questions?{" "}
            <Link className="text-[#292524] font-medium " href="">
              Contact Us
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] pt-4">
          {faqsData.map((faq, index) => (
            <div
            ref={(el) => animateRefs.current.push(el)}
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col animate-bottom"
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
