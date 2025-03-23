import { rubik } from "@/font/Font";
import Image from "next/image";
import React from "react";

export default function HowItWorks() {
  const works = [
    {
      img: "/images/groups.png",
      topic: "Explore Our Culinary Experts",
      content:
        "Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.",
    },
    {
      img: "/images/profile.png",
      topic: "Select Your Perfect Match",
      content:
        "Once you've explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier.",
    },
    {
      img: "/images/call.png",
      topic: "Enjoy Your Interactive Lesson",
      content:
        "Step into your online kitchen and start cooking! Our lessons are designed to be fun and interactive, enabling you to learn directly from the experts. After the class, you can review your experience and track your progress.",
    },
  ];
  return (
    <>
      <div className={`${rubik.className}`}>
        <div className="flex pl-12">
          <div className="place-content-center">
            <Image src="/images/vector.png" alt="" width={50} height={30} />
          </div>
          <h1 className="text-[30px] font-[600] mx-4">How it Works</h1>
        </div>

        <div className="mt-15 place-content-center">
          {works.slice(0, 1).map((content, index) => (
            <div key={index} className="lg:flex">
              <div className="w-full mt-8 md:w-[450px] place-self-center lg:w-1/2">
                <Image src={content.img} alt="" width={1000} height={1} />
              </div>
              <div className="lg:w-1/2 lg:place-self-center px-5">
                <div className="mt-5 ">
                  <h1 className="text-[28px] font-[600] mr-15">
                    {content.topic}
                  </h1>
                  <p className="mt-3 text-[18px] ">{content.content}</p>
                </div>
                <div className="place-self-center mt-5 lg:place-self-start">
                  <button className="w-[157px] h-[41px] bg-[#D27722] text-white rounded-[4px]">
                    Browse Tutors
                  </button>
                </div>
              </div>
            </div>
          ))}
          {works.slice(1, 2).map((content, index) => (
            <div key={index} className="lg:flex lg:flex-row-reverse">
              <div className="mt-8 w-full md:w-[450px] place-self-center lg:w-1/2 px-5">
                <Image src={content.img} alt="" width={1000} height={1} />
              </div>
              <div className="lg:w-1/2 lg:place-self-center px-5">
                <div className="mt-5 ">
                  <h1 className="text-[28px] font-[600] mr-15">
                    {content.topic}
                  </h1>
                  <p className="mt-3 text-[18px] ">{content.content}</p>
                </div>
              </div>
            </div>
          ))}
          {works.slice(2, 3).map((content, index) => (
            <div key={index} className="lg:flex">
              <div className="w-full mt-8 px-5 md:w-[450px] lg:w-1/2 place-self-center">
                <Image src={content.img} alt="" width={1000} height={1} />
              </div>
              <div className="lg:w-1/2 lg:place-self-center px-5">
                <div className="mt-5 px-5">
                  <h1 className="text-[28px] font-[600] mr-15">
                    {content.topic}
                  </h1>
                  <p className="mt-3 text-[18px] ">{content.content}</p>
                </div>

              <div className="place-self-center mt-5 lg:place-self-start">
                <button className="w-[157px] h-[41px] bg-[#D27722] text-white rounded-[4px]">
                  Sign up for free
                </button>
              </div>
              </div>

            </div>
          ))}
        </div>
        <div className="mt-15">
          <div className="w-[110px] h-[110px] rounded-[111px] bg-[#D27722] place-self-center flex justify-center items-center z-10 relative">
            <Image
              src="/images/award.png"
              alt=""
              width={52}
              height={52}
              className=""
            />
          </div>
          <div className="relative bottom-[50px] w-[326px] h-[351px] place-self-center md:w-[585px] md:h-[279px] border border-[#D27722] rounded-[16px] bg-[#FFFDF4]">
            <div className="w-[287px] h-[221px] md:w-[473px] place-self-center mt-20">
              <h1 className="text-center text-[28px] font-[600]">
                Money-back guarantee
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
