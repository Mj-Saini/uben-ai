"use client";
import Image from "next/image";
import WeStarted from "../components/WeStarted";
import mainFeaturePhnImg from "../../../public/images/png/phone.png";
import whyChoosePhnImg from "../../../public/images/png/phone2.png";
import { useEffect, useRef } from "react";
import { RightTikkIcons, Yellow4SquareIcons } from "../components/common/Icons";

export default function Home() {
  const animateRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-top"); 
          }
        });
      },
      { threshold: 0.1 }
    );

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
    <div className="overflow-hidden">
      {/*  HERO SECTION*/}
      <section className="bg-aboutHero_gradient pt-24 md:pt-28 pb-12">
        <div className="container max-w-[1360px] mx-auto px-4 ">
          <h2 className="text-base ff_general_medium text-[#FA421D] mb-2 text-center tracking-[0.5px] animate-bottom">
            Why Üben?
          </h2>
          <h1
            ref={(el) => animateRefs.current.push(el)}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-[56px] text-gray-900 mb-4 lg:leading-[150%] text-center ff_general_semibold animate-bottom"
          >
            We believe that language learning should be interactive,
            comprehensive, and practical.
          </h1>

          <p
                        ref={(el) => animateRefs.current.push(el)}

            className="text-[#4b5563] mb-6 lg:mb-12 mt-8 text-[14px] lg:text-[20px] text-center animate-left"
          >
            Üben was founded in 2024 by a group who saw the potential of AI to
            revolutionize language learning.
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center">
            <div
                            ref={(el) => animateRefs.current.push(el)}

              className="w-full"
            >
              <div className="flex flex-col justify-center md:justify-start mb-2 animate-bottom">
                <Yellow4SquareIcons />
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
                            ref={(el) => animateRefs.current.push(el)}

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
                       ref={(el) => animateRefs.current.push(el)}

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
      <div className="container max-w-[1360px] mx-auto px-4 mt-5">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="w-full sm:w-9/12 md:w-7/12 lg:pe-10">
            <div
                       ref={(el) => animateRefs.current.push(el)}

              className="bg-aboutHero_gradient border border-[#e2e8f0]  rounded-[40px] p-5 sm:px-[30px] sm:py-[30px] lg:px-[64px] lg:py-[64px] animate-left"
            >
              <h5 className="ff_general_semibold leading-[150%] text-lg lg:text-xl">
                Main Features
              </h5>
              <div className="flex items-start  mt-4">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-[12px] lg:text-[20px] text-[#000000] ms-2">
                  AI-Powered Personalized Learning: Adaptive exercises that
                  evolve with your self-paced progress.
                </p>
              </div>
              <div className="flex items-start mt-4">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-[12px] lg:text-[20px] text-[#000000] ms-2">
                  24/7 Tutoring: Access to Tutor at anytime of the day, any day
                  of the week.
                </p>
              </div>
              <div className="flex items-start mt-4">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-[12px] lg:text-[20px] text-[#000000] ms-2">
                  Comprehensive Grammar and Vocabulary: Focused lessons on
                  grammar and common vocabulary.
                </p>
              </div>
              <div className="flex items-start mt-4">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-[12px] lg:text-[20px] text-[#000000] ms-2">
                  CEFR Test Preparation: Targeted practice for CEFR-aligned
                  tests like Goethe&apos;s.
                </p>
              </div>
            </div>
          </div>
          <div
                        ref={(el) => animateRefs.current.push(el)}

            className="w-full sm:w-8/12 lg:w-5/12 animate-right"
          >
            <Image
              className="w-full lg:w-[565px]"
              src={mainFeaturePhnImg}
              alt="phone"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between">
          <div
                         ref={(el) => animateRefs.current.push(el)}

            className="w-full sm:w-8/12 lg:w-5/12 animate-left"
          >
            <Image className="w-[565px]" src={whyChoosePhnImg} alt="phone2" />
          </div>
          <div className="w-full sm:w-9/12 lg:w-7/12 lg:ps-10 ">
            <div
                            ref={(el) => animateRefs.current.push(el)}

              className="bg-aboutHero_gradient border border-[#e2e8f0]  rounded-[40px] p-5 sm:px-[30px] sm:py-[30px] lg:px-[64px] lg:py-[64px] animate-right"
            >
              <h5 className="font-semibold leading-[150%] text-[20px]">
                Why Choose Us
              </h5>
              <div className="flex items-start mt-4">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-[12px] lg:text-[20px] text-[#000000] ms-2">
                  Innovative Technology: Leveraging AI to create a truly
                  personalized learning experience.
                </p>
              </div>

              <div className="flex items-start  mt-4">
                <span>
                  <RightTikkIcons />
                </span>
                <p className="text-[12px] lg:text-[20px] text-[#000000] ms-2">
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
      {/* done */}
    </div>
  );
}
