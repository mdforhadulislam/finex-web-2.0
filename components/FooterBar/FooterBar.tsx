import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Logo from "@/utils/Logo";
import LogoBn from "@/utils/LogoBn";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import LlicensedIMGAE from "@/components/assets/dack_licences.png";
import { SiWhatsapp } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";

const solutionsFeatures = [
  {
    id: 1213,
    title: "Air Freight",
    link: "/about/service/",
    titleBn: "বাই এয়ার",
  },
  {
    id: 3568,
    title: "Sea Freight",
    link: "/about/service/",
    titleBn: "বাই সী",
  },
  {
    id: 4668,
    title: "Custom Clearnces",
    link: "/about/service/",
    titleBn: "কাস্টম ক্লিয়ারেঞ্ছ",
  },
  {
    id: 89865,
    title: "Export Shipments",
    link: "/about/service/",
    titleBn: "রপ্তানি চালান",
  },
  {
    id: 565465,
    title: "Courier Service",
    link: "/about/service/",
    titleBn: "কুরিয়ার সার্ভিস",
  },
  {
    id: 565465,
    title: "Shipment Tracking",
    link: "/about/service/",
    titleBn: "চালান ট্র্যাকিং",
  },
  {
    id: 565465,
    title: "Price Chart",
    link: "/about/service/",
    titleBn: "মূল্য চার্ট তালিকা",
  },
];

const ourCompany = [
    {
        id: 1234513,
        title: "About Us",
        link: "/about/service/",
        titleBn: "আমাদের সম্পর্কে",
      },
      {
        id: 353468,
        title: "Our Blog",
        link: "/about/service/",
        titleBn: "আমাদের ব্লগ",
      },
      {
        id: 4245668,
        title: "Our Team",
        link: "/about/service/",
        titleBn: "আমাদের দলের সদস্য",
      },
      {
        id: 565343465,
        title: "Help & Support",
        link: "/about/service/",
        titleBn: "সহযোগিতা এবং সমর্থন",
      },
      {
        id: 56543465,
        title: "Trust & Safety",
        link: "/about/service/",
        titleBn: "আস্থা ও নিরাপত্তা",
      },
      {
        id: 562354265,
        title: "Privacy Policy",
        link: "/about/service/",
        titleBn: "গোপনীয়তা নীতি",
      },{
        id: 562354265,
        title: "Refund Policy",
        link: "/about/service/",
        titleBn: "ফেরত নীতি",
      },
]

const FooterBar = () => {
  return (
    <footer className="w-full h-auto bg-defult">
      <div className="container h-auto m-auto p-5">
        <div className="w-full h-auto p-2 py-6">
          <div className="w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
            <div className="lg:border-r border-white border-dashed">
              <IsEnglish className={"flex gap-4 pb-4"}>
                <Logo
                  isFooter={true}
                  imageStyle={"w-[80px] h-[80px] bg-white"}
                />
                <Image
                  width={80}
                  height={80}
                  src={LlicensedIMGAE.src}
                  alt=""
                  className="bg-white "
                />
              </IsEnglish>
              <IsBangla className={"flex gap-4 pb-4"}>
                <LogoBn
                  isFooter={true}
                  imageStyle={"w-[80px] h-[80px] bg-white"}
                />
                <Image
                  width={80}
                  height={80}
                  src={LlicensedIMGAE.src}
                  alt=""
                  className="bg-white "
                />
              </IsBangla>

              <IsEnglish>
                <Button className="bg-white text-gray-800 p-5 hover:bg-gray-100 rounded-full text-base pl-[6px] pr-3 flex justify-center align-middle items-center gap-1">
                  <SiWhatsapp className="w-8 h-8 p-[8px] bg-green-600 text-white rounded-full" />
                  Join Whatsapp Channel
                </Button>
              </IsEnglish>
              <IsBangla>
                <Button className="bg-white text-gray-800 p-5 hover:bg-gray-100 rounded-full text-[21px] pl-[6px] pr-3 flex justify-center align-middle items-center gap-1 bfont">
                  <SiWhatsapp className="w-8 h-8 p-[8px] bg-green-600 text-white rounded-full" />
                  হোয়াটস্যাপ চ্যানেলে যোগ দিন
                </Button>
              </IsBangla>
            </div>
            <div className="group lg:border-r border-white border-dashed">
              <div className=" ">
                <IsEnglish>
                <h3 className=" text-lg text-white ">Solutions</h3></IsEnglish>
                <IsBangla><h3 className="bfont text-[24px] text-white leading-6">সমাধান</h3></IsBangla>
                <span className="group-hover:w-[200px] w-[120px] transition-all duration-600 h-[2px] bg-white block"></span>
              </div>

              <ul className="w-full h-auto text-gray-300 py-2 pt-4 ">
              {solutionsFeatures.map((item, index) => (
                  <li key={index} className="py-1 flex justify-start items-center align-middle gap-2">
                
                <IoIosArrowForward className="w-5 h-5 hover:text-white duration-300 transition-all" />
                    <IsEnglish><Link href={"/"} className=" text-base hover:text-white duration-300 transition-all">{item.title}</Link></IsEnglish>
                    <IsBangla><Link href={"/"} className="bfont text-[22px] leading-6 hover:text-white duration-300 transition-all">{item.titleBn}</Link></IsBangla>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group ">
              <div className=" ">
              <IsEnglish>
              <h3 className=" text-lg text-white ">Our Company</h3></IsEnglish>
                <IsBangla><h3 className="bfont text-[24px] text-white leading-6">আমাদের কোম্পানি</h3></IsBangla>
               
                <span className="group-hover:w-[200px] w-[120px] transition-all duration-600 h-[2px] bg-white block"></span>
              </div>
              <ul  className="w-full h-auto text-gray-300 py-2 pt-4">
              {ourCompany.map((item, index) => (
                  <li key={index}  className="py-1 flex justify-start items-center align-middle gap-2">
                    <IoIosArrowForward className="w-5 h-5 hover:text-white duration-300 transition-all" />
                    <IsEnglish><Link href={"/"} className=" text-base hover:text-white duration-300 transition-all">{item.title}</Link></IsEnglish>
                    <IsBangla><Link href={"/"} className="bfont text-[22px] leading-6 hover:text-white duration-300 transition-all">{item.titleBn}</Link></IsBangla>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between align-middle py-4 pb-0 flex-row border-t border-white border-dashed">
          <IsEnglish className={"text-sm w-full text-center text-white "}>
            ©<a href="/">`Faster International Express - FINEX`</a> All right
            reserved.
          </IsEnglish>
          <IsBangla
            className={"w-full text-center bfont text-[20px] text-white "}
          >
            ©
            <Link href={"/"} className="bfont  text-[20px]">
              `ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস - ফিনেক্স` 
            </Link>
             {" "}সমস্ত অধিকার সংরক্ষিত.
          </IsBangla>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
