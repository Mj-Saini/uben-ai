"use client";
import Image from "next/image";
import WeStarted from "../components/WeStarted";
import AOS from "aos";
import { useEffect, useState } from "react";
import { PricingTikkIcons } from "../components/common/Icons";
import CommonBtn from "../components/common/CommonBtn";
import saveImg from "../../../public/images/png/save-img.png";

export default function Home() {
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 300, // Animation duration
      once: true, // Whether animation should happen only once
    });

    async function Feactdata() {
      let fetchdata = await fetch("https://ipapi.co/json/");
      try {
        let chngjson = await fetchdata.json();
        setCountryName(chngjson.currency);
        console.log("-------------------------------");
      } catch (error) {
        setCountryName("USD");
      }
    }
    Feactdata();
  }, []);

  const priceData = {
    annual: {
      USD: 99.99,
      AUD: 149.99,
      EUR: 99.99,
      BRL: 499.9,
      BGN: 199.99,
      CAD: 129.99,
      CLP: 99990,
      CNY: 698.0,
      COP: 499900.0,
      CZK: 2790.0,
      DKK: 899.0,
      EGP: 4999.99,
      HKD: 788.0,
      HUF: 44990,
      INR: 9900.0,
      IDR: 1699000,
      ILS: 349.9,
      JPY: 15000,
      KZT: 49990.0,
      KRW: 149000,
      MYR: 499.9,
      MXN: 1999.0,
      NZD: 199.99,
      NGN: 149900.0,
      NOK: 1290.0,
      PKR: 24900.0,
      PEN: 399.9,
      PHP: 4990.0,
      PLN: 499.99,
      QAR: 399.99,
      RON: 499.99,
      RUB: 8990.0,
      SAR: 399.99,
      SGD: 149.98,
      ZAR: 1999.99,
      SEK: 1295.0,
      CHF: 100.0,
      TWD: 2990,
      THB: 3990.0,
      TRY: 3999.99,
      AED: 399.99,
      GBP: 99.99,
      VND: 2499000,
    },
    // Monthly prices
    monthly: {
      USD: 14.99,
      AUD: 22.99,
      EUR: 17.99,
      BRL: 79.9,
      BGN: 29.99,
      CAD: 19.99,
      CLP: 14990,
      CNY: 98.0,
      COP: 69900.0,
      CZK: 399.0,
      DKK: 129.0,
      EGP: 799.99,
      HKD: 118.0,
      HUF: 6990,
      INR: 1499.0,
      IDR: 249000,
      ILS: 49.9,
      JPY: 2200,
      KZT: 7990.0,
      KRW: 22000,
      MYR: 69.9,
      MXN: 299.0,
      NZD: 29.99,
      NGN: 24900.0,
      NOK: 199.0,
      PKR: 3900.0,
      PEN: 59.9,
      PHP: 799.0,
      PLN: 79.99,
      QAR: 49.99,
      RON: 79.99,
      RUB: 1290.0,
      SAR: 59.99,
      SGD: 19.98,
      ZAR: 299.99,
      SEK: 199.0,
      CHF: 15.0,
      TWD: 490,
      THB: 499.0,
      TRY: 599.99,
      AED: 59.99,
      GBP: 14.99,
      VND: 399000,
    },
  };
  const currencySymbols = {
    USD: "$",
    AUD: "A$",
    EUR: "€",
    BRL: "R$",
    BGN: "лв",
    CAD: "C$",
    CLP: "CLP",
    CNY: "¥",
    COP: "COP",
    CZK: "Kč",
    DKK: "kr",
    EGP: "E£",
    HKD: "HK$",
    HUF: "Ft",
    INR: "₹",
    IDR: "Rp",
    ILS: "₪",
    JPY: "¥",
    KZT: "₸",
    KRW: "₩",
    MYR: "RM",
    MXN: "MX$",
    NZD: "NZ$",
    NGN: "₦",
    NOK: "kr",
    PKR: "₨",
    PEN: "S/",
    PHP: "₱",
    PLN: "zł",
    QAR: "QR",
    RON: "lei",
    RUB: "₽",
    SAR: "SR",
    SGD: "S$",
    ZAR: "R",
    SEK: "kr",
    CHF: "CHF",
    TWD: "NT$",
    THB: "฿",
    TRY: "₺",
    AED: "AED",
    GBP: "£",
    VND: "₫",
  };

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
              <div className=" bg-white border border-gray-200 rounded-3xl shadow-lg pt-6">
                <div className=" p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl lg:text-2xl text-[#323333] ff_general_semibold">
                      Monthly plan
                    </h3>
                    <span className="px-2.5 py-0.5 text-xs lg:text-sm ff_general_semibold border border-yellow-500 text-yellow-600 bg-yellow-100 rounded-full">
                      Popular
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex">
                      <div className="mt-3">
                        <span className="text-2xl sm:text-3xl lg:text-4xl text-[#323333] ff_general_semibold leading-[120%]">
                          {currencySymbols[countryName]}
                        </span>
                      </div>
                      <div className="flex items-end">
                        <span className="text-3xl sm:text-4xl lg:text-6xl ff_general_semibold leading-[120%] ps-2 ff_general_semibold">
                          {priceData.monthly[countryName]}
                        </span>
                        <span className="text-[#6b7280] text-xs sm:text-sm lg:text-base mb-2">
                          {" "}
                          /month
                        </span>
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
                </div>
                <div className="py-5 bg-[#f9fafb] rounded-b-3xl px-6">
                  <CommonBtn
                    path="https://apps.apple.com/us/app/learn-german-%C3%BCben/id6504501329"
                    btnName="Get started"
                    btnStyling="text-black bg-[#fcd34d] !font-medium"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-5/12 mt-14 md:mt-0 md:p-3 relative">
              <div className=" bg-white border border-gray-200 rounded-3xl shadow-lg pt-6">
                <div className="  p-6">
                  <Image
                    className={`w-28 sm:w-32 md:w-[180px] absolute -top-8 right-0`}
                    src={saveImg}
                    alt="logo"
                  />
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl lg:text-2xl text-[#323333] ff_general_semibold">
                      Yearly plan
                    </h3>
                  </div>

                  <div className="mt-4">
                    <div className="flex">
                      <div className="mt-3">
                        <span className="text-2xl sm:text-3xl lg:text-4xl ff_general_semibold leading-[120%]">
                          {currencySymbols[countryName]}
                        </span>
                      </div>
                      <div className="flex items-end">
                        <span className="text-3xl sm:text-4xl lg:text-6xl text-[#323333] ff_general_semibold leading-[120%] ps-2 ff_general_semibold">
                          {priceData.annual[countryName]}
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

                </div>
                  <div  className="py-5 bg-[#f9fafb] rounded-b-3xl px-6">
                    <CommonBtn
                      path="https://apps.apple.com/us/app/learn-german-%C3%BCben/id6504501329"
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
