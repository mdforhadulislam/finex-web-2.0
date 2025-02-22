import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import React from "react";
import HomeCustomerReview from "../Home/HomeCustomerReview";


import CustomerCareIcon from "../../public/customar-care.png";
import NetworkIcon from "../../public/network.png";
import ServiceIcon from "../../public/service.png";
import VisionIcon from "../../public/vision.png";
import StrengthIcon from "../../public/strength.png";
import Image from "next/image";
import { GoCheck } from "react-icons/go";

export const aboutData = [
  {
    id: 1467678,
    icon: CustomerCareIcon,
    title: "Customer Care",
    titleBn:"গ্রাহক সেবা",
    detailsBn:"আমাদের গ্রাহক পরিষেবা সেলগুলি আপনার সমস্ত প্রশ্নের জন্য দ্রুত প্রতিক্রিয়া প্রদান করে। আন্তঃনগর পিক-আপ এবং ডেলিভারিতে আমাদের গাড়ির বহর দ্রুত এবং নিরাপদ ডেলিভারি প্রদান করে।",
    details:
      "Our Customer Service Cells provide prompt feedback to all your queries. Our fleet of vehicles at intra-city pick-ups and deliveries provide speedy and safe delivery.",
  },
  {
    id: 2454535,
    icon: NetworkIcon,
    title: "Distr. Network", titleBn:"জেলা নেটওয়ার্ক",
    detailsBn:"ফিনেক্স বিশ্বব্যাপী সেবা প্রদান করে তার বিশ্বস্ত বিদেশী সহযোগীদের মাধ্যমে প্রধান গেটওয়ে শহরগুলোতে যেমন: যুক্তরাষ্ট্র, যুক্তরাজ্য-ইউরোপ, মালয়েশিয়া, কানাডা, সিঙ্গাপুর, দুবাই, চীন, হংকং, ফ্রান্স, অস্ট্রেলিয়া, সৌদি আরব, জাপান, কেনিয়া এবং আরও অনেক স্থানে। আমরা শীর্ষস্থানীয় কুরিয়ার কোম্পানির সাথে কৌশলগত সম্পর্ক গড়ে তুলেছি, যা আন্তর্জাতিক দলিল ও পার্সেলের নির্ভরযোগ্য এবং সময়নির্ধারিত বিতরণ নিশ্চিত করে।",
    details:
      "Finex provides worldwide services through its trusted overseas associates at major gateways such as the USA, UK-Europe, Malaysia, Canada, Singapore, Dubai, China, Hong Kong, France, Australia, Saudi Arabia, Japan, Kenya, and more. We have strategic tie-ups with leading courier companies, guaranteeing reliable and time-definite delivery of international documents and packages.",
  },
  {
    id: 3345346,
    icon: ServiceIcon,
    title: "Quality Services", titleBn:"মানসম্পন্ন সেবা",
    detailsBn:"ফিনেক্স তার আন্তর্জাতিক মানের মানের পরিষেবার জন্য বিখ্যাত। আমাদের ব্যাপক জ্ঞান, বোঝাপড়া এবং চমৎকার বিদেশী এজেন্ট নেটওয়ার্ক আমাদের বিশ্বব্যাপী গন্তব্যে পৌঁছাতে সক্ষম করেছে। ক্লায়েন্টরা আমাদের উচ্চতর মানের নিয়ন্ত্রণ ব্যবস্থা এবং সময়মত ডেলিভারির প্রশংসা করে।",
    details:
      "Finex is renowned for its international standard quality services. Our extensive knowledge, understanding, and excellent overseas agent networks have enabled us to reach destinations worldwide. Clients appreciate our superior quality control mechanisms and timely deliveries.",
  },
  {
    id: 4325345,
    icon: VisionIcon,
    title: "Our Vision", titleBn:"আমাদের ভিশন",
    detailsBn:"আমাদের দৃষ্টি প্রতিযোগীতামূলক হারে পেশাদার, প্রম্পট এবং বিনয়ী কুরিয়ার পরিষেবা প্রদান করা। আমরা আমাদের দক্ষতা, প্রযুক্তি এবং অংশীদারিত্বগুলিকে আমাদের গ্রাহকদের চাহিদার জন্য উদ্ভাবনী লজিস্টিক সমাধানগুলি সরবরাহ করার জন্য, উচ্চ স্তরের গুণমান, নিরাপত্তা এবং সুরক্ষা বজায় রেখে ব্যবহার করি।",
    details:
      "Our vision is to provide professional, prompt, and courteous courier services at competitive rates. We leverage our expertise, technology, and partnerships to deliver innovative logistics solutions to our customers' needs, while maintaining the highest levels of quality, safety, and security.",
  },
  {
    id: 54364564567,
    icon: StrengthIcon,
    title: "Our Strength", titleBn:"আমাদের শক্তি",
    detailsBn:"কুরিয়ার, এয়ার ফ্রেইট ফরওয়ার্ডিং এবং কার্গো একত্রীকরণের ক্ষেত্রে অভিজ্ঞ, যোগ্য, দক্ষ এবং গতিশীল পেশাদারদের একটি দল দ্বারা সমর্থিত, আন্তর্জাতিক কুরিয়ার পরিষেবাগুলিতে Finex একটি নেতা হিসাবে আবির্ভূত হয়েছে। আমাদের কমার্শিয়াল, ফিনান্স, অপারেশনস, এবং হিউম্যান রিসোর্স ডেভেলপমেন্ট ডিভিশনগুলো বিস্তৃত অভিজ্ঞতা সম্পন্ন পেশাদারদের দ্বারা পরিচালিত হয়। কোম্পানির বিষয়গুলি তাদের নিজ নিজ বিভাগের জন্য নিবেদিত ম্যানেজার এবং কর্মীদের একটি যোগ্য এবং অভিজ্ঞ দল দ্বারা পরিচালিত হয়।",
    details:
      "Finex has emerged as a leader in international courier services, supported by a team of experienced, qualified, efficient, and dynamic professionals in the fields of Courier, Air Freight forwarding, and cargo consolidation. Our Commercial, Finance, Operations, and Human Resource Development divisions are led by professionals with extensive experience. The company's affairs are managed by a qualified and experienced team of managers and staff dedicated to their respective divisions.",
  },
];





