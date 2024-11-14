"use client";
import Image from "next/image";
import WeStarted from "../components/WeStarted";
import AOS from "aos";
import { useEffect } from "react";
import { PricingTikkIcons } from "../components/common/Icons";
import CommonBtn from "../components/common/CommonBtn";
import saveImg from "../../../public/images/png/save-img.png";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/*  HERO SECTION*/}
      <section className="pt-16 pb-12 ">
        <div className="container max-w-[1360px] mx-auto px-4 ">
          <h2
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="text-base font-medium ff_general_medium text-[#FA421D] mb-2 text-center tracking-[0.5px]"
          >
            Pricing
          </h2>
          <h1
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
            className="text-3xl sm:text-4xl md:text-5xl xl:text-[56px] text-gray-900 mb-4 mt-2 leading-[150%] text-center ff_general_semibold"
          >
            Choose the Plan That&apos;s Right for You
          </h1>

          <p
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
            className="text-[#4b5563] mb-6 lg:mb-12 mt-8 text-[14px] lg:text-[20px] text-center "
          >
            Üben AI offers monthly and annual subscriptions. Both plans are
            billed via the App Store or Google Play Store after a 7-day free
            trial.
          </p>

          <div className="flex flex-wrap justify-center md:pt-32  md:bg-Prices_gradient bg-cover bg-no-repeat bg-top">
            <div className="w-full md:w-1/2 xl:w-5/12 md:p-3">
              <div className=" bg-white border border-gray-200 rounded-3xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl lg:text-2xl text-[#323333] ff_general_semibold">Monthly plan</h3>
                  <span className="px-2.5 py-0.5 text-xs lg:text-sm ff_general_semibold border border-yellow-500 text-yellow-600 bg-yellow-100 rounded-full">
                    Popular
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex">
                    <div className="mt-3">
                      <span className="text-2xl sm:text-3xl lg:text-4xl text-[#323333] ff_general_semibold leading-[120%]">
                        ₹
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-3xl sm:text-4xl lg:text-6xl ff_general_semibold leading-[120%] ps-2 ff_general_semibold">
                        1499.00
                      </span>
                      <span className="text-[#6b7280] text-xs sm:text-sm lg:text-base mb-2"> /month</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="flex items-center">
                     <span>
                    <PricingTikkIcons />
                    </span>
                    <span className="ml-3 text-[#6b7280]">
                      Access to 200+ lessons
                    </span>
                  </p>
                  <p className="flex items-center">
                     <span>
                    <PricingTikkIcons />
                    </span>
                    <span className="ml-3  text-[#6b7280]">
                      Unlimited GPT-powered practice sessions
                    </span>
                  </p>
                  <p className="flex items-center">
                     <span>
                    <PricingTikkIcons />
                    </span>
                    <span className="ml-3  text-[#6b7280]">
                      Vocabulary lists by CEFR level
                    </span>
                  </p>
                  <p className="flex items-center">
                     <span>
                    <PricingTikkIcons />
                    </span>
                    <span className="ml-3 text-[#6b7280]">
                      Spaced-repetition review
                    </span>
                  </p>
                  <p className="flex items-center">
                     <span>
                    <PricingTikkIcons />
                    </span>
                    <span className="ml-3  text-[#6b7280]">
                      Grammar guides written by experts
                    </span>
                  </p>
                </div>

                <div className="mt-5">
                  <CommonBtn
                    path="/"
                    btnName="Get started"
                    btnStyling="text-black bg-[#fcd34d] !font-medium"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-5/12 mt-14 md:mt-0 md:p-3 relative">
              <div className=" bg-white border border-gray-200 rounded-3xl shadow-lg p-6">
                <Image
                  className={`w-28 sm:w-32 md:w-[180px] absolute -top-8 right-0`}
                  src={saveImg}
                  alt="logo"
                />
                <div className="flex items-center justify-between">
                  <h3 className="text-xl lg:text-2xl text-[#323333] ff_general_semibold">Yearly plan</h3>
                </div>

                <div className="mt-4">
                  <div className="flex">
                    <div className="mt-3">
                      <span className="text-2xl sm:text-3xl lg:text-4xl ff_general_semibold leading-[120%]">
                        ₹
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-3xl sm:text-4xl lg:text-6xl text-[#323333] ff_general_semibold leading-[120%] ps-2 ff_general_semibold">
                        825.00
                      </span>
                      <span className="text-[#6b7280] text-xs sm:text-sm lg:text-base mb-2 mb-2">
                        {" "}
                        /month(Billed annually at 9900.00)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="flex items-center">
                    <span>
                     <span>
                    <PricingTikkIcons />
                    </span>
                    </span>
                    <span className="ml-3 text-[#6b7280]">
                      Access to 200+ lessons
                    </span>
                  </p>
                  <p className="flex items-center">
                     <span>
                    <PricingTikkIcons />
                    </span>
                    <span className="ml-3  text-[#6b7280]">
                      Unlimited GPT-powered practice sessions
                    </span>
                  </p>
                  <p className="flex items-center">
                     <span>
                    <PricingTikkIcons />
                    </span>
                    <span className="ml-3  text-[#6b7280]">
                      Vocabulary lists by CEFR level
                    </span>
                  </p>
                  <p className="flex items-center">
                     <span>
                    <PricingTikkIcons />
                    </span>
                    <span className="ml-3 text-[#6b7280]">
                      Spaced-repetition review
                    </span>
                  </p>
                  <p className="flex items-center">
                     <span>
                    <PricingTikkIcons />
                    </span>
                    <span className="ml-3  text-[#6b7280]">
                      Grammar guides written by experts
                    </span>
                  </p>
                </div>

                <div className="mt-5">
                  <CommonBtn
                    path="/"
                    btnName="Get started"
                    btnStyling="text-black bg-[#fcd34d] !font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}

      <WeStarted />
    </div>
  );
}
