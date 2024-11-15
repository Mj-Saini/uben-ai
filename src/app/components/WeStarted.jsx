import React from "react";
import { RightTikkIcons } from "./common/Icons";
import Link from "next/link";
import Image from "next/image";

import appStore from "../../../public/images/png/app-store.png";

const WeStarted = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container max-w-[1360px] mx-auto px-4 ">
          <div className="div rounded-[40px] border border-[#ffdea9]">
            <div className="box"></div>
            <div className="flex flex-wrap justify-between items-center p-6 sm:p-12 lg:p-16 overflow-hidden">
              <div className="w-full lg:w-1/2">
                <h2
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="100"
                  className="text-3xl md:text-4xl lg:text-[40px] text-black font-semibold ff_general_semibold"
                >
                  Ready to get started?
                </h2>
                <div className="mt-6 flex flex-col gap-3">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-sine"
                    className="flex gap-2 items-center "
                  >
                    <div>
                      <RightTikkIcons />
                    </div>
                    <p className=" text-base sm:text-lg md:text-xl text-black font-normal">
                      Learn useful grammar and common vocabulary
                    </p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="100"
                    className="flex gap-2 items-center "
                  >
                    <div>
                      <RightTikkIcons />
                    </div>
                    <p className=" text-base sm:text-lg md:text-xl text-black font-normal">
                      Practice with Artificial Intelligence
                    </p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="100"
                    className="flex gap-2 items-center "
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
              <div className="w-full lg:w-4/12 mt-6 lg:mt-0">
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-sine"
                  className="text-2xl md:text-[32px] text-black text-start lg:text-center ff_general_medium"
                >
                  Download the app now and start learning.
                </h3>

                <div className="flex justify-start sm:justify-center mt-6">
                  <Link
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="100"
                    target="_blank"
                    href="https://www.apple.com/in/app-store/"
                    className="section2_video-link play_store w-inline-block"
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