const HelpStep: React.FC<{ number: string; title: string }> = ({
  number,
  title,
}) => {
  return (
    <div className="w-full h-auto p-1 flex justify-center align-middle items-center gap-4 flex-col group">
      <h1 className="text-lg font-medium text-gray-200 text-center group-hover:text-white transition-all duration-300">
        {title}
      </h1>
      <h1 className="text-5xl font-bold text-gray-400 group-hover:text-white transition-all duration-300">
        {number}
      </h1>
    </div>
  );
};

const WhyFinexBodySection = () => {
  return (
    <div className="w-full h-auto">
      <div className="lg:container sm:p-2 p-4 px-2 pb-10 pt-0 m-auto">
        {/* Flex container for image and text */}
        <div className="w-full h-auto flex flex-col md:flex-row items-center align-middle mb-8">
          {/* Image section */}
          <div className="w-full md:w-[50%] lg:w-[35%] h-auto flex justify-center align-middle items-center p-3">
            {/* Image component */}
            <Image
              src="/delivery-man.png"
              alt="Delivery-Man"
              width={380}
              height={450}
              className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[380px] lg:h-[450px]"
            />
          </div>

          {/* Text section */}
          <div className="w-full md:w-[50%] lg:w-[65%] h-auto p-5">
            {/* English heading */}
            <IsEnglish className="">
              <div className="w-full h-auto flex justify-center align-middle items-center py-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-defult">
                  Why Choose FINEX
                </h1>
              </div>
            </IsEnglish>

            {/* Bangla heading */}
            <IsBangla className="">
              <div className="w-full h-auto flex justify-center align-middle items-center py-8">
                <h1 className="text-5xl md:text-7xl font-bold text-defult text-center bfont">
                  কেন ফিনেক্স কে নির্বাচন করবেন
                </h1>
              </div>
            </IsBangla>

            {/* English text */}
            <IsEnglish className="">
            <div className="w-full h-auto  text-gray-900 ">
            For a fast, reliable, and secure courier service, Faster International Express (FINEX) is your best choice! We don’t just deliver parcels—we deliver peace of mind by ensuring the safety and timely arrival of every shipment. <br />
            
            As an independent courier service provider, we guarantee the highest level of professionalism and personalized care in every delivery. With our strong local network across Surat, we stand apart from competitors by providing faster and more efficient services.
                <br />
                <br />
                <b className="text-2xl text-gray-900">
                Why FINEX?
                </b>{" "}
                <br />
            
                <ul>
                  <li className="text-gray-900  ">
                    <GoCheck className="w-[26px] h-[26px] bg-green-500 text-white  rounded-md border p-[2px] font-bold inline" /> Fast & Secure Delivery – Ensuring on-time arrival
                  </li>
                  <li className="text-gray-900 ">
                  <GoCheck className="w-[26px] h-[26px] bg-green-500 text-white  rounded-md border p-[2px] font-bold inline" />  Hassle-Free Service – Reliable and professional customer support
                  </li>
                  <li className="text-gray-900 ">
                  <GoCheck className="w-[26px] h-[26px] bg-green-500 text-white  rounded-md border p-[2px] font-bold inline" />  Maximum Flexibility – Customized shipping options to meet your needs
                  </li>
                  <li className="text-gray-900 ">
                  <GoCheck className="w-[26px] h-[26px] bg-green-500 text-white  rounded-md border p-[2px] font-bold inline" />  Serving with Excellence Since 2023 – Years of experience and trusted by happy clients
                  </li>
                </ul>
                <br />
                We understand that flexibility is the key to success. That’s why we offer route adjustments, scheduling adaptability, and personalized services tailored to your specific requirements—helping your business run smoothly.<br />
                <br />
                <b className=" text-gray-900 font-bold ">
                Ship with FINEX – Experience fast, secure, and trusted delivery! 🚀📦
                </b>
              </div>
            </IsEnglish>

            {/* Bangla text */}
            <IsBangla className="">
              <div className="w-full h-auto text-2xl text-gray-900 bfont">
                বিশ্বস্ত, দ্রুত ও নির্ভরযোগ্য কুরিয়ার পরিষেবার জন্য ফাস্টার
                ইন্টারন্যাশনাল এক্সপ্রেস (FINEX)-ই আপনার সেরা পছন্দ! আমরা শুধু
                কুরিয়ার পৌঁছে দিই না—আমরা আপনাকে নিশ্চিন্ত করি, প্রতিটি
                পার্সেলের নিরাপত্তা ও সময়মতো ডেলিভারি নিশ্চিত করে। <br />
            
                একটি স্বাধীন কুরিয়ার পরিষেবা প্রদানকারী হিসেবে, আমরা প্রতিটি
                শিপমেন্টে সর্বোচ্চ পেশাদারিত্ব ও ব্যক্তিগত যত্নের নিশ্চয়তা দিই।
                সুরাট জুড়ে আমাদের শক্তিশালী স্থানীয় নেটওয়ার্ক আমাদের
                প্রতিযোগীদের থেকে আলাদা করে, যা দ্রুত ও দক্ষ পরিষেবা প্রদান করতে
                সহায়তা করে। 
                <br />
                <b className="text-3xl text-gray-900 bfont">
                  আমাদের বিশেষত্ব:
                </b>{" "}
                <br />
                <ul>
                  <li className="text-gray-900 bfont text-2xl">
                    <GoCheck className="w-[26px] h-[26px] bg-green-500 text-white  rounded-md border p-[2px] font-bold inline" /> দ্রুত ও নিরাপদ ডেলিভারি – সময়মতো পৌঁছানোর নিশ্চয়তা
                  </li>
                  <li className="text-gray-900 bfont text-2xl">
                  <GoCheck className="w-[26px] h-[26px] bg-green-500 text-white  rounded-md border p-[2px] font-bold inline" />  সম্পূর্ণ ঝামেলা-মুক্ত পরিষেবা – নির্ভরযোগ্য ও পেশাদার
                    কাস্টমার সাপোর্ট
                  </li>
                  <li className="text-gray-900 bfont text-2xl">
                  <GoCheck className="w-[26px] h-[26px] bg-green-500 text-white  rounded-md border p-[2px] font-bold inline" />  সর্বোচ্চ নমনীয়তা – আপনার চাহিদা অনুযায়ী কাস্টমাইজড
                    শিপিং অপশন
                  </li>
                  <li className="text-gray-900 bfont text-2xl">
                  <GoCheck className="w-[26px] h-[26px] bg-green-500 text-white  rounded-md border p-[2px] font-bold inline" />  ২০২৩ সাল থেকে সাফল্যের সাথে পরিষেবা – দীর্ঘদিনের অভিজ্ঞতা
                    ও খুশি ক্লায়েন্টদের বিশ্বাস
                  </li>
                </ul>
                <br />
                আমরা জানি, নমনীয়তা হলো সাফল্যের চাবিকাঠি। তাই, আমরা আপনার
                প্রয়োজন অনুযায়ী রুট পরিবর্তন, কুরিয়ার সময়সূচী সামঞ্জস্য ও
                ব্যক্তিগতকৃত পরিষেবা প্রদান করি, যাতে আপনার ব্যবসা আরও মসৃণভাবে
                পরিচালিত হয়। <br />
                <br />
                <b className="text-2xl text-gray-900 bfont">
                  FINEX-এর সঙ্গে শিপিং করুন – দ্রুত, নিরাপদ ও বিশ্বস্ত পরিষেবার
                  অভিজ্ঞতা নিন! 🚀📦
                </b>
              </div>
            </IsBangla>
          </div>
        </div>
      </div>

   

      <div className="w-full h-auto py-20 pb-4">
        <div className="w-full h-auto bg-defult py-14">
          <div className="lg:container sm:p-2 p-4 px-2 m-auto">
            {/* Text section */}
            <div className="w-full  h-auto p-5">
              {/* English heading */}
              <IsEnglish className="">
                <div className="w-full h-auto flex justify-center align-middle items-center py-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    How are we helpful to our customers?
                  </h1>
                </div>
              </IsEnglish>

              {/* Bangla heading */}
              <IsBangla className="">
                <div className="w-full h-auto flex justify-center align-middle items-center py-4">
                  <h1 className="text-5xl md:text-7xl font-bold text-white text-center bfont">
                    আমরা আমাদের গ্রাহকদের কিভাবে সহায়ক?
                  </h1>
                </div>
              </IsBangla>

              <div className="w-full h-auto p-5 pt-20">
                <div className=" w-full h-auto grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-end">
                  <HelpStep
                    number={"01"}
                    title={"Simple & Instant Rate Quotation"}
                  />
                  <HelpStep
                    number={"02"}
                    title={"Hassle-Free Shipping Process"}
                  />
                  <HelpStep number={"03"} title={"Pickup & Packing Facility"} />
                  <HelpStep number={"04"} title={"Simple Documentation"} />
                  <HelpStep number={"05"} title={"Free Insurance Coverage*"} />
                  <HelpStep
                    number={"06"}
                    title={"Dedicated Customer Support"}
                  />
                  <HelpStep
                    number={"07"}
                    title={"Simplified Customs Procedure"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container m-auto h-auto pt-4 py-20  flex flex-col items-start align-top justify-start gap-8">
            {aboutData.map((item) => (
              <div
                key={item.id}
                className="w-full h-auto flex items-center align-middle justify-start"
              >
                {/* Icon Container */}
                <div className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] p-3 sm:p-5 flex items-center align-middle justify-center">
                  <div className="sm:w-[100px] w-[80px] h-[80px] sm:h-[100px] bg-defult p-4 rounded-full shadow-4xl">
                    <Image width={80} height={80} src={item?.icon?.src} alt={item?.title} />
                  </div>
                </div>

                {/* English Details */}
                <IsEnglish className="w-auto h-auto pl-2">
                  <h1 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h1>
                  <p className="text-base font-normal text-gray-700">
                    {item.details}
                  </p>
                </IsEnglish>

                {/* Bangla Details */}
                <IsBangla className="w-auto h-auto pl-2">
                  <h1 className="text-3xl bfont font-semibold text-gray-800 mb-2">
                    {item?.titleBn}
                  </h1>
                  <p className="text-2xl bfont font-normal text-gray-700">
                    {item?.detailsBn}
                  </p>
                </IsBangla>
              </div>
            ))}
          </div>

      <HomeCustomerReview />
    </div>
  );
};

export default WhyFinexBodySection;
