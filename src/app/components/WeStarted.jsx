import React, { useEffect, useRef } from "react";
import { RightTikkIcons } from "./common/Icons";
import Link from "next/link";
import Image from "next/image";
import appStore from "../../../public/images/png/app-store.png";

const WeStarted = () => {
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
    <div>
      <section className="py-16 bg-white">
        <div className="container max-w-[1360px] mx-auto px-4 ">
          <div className="div rounded-[40px] border border-[#ffdea9]">
            <div className="box"></div>
            <div className="flex flex-wrap justify-between items-center p-6 sm:p-12 lg:p-16 overflow-hidden">
              <div  ref={(el) => animateRefs.current.push(el)} className="w-full lg:w-1/2">
                <h2
                 
                  className="text-3xl md:text-4xl lg:text-[40px] text-black font-semibold ff_general_semibold animate-bottom"
                >
                  Ready to get started?
                </h2>
                <div className="mt-6 flex flex-col gap-3">
                  <div
                  
                    className="flex gap-2 items-center animate-bottom"
                  >
                    <div>
                      <RightTikkIcons />
                    </div>
                    <p className=" text-base sm:text-lg md:text-xl text-black font-normal">
                      Learn useful grammar and common vocabulary
                    </p>
                  </div>
                  <div
                   
                    className="flex gap-2 items-center animate-bottom"
                  >
                    <div>
                      <RightTikkIcons />
                    </div>
                    <p className=" text-base sm:text-lg md:text-xl text-black font-normal">
                      Practice with Artificial Intelligence
                    </p>
                  </div>
                  <div
                  
                    className="flex gap-2 items-center animate-bottom"
                  >
                    <div>
                      <RightTikkIcons />
                    </div>
                    <p className=" text-base sm:text-lg md:text-xl text-black font-normal">
                      Prepare for CEFR tests
                    </p>
                  </div>
                </div>
              </div>
              <div  ref={(el) => animateRefs.current.push(el)} className="w-full lg:w-4/12 mt-6 lg:mt-0">
                <h3
               
                  className="text-2xl md:text-[32px] text-black text-start lg:text-center ff_general_medium animate-bottom"
                >
                  Download the app now and start learning.
                </h3>

                <div className="flex justify-start sm:justify-center mt-6">
                  <Link
                  
                    target="_blank"
                    href="https://www.apple.com/in/app-store/"
                    className="section2_video-link play_store w-inline-block animate-bottom"
                  >
                    <Image
                      src={appStore}
                      width={200}
                      height={56}
                      alt="Google Play Link"
                      className=" w-[140px] md:w-[200px] md:h-[56px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeStarted;
