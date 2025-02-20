"use client";
import LlicensedIMGAE from "@/components/assets/licencess.png";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Logo from "@/utils/Logo";
import LogoBn from "@/utils/LogoBn";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "../ui/button";
import { FaYoutube } from "react-icons/fa";

const solutionsFeatures = [
  {
    id: 1213,
    title: "Air Freight",
    link: "/about/our-service/",
    titleBn: "বাই এয়ার",
  },
  {
    id: 3568,
    title: "Sea Freight",
    link: "/about/our-service/",
    titleBn: "বাই সী",
  },
  {
    id: 4668,
    title: "Custom Clearnces",
    link: "/about/our-service/",
    titleBn: "কাস্টম ক্লিয়ারেঞ্ছ",
  },
  {
    id: 89865,
    title: "Export Shipments",
    link: "/about/our-service/",
    titleBn: "রপ্তানি চালান",
  },
  {
    id: 565465,
    title: "Courier Service",
    link: "/about/our-service/",
    titleBn: "কুরিয়ার সার্ভিস",
  },
  {
    id: 565465,
    title: "Shipment Tracking",
    link: "/about/our-service/",
    titleBn: "চালান ট্র্যাকিং",
  },
  {
    id: 565465,
    title: "Price Chart",
    link: "/price/",
    titleBn: "মূল্য চার্ট তালিকা",
  },
];

const ourCompany = [
  {
    id: 1234513,
    title: "About Us",
    link: "/about/why-finex/",
    titleBn: "আমাদের সম্পর্কে",
  },
  {
    id: 353468,
    title: "Our Blog",
    link: "/blog/",
    titleBn: "আমাদের ব্লগ",
  },
  {
    id: 4245668,
    title: "Our Team",
    link: "/about/our-team-member/",
    titleBn: "আমাদের দলের সদস্য",
  },
  {
    id: 565343465,
    title: "Help & Support",
    link: "/about/help-&-support/",
    titleBn: "সহযোগিতা এবং সমর্থন",
  },
  {
    id: 56543465,
    title: "Trust & Safety",
    link: "/about/trust&safety/",
    titleBn: "আস্থা ও নিরাপত্তা",
  },
  {
    id: 562354265,
    title: "Privacy Policy",
    link: "/about/privacy-policy/",
    titleBn: "গোপনীয়তা নীতি",
  },
  {
    id: 562354265,
    title: "Refund Policy",
    link: "/about/refund-policy/",
    titleBn: "ফেরত নীতি",
  },
];

