import React from "react";
import Image from "next/image";
import { pacifico, rubik } from "@/font/Font";
import { FiPlayCircle } from "react-icons/fi";

export default function HeroSection() {
  const comment: { number: string; caption: string }[] = [
    { number: "100+", caption: "Talented Tutors" },
    { number: "1000+", caption: "Students" },
    { number: "4.8⭐", caption: "Rating" },
    { number: "20+", caption: "Cooking Categories" },
  ];

  return (
    <>
      <div className="top-[115px] relative">
        <div className="lg:flex lg:flex-row-reverse lg:mr-10">
          <div className="relative w-full h-[281px] md:rounded-[32px] overflow-hidden md:w-[586px] md:h-[385px] place-self-center lg:w-1/2 lg:[407px]">
            <Image
              src="/images/hero.jpeg"
              alt="Hero Section"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="md:flex md:ml-10">
            <div className="relative w-[325px] h-[200px] bg-[#FFDBB8] rounded-[16px] bottom-[90px] place-self-center lg:hidden border border-[#D27722]">
              <div className="flex gap-5 pt-6 px-10">
                <div className="relative h-[65px] w-[65px] rounded-[45px] overflow-hidden">
                  <Image
                    src="/images/user.jpeg"
                    alt="User"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`font-[500] place-content-center ${rubik.className}`}
                >
                  <p>David Mitchell</p>
                  <p>4.8⭐</p>
                </div>
              </div>
              <p className={`pt-2 px-10 text-sm ${rubik.className}`}>
                I've discovered a whole new world of flavors. Learning to cook
                has never been this fun and engaging!
              </p>
            </div>
          </div>
          <div className="relative text-center w-full h-[446px] lg:text-left lg:mt-8 place-self-center lg:w-1/2 lg:ml-10">
            <h1 className="text-[32px] md:text-[50px] font-[700]   ">
              Master the Art of Cooking with{" "}
              <span className={`text-[#D27722] ${pacifico.className}`}>
                Experts
              </span>{" "}
              Worldwide{" "}
            </h1>
            <p className={`pt-6 ${rubik.className} md:text-[16px] lg:text-left px-4`}>
              Experience the joy of cooking in a whole new way with our engaging
              online cooking classes. Learn from the chefs, share your unique
              culinary knowledge, and join our growing foodie community. With
              COOK, learning, and teaching becomes a shared passion.
            </p>
            <div className="place-self-center lg:place-self-start ">
              <button
                className={`bg-white text-black ${rubik.className} pt-8 flex justify-center items-center lg:place-self-start place-self-center gap-2 lg:hidden`}
              >
                <FiPlayCircle className="text-[#D27722]" />
                Watch a video
              </button>
              <button
                className={`bg-white text-black ${rubik.className} pt-8 justify-center items-center lg:place-self-start place-self-center gap-2 hidden lg:flex`}
              >
                <FiPlayCircle className="text-[#D27722]" />
                Learn more in the COOK video
              </button>
              <div className="justify-around flex flex-col md:block md:space-x-3">
                <button className="w-[326px] rounded-[4px] h-[39px] bg-[#D27722] mt-3 text-white md:w-[153px] ">
                  Find Your Tutor
                </button>
                <button className="w-[326px] rounded-[4px] h-[39px] text-[#D27722] mt-3 bg-white border border-[#D27722] md:w-[153px]">
                  Join Our Chefs
                </button>
              </div>
        </div>

            </div>
          </div>

          <div
            className={`bg-[#FFFDF4] h-[604px] w-[326px] mt-20 place-self-center ${rubik.className}  grid md:flex gap-10 md:w-[738px] md:h-[143px] md:justify-center md:items-center text-center lg:w-full justify-evenly lg:gap-20 p-4 border border-[#D27722]`}
          >
            {comment.map((content, index) => (
              <div key={index}>
                <p className="text-[40px] font-[700] text-[#D27722]">
                  {content.number}
                </p>
                <p className="text-[16px] font-[400]">{content.caption}</p>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}
