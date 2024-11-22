"use client";
import Image from "next/image";
import logoIcon from "../../public/images/svg/logi-icon.svg";
import starImg from "../../public/images/svg/star-img.svg";
import stackTable from "../../public/images/png/table-img.png";
import bestWayToLearn from "../../public/images/png/best-way-to-learn-img.png";
import heroImg from "../../public/images/png/hero-right-img.png";
import CommonBtn from "./components/common/CommonBtn";
import WeStarted from "./components/WeStarted";
import { HomeCardData } from "./components/common/Helper";
import appStore from "../../public/images/png/app-store.png";
import table_mobile from "../../public/images/png/table_mobile.png";
import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";
import {
  BookIcons,
  CommentIcons,
  PensilIcons,
  RightTikkIcons,
  TrackIcons,
} from "./components/common/Icons";

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
      <section className="bg_liner_section pt-12 lg:pt-14 pb-10 ">
        <div className=" max-2xl:max-w-[1504px] md:px-10 mx-auto px-5">
          <div className="flex flex-wrap items-center justify-center bg-[#fff] border border-[#e2e8f0] rounded-[40px] px-4 sm:px-16">
            <div
              data-aos="fade-up"
              className="w-full lg:w-7/12 lg:pe-10 pt-[33px] sm:pt-10 lg:pt-0  animate-bottom "
            >
              {/* Left Content */}
              <div className="space-y-2 px-2 md:p-5 pt-0">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="700"
                  src={logoIcon}
                  alt="small illustration"
                 
                  className="mb-6 w-[50px] md:w-14"
                />

                <h1
                  data-aos="fade-up"
                  className="ff_general_semibold text-[32px] sm:text-4xl md:text-5xl xl:text-[56px] font-semibold text-[black] leading-[100%] sm:!leading-[150%]"
                >
                  The ✨
                  <span className="bg-yellow_gradient bg-clip-text text-transparent">
                    magical
                  </span>
                  ✨ new way to learn German
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="text-[#4b5563] text-base lg:text-xl font-normal pt-4"
                >
                  Learn from 200+ lessons from A1 to B2 and practice your new
                  skills online. Üben is your personalized AI language tutor
                  that gets you writing and speaking{" "}
                  <span className="ff_general_semibold">better</span> and{" "}
                  <span className="ff_general_semibold">faster</span>.
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <CommonBtn
                    path="https://apps.apple.com/us/app/learn-german-%C3%BCben/id6504501329"
                    btnName="Get Started"
                    btnStyling="text-[#292524] bg-[#fcd34d] hover:bg-[#fcd34d]/65 w-full !py-3 !font-medium !text-base sm:w-[130px] ff_general_medium mt-6"
                  />
                </div>
                <p
                  data-aos="fade-up"
                  // data-aos-duration="1000"
                  data-aos-delay="300"
                  data-aos-offset="100"
                  className=" text-sm text-[#6b7280] text-center md:text-start"
                >
                  Free for 7 days. Then billed annually.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div
              data-aos="fade-up"
              className="w-full sm:w-9/12 lg:w-5/12 relative  animate-bottom"
            >
              <Image
                src={heroImg}
                alt="main hero image"
              
                className="w-[95%] mx-auto"
                loading="lazy"
              />
            </div> 
          </div>
        </div>
      </section>

      {/* hero bottom cart */}
      <section className="py-5 md:py-10">
        <div className="max-2xl:max-w-[1504px] md:px-10 mx-auto px-5 ">
          <div className="flex flex-wrap lg:justify-center w-full">
            {HomeCardData.map((items, index) => (
              <div
                key={index}
                className={` w-full sm:w-1/2 lg:w-1/3 sm:px-4 lg:px-6 mt-5 `}
              >
                <div
                 
                  className="border border-[#e2e8f0] rounded-2xl lg:rounded-[40px] bg-homeCard_gradient p-5 lg:p-10 h-full flex flex-col justify-between"
                >
                  <p className="text-[#292524] text-sm  lg:text-xl w-[90%] sm:w-full">
                    {items.description}
                  </p>
                  <div className="flex justify-between items-center mt-8">
                    <h3 className="text-black text-base lg:text-lg ff_general_medium">
                      {items.name}
                    </h3>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, index) => (
                        <div key={index}>
                          <Image
                            src={starImg}
                            alt="Star"
                            width={20}
                            height={20}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* bext way to learn */}
      <section className="pt-[82px] pb-16">
        <div className="max-2xl:max-w-[1504px] md:px-10 mx-auto px-5">
          <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between gap-10 md:gap-0">
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              className="w-full sm:w-8/12 lg:w-5-/12 flex flex-col items-center animate-bottom"
            >
              <Image className="w-[504px]" src={bestWayToLearn} alt="phone2" />
              <div className="flex justify-start mt-6">
                <Link
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  href="https://apps.apple.com/us/app/learn-german-uben/id6504501329"
                  target="_black"
                  className="section2_video-link play_store w-inline-block animate-bottom"
                >
                  <Image
                    src={appStore}
                  
                    alt="Google Play Link"
                    className=" w-[167px] md:w-[200px] md:h-[56px]"
                  />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:7/12">
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="300"
                data-aos-easing="ease-in-sine"
                className="animate-bottom xl:ps-6"
              >
                <h2 className="ff_general_semibold text-[32px] md:text-4xl lg:text-[40px] text-black font-semibold leading-[120%] tracking-tight">
                  The best way to learn a language is through practice
                </h2>
                <div className="flex items-start mt-6 lg:mt-10">
                  <div>
                    <PensilIcons />
                  </div>
                  <p className="text-[16px] md:text-[20px] text-[#4b5563] ms-2">
                    Practice personalized exercises that get you speaking and
                    writing German
                  </p>
                </div>

                <div className="flex items-start  mt-4">
                  <div>
                    <CommentIcons />
                  </div>
                  <p className="text-[16px] md:text-[20px] text-[#4b5563] ms-2">
                    Get feedback on your work and explanations for how to
                    improve
                  </p>
                </div>
                <div className="flex items-start  mt-4">
                  <div>
                    <TrackIcons />
                  </div>
                  <p className="text-[16px] md:text-[20px] text-[#4b5563] ms-2">
                    Track your progress and be amazed by what you learn
                  </p>
                </div>
                <div className="flex items-start  mt-4">
                  <div>
                    <BookIcons />
                  </div>
                  <p className="text-[16px] md:text-[20px] text-[#4b5563] ms-2">
                    Ace German grammar including noun genders, adjective
                    declensions and 140 other topics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We stack up well  */}
      <section className="py-16 sm:py-16 bg-white lg:mt-[64px]">
        <div className="max-2xl:max-w-[1504px] md:px-10 mx-auto px-5 lg:px-0">
          <div className="flex flex-col justify-center items-center gap-8 w-full md:w-3/4 mx-auto">
            <h2
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              className="ff_general_semibold text-3xl md:text-4xl lg:text-[40px] text-black font-semibold text-center animate-bottom"
            >
              We stack up well
            </h2>
            {/* Desktop Image */}
            <div className="hidden lg:flex">
              <Image
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className="w-[900px] mx-auto animate-bottom"
                src={stackTable}
                alt="img"
                loading="lazy"
              />
            </div>
            <div className=" lg:hidden">
              <Image
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className="animate-bottom"
                src={table_mobile}
                alt="button"
                loading="lazy"
              />
            </div>
            <div className="flex items-center flex-col gap-5 max-w-[630px]">
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className="text-base lg:text-xl font-normal text-center text-[#4b5563] animate-bottom"
              >
                We’re confident you’ll like it. So we’re giving you 7-day
                unlimited access for free.
              </p>

              <CommonBtn
                path="https://apps.apple.com/us/app/learn-german-%C3%BCben/id6504501329"
                btnName="Start learning for free now"
                btnStyling="text-[#292524] bg-[#fcd34d] hover:bg-[#fcd34d]/65 !text-base !font-medium px-5 !py-3 inline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}

      <WeStarted />
    </div>
  );
}
