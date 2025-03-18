import React from "react";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="h-[115px] w-full border">
        <div className="flex pt-[29px] pl-[32px] pr-[32px] gap-[32px] justify-between ">
          <div className="flex gap-10">
            <p className="text-[#D27722] font-[700] text-[32px]">COOK</p>
            {/* large screen components */}
            <div className="hidden lg:flex space-x-6 justify-center
            items-center">
            <p>Cooking Classes</p>
            <p>Become A Chef</p>
            <p>Group Cooking</p>
            </div>
          
          </div>

          {/* midscreen navbar components */}
          <div className="hidden md:flex gap-5 justify-center items-center">
            <p>Eng</p>
            <p>USD</p>
            <button className="text-white bg-[#D27722] w-[131px] h-[41px]">
              Log In
            </button>
          </div>
          {/* mobile navbar components */}
          <div className="w-[42px] h-[42px] bg-[#D27722] place-content-center rounded-[12px] md:hidden">
            <IoMenuOutline className="text-[#ffdcb4] justify-self-center text-2xl " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
