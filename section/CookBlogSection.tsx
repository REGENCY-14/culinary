import { rubik } from "@/font/Font";
import React from "react";
import Image from "next/image";

export default function CookBlogSection() {
  const delicacies = [
    {
      img: "/images/pizza.jpeg",
      date: "🗓️ 24 Apr, 2023",
      content: "Mastering the Art of Homemade Pizza",
    },
    {
      img: "/images/cream.jpeg",
      date: "🗓️ 24 Apr, 2023",
      content: "Delectable Homemade Ice Cream",
    },
    {
      img: "/images/tacos.jpeg",
      date: "🗓️ 24 Apr, 2023",
      content: "How to Prepare Authentic Mexican Tacos",
    },
    {
      img: "/images/steak.jpeg",
      date: "🗓️ 24 Apr, 2023",
      content: "Tips and Techniques for a Restaurant-Quality Steak",
    },
  ];
  return (
    <>
      <div className={`mt-15 mx-8 ${rubik.className} `}>
        <h1 className="text-[36px] font-[600]">Cook Blog</h1>
        <div className="place-self-center mt-7">
          {delicacies.map((content, index) => (
            <div key={index}>
              <div className="h-[340px] w-full bg-[#FFDBB8] rounded-3xl border border-[#d27722] overflow-hidden mt-7">
                <div className="w-full h-[213px] rounded-t-[8px] relative">
                  <Image
                    src={content.img}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[18px] font-[400]">{content.date}</p>
                  <h1 className="text-[20px] font-[600]">{content.content}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
