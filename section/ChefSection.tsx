import { rubik } from "@/font/Font";
import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { AiTwotoneExclamationCircle } from "react-icons/ai";

export default function StudentsAndChefSection() {
  const chef = [
    {
      topic: "Build Your Brand",
      content:
        "Showcase your culinary skills and build your brand within our community.",
    },
    {
      topic: "Expand Your Reach",
      content:
        "Connect with cooking enthusiasts across the globe and expand your audience beyond geographical limits.",
    },
    {
      topic: "Grow Your Business Faster",
      content:
        "Utilize our platform's features and resources to accelerate your growth and increase your income.",
    },
  ];
  return (
    <>
      <div className={`${rubik.className} lg:flex lg:flex-row-reverse`}>
        <div className="md:w-[583px] place-self-center h-[386.45px] rounded-[32px] overflow-hidden lg:w-1/2 mr-4">
          <Image src="/images/ch.jpeg" alt="" width={1000} height={1000} />
        </div>
        <div className="px-5 md:p-[46px] lg:w-1/2 lg:h-[497px]">
          <h1 className="text-[30px] font-[600] mt-5">Become A Chef</h1>
          <p className="mt-5 lg:mt-1 text-[18px] font-[400]">
            Share your culinary secrets, inspire cooking enthusiasts worldwide,
            and grow your career like never before. Our platform offers a unique
            way to connect, teach, and earn.
          </p>
          <div className="flex mt-5">
            <div className="">
              {chef.map((content, index) => (
                <div key={index} className="mt-4 lg:mt-1">
                  <div className="flex items-start gap-2">
                    <div>
                      <FaCircleCheck className="text-[#D27722] w-[22px] h-[22px]" />
                    </div>

                    <h3 className="text-[18px] font-bold">
                      {content.topic}
                      <span className="font-normal pl-2">
                        {content.content}
                      </span>{" "}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className=" place-self-center w-full mt-7 h-[39px] text-white bg-[#D27722] rounded-[4px] md:w-[155px]  lg:mt-2 md:place-content-start">
            Become a tutor
          </button>
          <div className="flex mt-8 lg:mt-2 gap-3">
          <div>
              <AiTwotoneExclamationCircle className="text-[#D27722] text-2xl" />
            </div>
          <p className="">
            
            Learn how our platform works
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
