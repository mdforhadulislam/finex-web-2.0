import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const OurBlogHeaderSection = () => {
  const images = [
    {
      img: "/air-freight-breadcrumb.jpg",
    },
    {
      img: "/shipping-solution-04.jpg",
    },
  ];

  return (
    <div className="w-full bg-defult">
      <Carousel className="w-full relative">
        <div className="container px-4 sm:px-6 h-auto absolute z-10 mt-60">
          {/* English heading */}
          <IsEnglish className="">
            <h1 className="font-bold text-3xl sm:text-5xl text-white">
              OUR BLOG
            </h1>
          </IsEnglish>

          {/* Bangla heading */}
          <IsBangla className="">
            <h1 className="font-bold text-5xl sm:text-6xl text-white bfont">
              আমাদের ব্লগ
            </h1>
          </IsBangla>

          {/* English breadcrumb navigation */}
          <IsEnglish className="">
            <span className="flex flex-row items-center align-middle justify-start text-[16px] sm:text-[20px] gap-[2px] sm:gap-2 font-normal py-2 text-white">
              <Link href={"/"}>HOME</Link>
              <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
              <Link href={"/blog"}>OUR BLOG</Link>
            </span>
          </IsEnglish>

          {/* Bangla breadcrumb navigation */}
          <IsBangla className="">
            <span className="flex flex-row items-center align-middle justify-start gap-[2px] sm:gap-2 font-normal py-2 text-white">
              <Link href={"/"} className="bfont text-xl sm:text-3xl">
                হোম
              </Link>
              <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
              <Link href={"/blog"} className="bfont text-xl sm:text-3xl">
                আমাদের ব্লগ
              </Link>
            </span>
          </IsBangla>
        </div>

        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <Card className=" rounded-none shadow-none bg-none border-none border-0 p-0 m-0">
                <CardContent
                  className=" w-full h-[350px] flex aspect-square items-center justify-center bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${item?.img})` }}
                ></CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default OurBlogHeaderSection;
