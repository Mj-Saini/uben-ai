import Image from "next/image";
import Link from "next/link";
import logoIcon from '../../public/images/svg/logi-icon.svg'
import heroImg from '../../public/images/png/hero-right-img.png'


export default function Home() {
  return (
    <div >
     {/*  HERO SECTION*/}
     <section className="bg-[#F9FBFF] pt-32">
      <div className="container max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center bg-[#fff] border border-[#e2e8f0] rounded-[40px] px-16">
       <div className="w-full lg:w-7/12 pe-10">
           {/* Left Content */}
           <div className="hero_content space-y-4">
            <div className="hero_small-image">
              <Image
                src={logoIcon}
                alt="small illustration"
                width={100} 
                height={100} 
                className="image"
              />
            </div>
            <h1 className=" text-4xl md:text-5xl lg:text-[56px] font-semibold text-[black] !leading-[150%]">
              The ✨<span className="span_gradient bg-yellow_gradient bg-clip-text text-transparent">magical</span>✨ new way to learn German
            </h1>
            <p className="text-color-riverbed text-lg text-gray-600">
              Learn from 200+ lessons from A1 to B2 and practice your new skills online. Üben is your personalized AI
              language tutor that gets you writing and speaking{" "}
              <span className="font-semibold">better</span> and <span className="font-semibold">faster</span>.
            </p>
            <div className="button-text_wrapper flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 items-center">
              <Link
                href=""
                target="_blank"
              >
              
                  Get Started
              
              </Link>
              <p className="text-color-palesky text-sm text-gray-500">Free for 7 days. Then billed annually.</p>
            </div>
          </div>
       </div>

          {/* Right Image */}
          <div className="w-full sm:w-9/12 lg:w-5/12 relative">
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
    </div>
  );
}
