"use client";
import Image from "next/image";
import WeStarted from "../components/WeStarted";
import mainFeaturePhnImg from "../../../public/images/png/phone.png";
import whyChoosePhnImg from "../../../public/images/png/phone2.png";
import AOS from "aos";
import { useEffect } from "react";
import { RightTikkIcons, Yellow4SquareIcons } from "../components/common/Icons";

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
      <section className="bg-aboutHero_gradient pt-12 md:pt-20 xl:pt-0 pb-12 min-h-screen flex">
        <div className="max-2xl:max-w-[1504px] md:px-10 mx-auto px-5 grow flex flex-col justify-center">
          <h2
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="text-xs md:text-base ff_general_medium text-[#FA421D] mb-2 text-start lg:text-center tracking-[0.5px] animate-bottom"
          >
            Why Üben?
          </h2>
          <h1
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
            className="text-[32px] md:text-[56px] text-gray-900 mb-4 md:leading-[150%] text-start lg:text-center ff_general_semibold animate-bottom leading-[150%]"
          >
            We believe that language learning should be interactive,
            comprehensive, and practical.
          </h1>

          <p
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
            className="text-[#4b5563] my-6 lg:mb-14 lg:mt-12 text-base md:text-[20px] animate-bottom"
          >
            Üben was founded in 2024 by a group who saw the potential of AI to
            revolutionize language learning.
          </p>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center">
            <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="300"
              className="w-full animate-bottom  "
            >
              <div className="flex flex-col justify-center md:justify-start mb-2 ">
                <span>
                  <Yellow4SquareIcons />
                </span>
                <h3 className="text-xl lg:text-2xl text-[#000000] text-left font-semibold mt-[16px] ff_general_semibold">
                  Interactive
                </h3>
              </div>
              <p className="text-[#4b5563]  text-lg lg:text-xl">
                Feedback should be instantaneous, lesson plans personalized, and
                content engaging.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="300"
              className="w-full animate-bottom"
            >
              <div className="flex flex-col justify-center md:justify-start mb-2">
                <Yellow4SquareIcons />
                <h3 className=" text-xl lg:text-2xl text-[#000000] text-left font-semibold mt-3 ff_general_semibold">
                  Comprehensive
                </h3>
              </div>
              <p className="text-[#4b5563]  text-lg lg:text-xl">
                Learning a language is about more than memorizing vocabulary
                lists or learning canned phrases.
              </p>
              <p className="text-[#4b5563] mt-3  text-lg lg:text-xl">
                Üben emphasizes learning full sentences in real contexts.
              </p>
            </div>

            <div
               data-aos="fade-up"
               data-aos-offset="100"
               data-aos-delay="300"
              className="w-full animate-bottom"
            >
              <div className="flex flex-col justify-center md:justify-start mb-2">
                <Yellow4SquareIcons />
                <h3 className="text-xl lg:text-2xl text-[#000000] text-left font-semibold mt-3 ff_general_semibold">
                  Practical
                </h3>
              </div>
              <p className="text-[#4b5563] text-lg lg:text-xl">
                People are busy. Üben is designed to help you learn efficiently
                by incorporating the latest research on language acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Main Features */}
      <div className="max-2xl:max-w-[1504px] py-16 md:px-10 mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between 2xl:min-h-screen">
          <div className="w-full lg:w-7/12 lg:pe-10">
            <div
            
              className="bg-aboutHero_gradient border border-[#e2e8f0]  rounded-[40px] p-5 sm:px-[30px] sm:py-[30px] lg:px-[64px] lg:py-[64px] "
            >
              <h5
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="100" className="ff_general_semibold leading-[150%] text-lg lg:text-xl animate-bottom">
                Main Features
              </h5>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="100" className="flex items-start  mt-4 animate-bottom">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-base md:text-[20px] text-[#000000] ms-2">
                  AI-Powered Personalized Learning: Adaptive exercises that
                  evolve with your self-paced progress.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="100" className="flex items-start mt-4 animate-bottom">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-base md:text-[20px] text-[#000000] ms-2">
                  24/7 Tutoring: Access to Tutor at anytime of the day, any day
                  of the week.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="100" className="flex items-start mt-4 animate-bottom">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-base md:text-[20px] text-[#000000] ms-2">
                  Comprehensive Grammar and Vocabulary: Focused lessons on
                  grammar and common vocabulary.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="100" className="flex items-start mt-4 animate-bottom">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-base md:text-[20px] text-[#000000] ms-2">
                  CEFR Test Preparation: Targeted practice for CEFR-aligned
                  tests like Goethe&apos;s.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            className="w-full lg:w-5/12 animate-bottom"
          >
            <Image
              className="w-full lg:w-[565px] 2xl:w-full"
              src={mainFeaturePhnImg}
              alt="phone"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between 2xl:min-h-screen">
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
            className="w-full lg:w-5/12 animate-bottom"
          >
            <Image className="w-[565px] 2xl:w-full mx-auto" src={whyChoosePhnImg} alt="phone2" />
          </div>
          <div className="w-full lg:w-7/12 lg:ps-10 ">
            <div
              
              className="bg-aboutHero_gradient border border-[#e2e8f0]  rounded-[40px] p-5 sm:px-[30px] sm:py-[30px] lg:px-[64px] lg:py-[64px]"
            >
              <h5 data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100" className="font-semibold leading-[150%] text-[20px] animate-bottom">
                Why Choose Us
              </h5>
              <div data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100" className="flex items-start mt-4 animate-bottom">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-base md:text-[20px] text-[#000000] ms-2">
                  Innovative Technology: Leveraging AI to create a truly
                  personalized learning experience.
                </p>
              </div>

              <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100" className="flex items-start  mt-4 animate-bottom">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-base md:text-[20px] text-[#000000] ms-2">
                  Expert-Designed Curriculum: Lessons crafted by experienced
                  educators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started */}

      <WeStarted />
    </div>
  );
}
