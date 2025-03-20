import { rubik } from "@/font/Font";
import React from "react";
import Image from "next/image";

export default function OurUniqueBenefits() {
  const benefits = [
    {
      img: "/images/chef.png",
      topic: "Expert chefs",
      content:
        "Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.",
    },
    {
      img: "/images/pig.png",
      topic: "Save Time and Money",
      content:
        "Embrace the convenience of learning from home. Save time on travel, reduce dining-out expenses, and master your kitchen with our online cooking classes.",
    },
    {
      img: "/images/award.png",
      topic: "Accessible Cooking",
      content:
        "Start your culinary journey with ease. Our user-friendly platform makes navigation simple, letting you focus on learning and enjoying your online cooking classes.",
    },
  ];
  return (
    <>
      <div className={`relative mt-10 ${rubik.className} top-[115px]`}>
        <h1 className="text-[30px] font-[600] text-center">
          Our Unique Benefits
        </h1>
        <div className="">
          <div className="lg:flex lg:place-content-center lg:gap-[27px]">
            {benefits.map((content,index) => (
              <div key={index} className="mt-8 w-[326px] h-[332px] place-self-center md:w-[585px] md:h-[279px]  lg:w-[390px] lg:h-[390px] ">
                <div className="w-[110px] h-[110px] rounded-[111px] bg-[#D27722] place-self-center flex justify-center items-center ">
                  <Image
                    src={content.img}
                    alt=""
                    width={52}
                    height={52}
                    className=""
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-[28px] mt-3 lg:text-[32px] lg:font-[600]  font-[600]">{content.topic}</h1>
                  <p className="text-[18px] font-[400] mt-2 lg:text-[18px] lg:font-[400]">
              {content.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
