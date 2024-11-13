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
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/*  HERO SECTION*/}
      <section className=" pt-36 pb-12 ">
        <div className="container max-w-[1360px] mx-auto px-4 ">
          <h2
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-sm font-semibold text-red-600 mb-2 text-center"
          >
            Pricing
          </h2>
          <h1
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
            className="text-[15px] lg:text-[56px] font-bold text-gray-900 mb-4 leading-[150%] text-center ff_general_semibold"
          >
            Choose the Plan That&apos;s Right for You
          </h1>

          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
            className="text-gray-500 mb-6 lg:mb-12 px-10 mt-8 lg:mt-14 text-[14px] lg:text-[20px] "
          >
            Üben AI offers monthly and annual subscriptions. Both plans are
            billed via the App Store or Google Play Store after a 7-day free
            trial.
          </p>

          <div className="flex flex-wrap justify-center pt-32  bg-Prices_gradient bg-cover bg-no-repeat bg-top">
            <div className="w-full md:w-1/2 xl:w-4/12 p-3">
              <div className=" bg-white border border-gray-200 rounded-3xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl ff_general_semibold">Monthly plan</h3>
                  <span className="px-3 py-1 text-xs ff_general_semibold border border-yellow-500 text-yellow-600 bg-yellow-100 rounded-full">
                    Popular
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex">
                    <div className="mt-3">
                      <span className="text-4xl ff_general_semibold leading-[120%]">
                        ₹
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-6xl ff_general_semibold leading-[120%] ps-2 ff_general_semibold">
                        1499.00
                      </span>
                      <span className="text-gray-500 mb-2"> /month</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="flex items-center">
                    <PricingTikkIcons />
                    <span className="ml-3 text-[#6b7280]">
                      Access to 200+ lessons
                    </span>
                  </p>
                  <p className="flex items-center">
                    <PricingTikkIcons />
                    <span className="ml-3  text-[#6b7280]">
                      Unlimited GPT-powered practice sessions
                    </span>
                  </p>
                  <p className="flex items-center">
                    <PricingTikkIcons />
                    <span className="ml-3  text-[#6b7280]">
                      Vocabulary lists by CEFR level
                    </span>
                  </p>
                  <p className="flex items-center">
                    <PricingTikkIcons />
                    <span className="ml-3 text-[#6b7280]">
                      Spaced-repetition review
                    </span>
                  </p>
                  <p className="flex items-center">
                    <PricingTikkIcons />
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
            <div className="w-full md:w-1/2 xl:w-4/12 p-3 relative">
              <div className=" bg-white border border-gray-200 rounded-3xl shadow-lg p-6">
                <Image
                  className={`w-28 sm:w-32 md:w-[180px] absolute -top-20 right-0 hidden md:block`}
                  src={saveImg}
                  alt="logo"
                />
                <div className="flex items-center justify-between">
                  <h3 className="text-xl ff_general_semibold">Yearly plan</h3>
                </div>

                <div className="mt-4">
                  <div className="flex">
                    <div className="mt-3">
                      <span className="text-4xl ff_general_semibold leading-[120%]">
                        ₹
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-6xl ff_general_semibold leading-[120%] ps-2 ff_general_semibold">
                        825.00
                      </span>
                      <span className="text-gray-500 mb-2">
                        {" "}
                        /month(Billed annually at 9900.00)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="flex items-center">
                    <PricingTikkIcons />
                    <span className="ml-3 text-[#6b7280]">
                      Access to 200+ lessons
                    </span>
                  </p>
                  <p className="flex items-center">
                    <PricingTikkIcons />
                    <span className="ml-3  text-[#6b7280]">
                      Unlimited GPT-powered practice sessions
                    </span>
                  </p>
                  <p className="flex items-center">
                    <PricingTikkIcons />
                    <span className="ml-3  text-[#6b7280]">
                      Vocabulary lists by CEFR level
                    </span>
                  </p>
                  <p className="flex items-center">
                    <PricingTikkIcons />
                    <span className="ml-3 text-[#6b7280]">
                      Spaced-repetition review
                    </span>
                  </p>
                  <p className="flex items-center">
                    <PricingTikkIcons />
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
