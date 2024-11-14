import React from "react";
import Link from "next/link";


const CommonBtn = ({ btnName, btnStyling,path }) => {
  return (
    <div>
      <Link target="_blank" href={`https://apps.apple.com/us/app/learn-german-%C3%BCben/id6504501329}`}
        className={` font-normal text-sm md:text-base  flex justify-center items-center rounded-[50px] py-[6px] sm:py-2.5 px-3 sm:px-4 duration-300 ${btnStyling} ff_general_medium tracking-[0.5px]`}
      >
        {btnName}
      </Link>
    </div>
  );
};

export default CommonBtn;
