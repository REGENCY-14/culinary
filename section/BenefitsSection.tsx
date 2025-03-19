import React from "react";
import Image from "next/image";
import { rubik } from "@/font/Font";

export default function BenefitsSection() {
  const benefits = [
    {
      img: "/images/ingredient.png",
      topic: "Diverse Range of Classes",
      content:
        "Explore the culinary world with our vast array of online cooking classes. Whether you're a beginner or a seasoned cook, we have a class that suits your skill level and interests.",
    },
    {
      img: "/images/ingredient1.png",
      topic: "Opportunity to Teach ",
      content:
        "Share your culinary wisdom. If you're an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income.",
    },
    {
      img: "/images/ingredient2.png",
      topic: "Interactive Lessons",
      content:
        "Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros.",
    },
  ];
  return (
    <>
      <div className="">
        <div
          className={`lg:flex lg:mr-10  ${rubik.className} border place-self-center w-full`}
        >
          <div className="relative w-full h-[281px] md:rounded-[32px] overflow-hidden md:w-[586px] md:h-[385px] place-self-center lg:w-1/2 lg:[407px] top-[115px]">
            <Image
              src="/images/benefit.jpeg"
              alt="Hero Section"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={`md:flex md:ml-10`}>
            <div className="relative w-[325px] h-[180px] rounded-[16px] bottom-[90px] place-self-center lg:hidden bg-[#D27722] top-[45px] text-white text-right">
              <div className="flex gap-5 pt-6 px-5">
                <div className={`font-[500] text-[24px] w-full `}>
                  <p className="">Level up</p>
                </div>
              </div>
              <p className={`pt-2 px-5 text-[14px] ${rubik.className}`}>
                Take your culinary skills to new heights. Our platform provides
                you with the expert guidance you need to refine your skills and
                cook like a pro
              </p>
            </div>
          </div>

          <div className="relative w-full h-[446px] lg:text-left lg:mt-8 place-self-center lg:w-1/2 lg:ml-10 mt-28">
            <h1 className="text-[30px] font-[600] pl-12">Other Benefits</h1>

            {benefits.map((content, index) => (
              <div key={index}>
                <div className="w-[326px] h-[260px] place-self-center border rounded-[9px] border-[#D27722] mt-4 pt-5 md:w-[738px] md:h-[122px] md:flex lg:w-[646px] lg:h-[148px]">
                  <div className="px-4">
                    <Image src={content.img} alt="" width={52} height={52} />
                  </div>
                  <div>
                    <h1 className="px-4 text-[20px] font-[600] md:w-24px md:font-[600]">
                      {content.topic}
                    </h1>
                    <p className="px-4">{content.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
