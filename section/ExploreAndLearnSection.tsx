import { rubik } from "@/font/Font";
import React from "react";
import Image from "next/image";

export default function ExploreAndLearnSection() {
  const cardContent = [
    {
      img: "/images/food1.png",
      topic: "Bakery",
      description: "Master baking: from rustic bread to delicate pastries",
    },
    {
      img: "/images/food2.png",
      topic: "Vegan Cooking",
      description:
        "Create delicious, nutritious meals with plant-based ingredients",
    },
    {
      img: "/images/food3.png",
      topic: "Seafood Mastery",
      description: "Dive into seafood: from grilling fish to creating sushi",
    },
    {
      img: "/images/food4.png",
      topic: "BBQ & Grilling",
      description: "Fire up your skills with mouth-watering BBQ dishes",
    },
    {
      img: "/images/food5.png",
      topic: "Wine Pairing",
      description: "Enhance culinary experiences by mastering wine pairing",
    },
    {
      img: "/images/food6.png",
      topic: "Cake Decorating",
      description: "Unleash creativity with cake decorating techniques",
    },
  ];
  return (
    <>
      <div className={`relative top-[115px] mt-10 ${rubik.className}`}>
        <h1 className="text-[30px] font-[600] text-center">Explore & Learn</h1>
        <div className="relative md:grid md:grid-cols-2 mt-10 flex flex-col gap-3 justify-between md:w-[734px] mx-auto lg:grid lg:grid-cols-3 lg:w-[1313px] px-2">
          {cardContent.map((card, index) => (
              <div
                key={index}
                className="w-[326px] h-[118px] bg-[#D27722] rounded-[16px] text-white flex items-center md:justify-center gap-4  px-4 place-self-center md:w-[355px] lg:w-[421.67px]"
              >
                <Image
                  src={card.img}
                  alt="food"
                  width={50}
                  height={1}
                  className="w-[52px] h-[52px] filter invert brightness-0"
                />
                <div>
                  <h3 className="text-[20px] font-[700]">{card.topic}</h3>
                  <p className="text-[14px]">{card.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
