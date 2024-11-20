import React from "react";
import Link from "next/link";


const CommonBtn = ({ btnName, btnStyling,path }) => {
  return (
    <>
      <Link href={`${path}`}
      target="_blank"
        className={` font-normal text-base flex justify-center items-center rounded-[50px] py-[6px] sm:py-3 px-3 sm:px-4 duration-300 ${btnStyling} ff_general_medium`}
      >
        {btnName}
      </Link>
    </>
  );
};

export default CommonBtn;
