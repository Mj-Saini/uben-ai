'use client'
import Image from "next/image";
import WeStarted from "../components/WeStarted";
import mainFeaturePhnImg from '../../../public/images/png/phone.png'
import whyChoosePhnImg from '../../../public/images/png/phone2.png'
import AOS from "aos";
import { useEffect } from "react";
import { RightTikkIcons, Yellow4SquareIcons } from "../components/common/Icons";

export default function Home() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once
        });
      }, []);

  return (
    <div className="">
      {/*  HERO SECTION*/}
      <section className="bg-aboutHero_gradient pt-36 pb-12">
        <div className="container max-w-[1360px] mx-auto px-4 ">
          <h2   data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine" className="text-sm font-semibold text-red-600 mb-2 text-center">Why Üben?</h2>
          <h1   data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="200"
              data-aos-easing="ease-in-sine" className="text-[15px] lg:text-[56px] font-bold text-gray-900 mb-4 leading-[150%] text-center ff_general_semibold">
            We believe that language learning should be interactive,
            comprehensive, and practical.
          </h1>
    
        <p data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="200"
              data-aos-easing="ease-in-sine" className="text-gray-500 mb-6 lg:mb-12 px-10 mt-8 lg:mt-14 text-[14px] lg:text-[20px]">
          Üben was founded in 2024 by a group who saw the potential of AI to
          revolutionize language learning.
        </p>
      
     
        </div>
      </section>


  

      {/* Get Started */}

      <WeStarted />
    </div>
  );
}
