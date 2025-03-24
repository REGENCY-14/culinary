import { rubik } from "@/font/Font";
import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function StudentSection() {
  const student = [
    {
      topic: "Diverse Classes: ",
      content:
        "Access a wide variety of classes catering to all skill levels and culinary interests.",
    },
    {
      topic: "World-Class Chefs: ",
      content:
        "Learn directly from professional chefs sharing their unique culinary secrets.",
    },
    {
      topic: "Interactive Learning: ",
      content:
        "Ask questions and receive real-time feedback in our interactive classes.",
    },
  ];
  return (
    <>
      <div className="h-auto bg-[#d27722]">
        <div className="h-[408px]  relative">
          <Image
            src="/images/student.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className={`${rubik.className} mt-4 text-white px-4`}>
          <h1 className="text-[30px] font-[700]">Become A Student</h1>
          <p className="text-[18px] font-[400] mt-2">
            Kick-start your culinary adventure with COOK. We provide a space for
            cooking enthusiasts of all levels to learn, explore, and master
            culinary arts from professional chefs worldwide. So dive in and
            transform your kitchen into a playground of flavors.
          </p>
          <div className="flex mt-5">
            <div className="">
              {student.map((content, index) => (
                <div key={index} className="mt-4 lg:mt-1">
                  <div className="flex items-start gap-2">
                    <div>
                      <FaCircleCheck className="text-white w-[22px] h-[22px]" />
                    </div>

                    <h3 className="text-[18px] font-bold">
                      {content.topic}
                      <span className="font-normal">
                        {content.content}
                      </span>{" "}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="text-white w-full my-10 h-[39px] rounded-[4px] bg-[#d27722] border border-white">Sign Up</button>
        </div>
      </div>
    </>
  );
}