const FooterBar = () => {
  return (
    <footer className="w-full h-auto bg-defult">
      <div className="container h-auto m-auto p-5">
        <div className="w-full h-auto p-2 py-6">
          <div className="w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
            <div className="lg:border-r border-white border-dashed">
              <Fade direction="up">
                <IsEnglish className={"flex gap-4 pb-4"}>
                  <Logo
                    link={"/"}
                    isFooter={true}
                    imageStyle={"w-[110px] h-[110px] "}
                  />
                  <Image
                    width={110}
                    height={110}
                    src={LlicensedIMGAE.src}
                    alt=""
                    className="bg-transparent"
                  />
                </IsEnglish>
                <IsBangla className={"flex gap-4 pb-4"}>
                  <LogoBn
                    link={"/"}
                    isFooter={true}
                    imageStyle={"w-[110px] h-[110px] "}
                  />
                  <Image
                    width={110}
                    height={110}
                    src={LlicensedIMGAE.src}
                    alt=""
                    className="bg-transparent"
                  />
                </IsBangla>
              </Fade>

              <Fade direction="up" delay={600}>
                <IsEnglish className="">
                  <Link
                    href={
                      "https://whatsapp.com/channel/0029Vaf5cmcAojYz6lCqjD3A"
                    }
                    target="_blank"
                  >
                    <Button className="bg-white text-gray-800 p-5 hover:bg-gray-100 rounded-full text-base pl-[6px] pr-3 flex justify-center align-middle items-center gap-1">
                      <SiWhatsapp className="w-8 h-8 p-[8px] bg-green-600 text-white rounded-full" />
                      Join Whatsapp Channel
                    </Button>
                  </Link>
                </IsEnglish>
                <IsBangla className="">
                  <Link
                    href="https://whatsapp.com/channel/0029Vaf5cmcAojYz6lCqjD3A"
                    target="_blank"
                  >
                    <Button className="bg-white text-gray-800 p-5 hover:bg-gray-100 rounded-full text-[21px] pl-[6px] pr-3 flex justify-center align-middle items-center gap-1 bfont">
                      <SiWhatsapp className="w-8 h-8 p-[8px] bg-green-600 text-white rounded-full" />
                      হোয়াটস্যাপ চ্যানেলে যোগ দিন
                    </Button>
                  </Link>
                </IsBangla>
              </Fade>

              <Fade direction="up" delay={1000}>
                <IsEnglish className="flex flex-col gap-2 text-gray-300  py-3 pb-1">
                  <Table>
                    <TableBody>
                      <TableRow className="border-0 hover:bg-transparent">
                        <TableCell className="font-medium pl-0 pb-0">
                          Phone:
                        </TableCell>
                        <TableCell className="font-medium pb-0 flex gap-2">
                          <a href="tel:+880 1577-057714">+880 1645-034000,</a>
                          <a href="tel:+880 1577-057714">+880 1577-057714</a>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-0 hover:bg-transparent">
                        <TableCell className="font-medium pl-0 pb-0">
                          Email:
                        </TableCell>
                        <TableCell className="font-medium pb-0">
                          <a href="mailto:finex.in.ex@gmail.com">finex.in.ex@gmail.com</a>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-0 hover:bg-transparent">
                        <TableCell className="font-medium pl-0 pb-0">
                          Location:
                        </TableCell>
                        <TableCell className="font-medium pb-0">
                           House-193 {" "}(Ground Floor),{" "} Road-01,{" "} Mohakhali DOHS, {" "}Dhaka-1206, {" "}Bangladesh
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </IsEnglish>

                <IsBangla className="flex flex-col gap-2 text-gray-300  py-3 pb-1">
                  <Table>
                    <TableBody>
                      <TableRow className="border-0 hover:bg-transparent">
                        <TableCell className="font-medium pl-0 pb-0  bfont text-[20px]">
                          মোবাইলঃ
                        </TableCell>
                        <TableCell className="font-medium pb-0  bfont text-[20px] flex gap-2">
                        <a href="tel:+880 1577-057714" className="font-medium pb-0  bfont text-[20px]">+৮৮০ ১৬৪৫-০৩৪০০০,</a>
                        <a href="tel:+880 1577-057714" className="font-medium pb-0  bfont text-[20px]">+৮৮০ ১৫৭৭-০৫৭৭১৪</a>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-0 hover:bg-transparent">
                        <TableCell className="font-medium pl-0 pb-0  bfont text-[20px]">
                          মেইলঃ
                        </TableCell>
                        <TableCell className="font-medium pb-0  bfont">
                        <a href="mailto:finex.in.ex@gmail.com">finex.in.ex@gmail.com</a>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-0 hover:bg-transparent">
                        <TableCell className="font-medium pl-0 pb-0  bfont text-[20px]">
                          লোকেশনঃ
                        </TableCell>
                        <TableCell className="font-medium pb-0 bfont text-[20px]">
                           হাউস-১৯৩ (গ্রাউন্ড ফ্লোর),{" "}রোড-০১, {" "}মহাখালী {" "} ডিওএইচএস,{" "} ঢাকা-১২০৬, {" "}বাংলাদেশ
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </IsBangla>
              </Fade>

              <Fade direction="up" delay={1600}>
                <div className="flex justify-start align-middle items-center gap-3 py-2">
                  <Link
                    href={"https://www.facebook.com/finex.int.ex/"}
                    target="_blank"
                    className="w-10 h-10 p-1 bg-white rounded-full shadow-3xl flex justify-center align-middle items-center "
                  >
                    <FaFacebook className="w-8 h-8 text-blue-600 shadow-3xl" />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/finex.ltd/"}
                    target="_blank"
                    className="w-10 h-10 p-[6px] bg-white rounded-full shadow-3xl  flex justify-center align-middle items-center"
                  >
                    <LuInstagram className="w-8 h-8 text-red-600 shadow-3xl" />
                  </Link>
                  <Link
                    href={"https://x.com/finexintex/"}
                    target="_blank"
                    className="w-10 h-10 p-[6px] bg-white rounded-full shadow-3xl  flex justify-center align-middle items-center"
                  >
                    <FaTwitter className="w-8 h-8 text-blue-600 shadow-3xl" />
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/finex-int-ex/"}
                    target="_blank"
                    className="w-10 h-10 p-[7px] bg-white rounded-full shadow-3xl  flex justify-center align-middle items-center"
                  >
                    <IoLogoLinkedin className="w-8 h-8 text-blue-600 shadow-3xl" />
                  </Link>
                  <Link
                    href={"https://www.youtube.com/@finexltd"}
                    target="_blank"
                    className="w-10 h-10 p-[4px] bg-white rounded-full shadow-3xl  flex justify-center align-middle items-center"
                  >
                    <FaYoutube className="w-9 h-9 text-red-600 shadow-3xl" />
                   
                  </Link>
                </div>
              </Fade>
            </div>
            <div className="group lg:border-r border-white border-dashed">
              <Fade direction="up" delay={300}>
                <IsEnglish className="">
                  <h3 className=" text-lg text-white ">Solutions</h3>
                </IsEnglish>
                <IsBangla className="">
                  <h3 className="bfont text-[24px] text-white leading-6">
                    সমাধান
                  </h3>
                </IsBangla>
                <span className="group-hover:w-[200px] w-[120px] transition-all duration-600 h-[2px] bg-white block"></span>
              </Fade>

              <ul className="w-full h-auto text-gray-300 py-2 pt-4 ">
                {solutionsFeatures.map((item, index) => (
                  <li
                    key={index}
                    className="py-1 flex justify-start items-center align-middle gap-2"
                  >
                    <Fade direction="up" delay={300 + Number(`${index + 2}00`)}>
                      <IoIosArrowForward className="w-5 h-5 hover:text-white duration-300 transition-all" />
                      <IsEnglish className="">
                        <Link
                          href={item.link}
                          className=" text-base hover:text-white duration-300 transition-all"
                        >
                          {item.title}
                        </Link>
                      </IsEnglish>
                      <IsBangla className="">
                        <Link
                          href={item.link}
                          className="bfont text-[22px] leading-6 hover:text-white duration-300 transition-all"
                        >
                          {item.titleBn}
                        </Link>
                      </IsBangla>
                    </Fade>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group ">
              <Fade direction="up" delay={400}>
                <IsEnglish className="">
                  <h3 className=" text-lg text-white ">Our Company</h3>
                </IsEnglish>
                <IsBangla className="">
                  <h3 className="bfont text-[24px] text-white leading-6">
                    আমাদের কোম্পানি
                  </h3>
                </IsBangla>

                <span className="group-hover:w-[200px] w-[120px] transition-all duration-600 h-[2px] bg-white block"></span>
              </Fade>
              <ul className="w-full h-auto text-gray-300 py-2 pt-4">
                {ourCompany.map((item, index) => (
                  <li
                    key={index}
                    className="py-1 flex justify-start items-center align-middle gap-2"
                  >
                    <Fade direction="up" delay={400 + Number(`${index + 3}00`)}>
                      <IoIosArrowForward className="w-5 h-5 hover:text-white duration-300 transition-all" />
                      <IsEnglish className="">
                        <Link
                          href={item.link}
                          className=" text-base hover:text-white duration-300 transition-all"
                        >
                          {item.title}
                        </Link>
                      </IsEnglish>
                      <IsBangla className="">
                        <Link
                          href={item.link}
                          className="bfont text-[22px] leading-6 hover:text-white duration-300 transition-all"
                        >
                          {item.titleBn}
                        </Link>
                      </IsBangla>
                    </Fade>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Fade direction="up" delay={800}>
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
              </Link>{" "}
              সমস্ত অধিকার সংরক্ষিত.
            </IsBangla>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default FooterBar;
