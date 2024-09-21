import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import React from "react";

const HomeHeroSectionHedding = () => {
  return (
    <div>
      <IsEnglish
        className={
          "w-full h-auto flex justify-left align-middle items-center py-8 pt-14 sm:pt-0"
        }
      >
        <h1 className="text-4xl  md:text-5xl lg:text-6xl font-extrabold text-white">
          Faster International Express -
          <span className="text-lg font-medium block">
            From Here To There, We Care
          </span>
        </h1>
      </IsEnglish>

      <IsBangla
        className={
          "w-full h-auto flex justify-left align-middle items-center py-8 pt-14 sm:pt-0"
        }
      >
        <h1 className="text-6xl  md:text-7xl lg:text-8xl font-bold text-white bfont">
          ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস -
          <span className="text-2xl font-medium block bfont -mt-5 leading-[45px]">
            এখান থেকে সেখানে, আমরা যত্ন করি
          </span>
        </h1>
      </IsBangla>
    </div>
  );
};

export default HomeHeroSectionHedding;
