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
import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";
import { BookIcons, CommentIcons, PensilIcons, RightTikkIcons, TrackIcons } from "./components/common/Icons";

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
      <section className="bg-bg_gradient pt-32 pb-10">
        <div className="container max-w-[1360px] mx-auto px-4 lg:px-0">
          <div className="flex flex-wrap items-center justify-center bg-[#fff] border border-[#e2e8f0] rounded-[40px] px-4 sm:px-16">
            <div
              data-aos="fade-right"
              className="w-full lg:w-7/12 lg:pe-10 pt-10 lg:pt-0"
            >
              {/* Left Content */}
              <div className="space-y-4">
                <Image
                  src={logoIcon}
                  alt="small illustration"
                  width={48}
                  height={48}
                  className="image"
                />

                <h1 className="ff_general_semibold text-3xl sm:text-4xl md:text-5xl xl:text-[56px] font-semibold text-[black] sm:!leading-[150%]">
                  The ✨
                  <span className="bg-yellow_gradient bg-clip-text text-transparent">
                    magical
                  </span>
                  ✨ new way to learn German
                </h1>
                <p className="text-[#4b5563] text-base lg:text-xl font-normal">
                  Learn from 200+ lessons from A1 to B2 and practice your new
                  skills online. Üben is your personalized AI language tutor
                  that gets you writing and speaking{" "}
                  <span className="font-semibold">better</span> and{" "}
                  <span className="font-semibold">faster</span>.
                </p>

                <CommonBtn
                  path="/"
                  btnName="Get Started"
                  btnStyling="text-[#292524] bg-[#fcd34d] !font-medium !text-base w-[130px] ff_general_medium "
                />
                <p className=" text-sm text-[#6b7280]">
                  Free for 7 days. Then billed annually.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div
              data-aos="fade-left"
              className="w-full sm:w-9/12 lg:w-5/12 relative"
            >
              <Image
                src={heroImg}
                alt="main hero image"
                width={1000} // adjust as needed
                height={1000} // adjust as needed
                className="hero_image w-full h-auto"
                sizes="(max-width: 991px) 100vw, (max-width: 3125px) 32vw, 1000px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* hero bottom cart */}
      <section className="py-10">
        <div className="container max-w-[1360px] mx-auto px-4">
          <div className="flex flex-wrap justify-center w-full">
            {HomeCardData.map((items, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 sm:px-3 mt-5"
              >
                <div
                  data-aos="flip-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="border border-[#e2e8f0] rounded-[40px] bg-homeCard_gradient p-5 lg:p-10"
                >
                  <p className="text-[#292524] text-lg lg:text-xl">
                    I downloaded several apps and kept only the best ones. And I
                    think Üben is one of them.
                  </p>
                  <div className="flex justify-between items-center mt-8">
                    <h3 className="text-[#292524] text-base lg:text-lg">
                      Abir, Morocco
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <div key={index}>
                          <Image
                            src={starImg}
                            alt="Star"
                            width={16}
                            height={16}
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
      <section className="pt-12">
        <div className="container max-w-[1360px] mx-auto px-4">
          <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between">
            <div   data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine" className="w-full sm:w-8/12 lg:w-5-/12">
              <Image className="w-[565px]" src={bestWayToLearn} alt="phone2" />
            </div>
            <div className="w-full sm:w-9/12 lg:w-7/12">
              <div   data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
                <h2 className="ff_general_semibold text-3xl md:text-4xl lg:text-[40px] text-black font-semibold sm:!leading-[150%]">
                The best way to learn a language is through practice
                </h2>
                <div className="flex items-start  mt-4">
                  <PensilIcons />
                  <p className="text-[12px] lg:text-[20px] text-[#000000] ms-2">
                  Practice personalized exercises that get you speaking and writing German
                  </p>
                </div>

                <div className="flex items-start  mt-4">
                  <CommentIcons />
                  <p className="text-[12px] lg:text-[20px] text-[#000000] ms-2">
                  Get feedback on your work and explanations for how to improve
                  </p>
                </div>
                <div className="flex items-start  mt-4">
                  <TrackIcons />
                  <p className="text-[12px] lg:text-[20px] text-[#000000] ms-2">
                  Track your progress and be amazed by what you learn
                  </p>
                </div>
                <div className="flex items-start  mt-4">
                 <span>
                 <BookIcons />
                 </span>
                  <p className="text-[12px] lg:text-[20px] text-[#000000] ms-2">
                  Ace German grammar including noun genders, adjective declensions and 140 other topics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We stack up well  */}
      <section className="py-16 bg-white">
        <div className="container max-w-[1360px] mx-auto px-4 lg:px-0">
          <div className="flex flex-col justify-center items-center gap-8 w-full md:w-3/4 mx-auto">
            <h2
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="ff_general_semibold text-3xl md:text-4xl lg:text-[40px] text-black font-semibold text-center"
            >
              We stack up well
            </h2>
            {/* Desktop Image */}
            <Image
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className=""
              src={stackTable}
              alt=""
              loading="lazy"
            />

            <div className="flex items-center flex-col gap-5 max-w-[630px]">
              <p
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="text-lg lg:text-xl font-normal text-center text-[#4b5563]"
              >
                We’re confident you’ll like it. So we’re giving you 7-day
                unlimited access for free.
              </p>
              <Link
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                href="https://play.google.com/store/apps/details?id=com.ubenai.android&amp;pli=1"
                className="button get-started w-inline-block"
                target="_blank"
              >
                <CommonBtn
                  path="/"
                  btnName="Start learning for free now"
                  btnStyling="text-black bg-[#fcd34d] !text-base !font-medium w-[240px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}

      <WeStarted />
    </div>
  );
}
