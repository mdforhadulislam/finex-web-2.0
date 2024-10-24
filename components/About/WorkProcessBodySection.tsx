import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Image from "next/image";
import HomeCustomerReview from "../Home/HomeCustomerReview";

const WorkProcessBodySection = () => {
  const processStep = [
    {
      img: "/Choose Shipment.png",
      title: "Get a Quote",
      details: "Get clear and reliable shipping quotes for 220+ countries.",
    },
    {
      img: "/pickup.png",
      title: "Pick",
      titleBn: "",
      detailsBn: "",
      details:
        "Get a fast and convenient doorstep pickup for your shipment anywhere in Bangladesh.",
    },
    {
      img: "/pack.png",
      title: "Pack",
      titleBn: "",
      detailsBn: "",
      details: "We pack your shipments according to international standards.",
    },
    {
      img: "/Pack and ship.png",
      title: "Ship",
      titleBn: "",
      detailsBn: "",
      details: "Smooth & stress-free shipping every time.",
    },
    {
      img: "/Track.png",
      title: "Track",
      titleBn: "",
      detailsBn: "",
      details: "Get real-time tracking updates for your shipment.",
    },
    {
      img: "/deliverd.png",
      title: "Delivered",
      titleBn: "",
      detailsBn: "",
      details: "Get your shipment delivered to your designated address.",
    },
  ];

  const shippingPartners = [
    {
      title: "ap",
      img: "/ap.png",
    },
    {
      title: "aramex",
      img: "/aramex.png",
    },
    {
      title: "cp",
      img: "/cp.png",
    },
    {
      title: "dhl",
      img: "/dhl.png",
    },
    {
      title: "dtdc",
      img: "/dtdc.png",
    },
    {
      title: "fedex",
      img: "/fedex.png",
    },
    {
      title: "spe",
      img: "/sp.png",
    },
    {
      title: "tntey",
      img: "/tnt.png",
    },
    {
      title: "aprr",
      img: "/ap.png",
    },
    {
      title: "aramextt",
      img: "/aramex.png",
    },
    {
      title: "cpyy",
      img: "/cp.png",
    },
    {
      title: "ups",
      img: "/ups.png",
    },
    {
      title: "dtdct",
      img: "/dtdc.png",
    },
    {
      title: "fedext",
      img: "/fedex.png",
    },
    {
      title: "spet",
      img: "/sp.png",
    },
    {
      title: "tnter",
      img: "/tnt.png",
    },
  ];

  const featuresData = [
    {
      id: 14535,
      title: "International Coverage",
      icon: "/1.png",
      titleBn: "আন্তর্জাতিক কভারেজ",
      detailsBn:
        "আন্তর্জাতিক কভারেজ: ফিনেক্স বিশ্বব্যাপী মূল গন্তব্যে বিদেশী সহযোগীদের বিস্তৃত নেটওয়ার্ক সহ সারা বিশ্বে কুরিয়ার এবং কার্গো পরিষেবা সরবরাহ করে।",
      details:
        "International Coverage: Finex offers courier and cargo services across the globe, with a wide network of overseas associates in key destinations worldwide.",
    },
    {
      id: 265553,
      title: "Complete Logistic Solutions",
      icon: "/2.png",
      titleBn: "সম্পূর্ণ লজিস্টিক সমাধান",
      detailsBn:
        "ফিনেক্স ব্যাপক লজিস্টিক সমাধান প্রদান করে, বিভিন্ন শিল্প থেকে কর্পোরেট এবং ব্যবসার চাহিদা পূরণ করে।",
      details:
        "Finex provides comprehensive logistic solutions, catering to the needs of corporates and businesses from diverse industries.",
    },
    {
      id: 3363432,
      title: "Reliable Customer Care",
      icon: "/3.png",
      titleBn: "নির্ভরযোগ্য কাস্টমার কেয়ার",
      detailsBn:
        "ফিনেক্স তাৎক্ষণিক এবং প্রতিক্রিয়াশীল গ্রাহক পরিষেবা প্রদান করে, প্রশ্নের সমাধান করে এবং যখনই প্রয়োজন হয় সহায়তা প্রদান করে।",
      details:
        "Finex offers prompt and responsive customer service, addressing queries and providing assistance whenever needed.",
    },
    {
      id: 443536,
      title: "Efficient Transportation Management",
      icon: "/4.png",
      titleBn: "দক্ষ পরিবহন ব্যবস্থাপনা",
      detailsBn:
        "ফিনেক্স গ্রাহকদের পরিবহন সিদ্ধান্ত এবং সম্পর্কিত খরচের উপর সম্পূর্ণ নিয়ন্ত্রণ দেয়, শিপমেন্ট পরিচালনার প্রক্রিয়াকে সহজ করে।",
      details:
        "Finex gives customers full control over transportation decisions and related costs, simplifying the process of managing shipments.",
    },
    {
      id: 5435362,
      title: "High-Quality Services",
      icon: "/5.png",
      titleBn: "উচ্চ মানের পরিষেবা",
      detailsBn:
        "ফিনেক্স তার আন্তর্জাতিক মানসম্পন্ন মানের পরিষেবার জন্য স্বীকৃত, উচ্চতর মানের নিয়ন্ত্রণ ব্যবস্থা বজায় রাখা এবং সময়সীমার ডেলিভারি নিশ্চিত করা।",
      details:
        "Finex is recognized for its international standard quality services, maintaining superior quality control mechanisms and ensuring time-bound deliveries.",
    },
    {
      id: 645645756,
      title: "Secure and Safe Delivery",
      icon: "/6.png",
      titleBn: "নিরাপদ এবং নিরাপদ ডেলিভারি",
      detailsBn:
        "ফিনেক্স শিপমেন্ট পরিচালনার ক্ষেত্রে সর্বোচ্চ যত্ন নেয়, ট্রানজিটের সময় তাদের নিরাপত্তা ও নিরাপত্তা নিশ্চিত করে।",
      details:
        "Finex takes utmost care in handling shipments, ensuring their safety and security during transit.",
    },
    {
      id: 75464654,
      title: "Expert Team",
      icon: "/7.png",
      titleBn: "বিশেষজ্ঞ দল",
      detailsBn:
        "ফিনেক্স-এর কুরিয়ার পরিষেবা, এয়ার ফ্রেইট ফরওয়ার্ডিং এবং কার্গো একত্রীকরণের ক্ষেত্রে অভিজ্ঞ পেশাদারদের একটি দল রয়েছে, যা দক্ষ এবং নির্ভরযোগ্য অপারেশনগুলি নিশ্চিত করে৷",
      details:
        "Finex has a team of experienced professionals in the fields of courier services, air freight forwarding, and cargo consolidation, ensuring efficient and reliable operations.",
    },
    {
      id: 8436456,
      title: "Strategic Tie-ups",
      icon: "/8.png",
      titleBn: "কৌশলগত টাই-আপ",
      detailsBn:
        "ফিনেক্স নেতৃস্থানীয় কুরিয়ার কোম্পানিগুলির সাথে কৌশলগত চুক্তি স্থাপন করেছে, আন্তর্জাতিক নথি এবং প্যাকেজগুলির নির্ভরযোগ্যতা এবং সময়-নির্দিষ্ট ডেলিভারি বাড়িয়েছে।",
      details:
        "Finex has established strategic tie-ups with leading courier companies, enhancing the reliability and time-definite delivery of international documents and packages.",
    },
    {
      id: 956464,
      title: "Transparent and Honest Operations",
      icon: "/9.png",
      titleBn: "স্বচ্ছ এবং সৎ অপারেশন",
      detailsBn:
        "ফিনেক্স স্বচ্ছতা এবং সততার সাথে কাজ করে, স্পষ্ট তথ্য প্রদান করে এবং নৈতিক ব্যবসায়িক অনুশীলন বজায় রাখে।",
      details:
        "Finex operates with transparency and integrity, providing clear information and maintaining ethical business practices.",
    },
  ];

  return (
    <div className="w-full h-auto p-2 ">
      <div className="container m-auto py-14 pt-20">
        <IsEnglish className="">
          <h1 className="text-2xl md:text-4xl sm:text-3xl lg:text-5xl text-center font-bold text-defult">
            Simple & Hassle Free Shipping Process
          </h1>
        </IsEnglish>

        <IsBangla className="">
          <h1 className="text-2xl md:text-6xl sm:text-5xl lg:text-7xl bfont text-center font-bold text-defult">
            সহজ এবং ঝামেলা মুক্ত শিপিং প্রক্রিয়া
          </h1>
        </IsBangla>

        <div className="w-full h-auto p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 items-center align-top justify-start py-6 pt-14">
          {processStep.map((item) => (
            <div
              key={item.title}
              className="w-full h-full p-1 flex-col flex items-center gap-3 group"
            >
              <div className="w-[160px] h-[160px] p-6 rounded-full shadow-4xl flex flex-col items-center align-middle justify-center">
                <Image
                  width={110}
                  height={70}
                  className="w-[110px] h-[70px]"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <h1 className="text-lg text-center font-semibold text-gray-800 group-hover:text-defult transition-all duration-200">
                {item.title}
              </h1>
              <p className="text-sm text-center text-gray-500 group-hover:text-gray-800 transition-all duration-200">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-8  sm:p-2 p-4 sm:py-14 pt-5 m-auto">
        <IsEnglish className="w-full h-auto text-center flex justify-center align-middle items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-defult px-5 mb-10 mt-4">
            FINEX SHIPPING PARTNERS
          </h1>
        </IsEnglish>

        <IsBangla className="w-full h-auto text-center flex justify-center align-middle items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-defult px-5 mb-10 mt-4 bfont">
            ফিনেক্স শিপিং অংশীদার
          </h1>
        </IsBangla>

        <div className="w-full h-auto text-center pt-6">
          {shippingPartners.map((item) => (
            <Image
              width={150}
              height={150}
              className="w-[90px] sm:w-[120px] md:w-[150px] inline-block p-3"
              key={item.title}
              src={item.img}
              alt={item?.title}
            />
          ))}
        </div>
      </div>

      <div className="container h-auto m-auto py-5">
        <IsEnglish className="w-full h-auto text-center flex flex-col justify-center align-middle items-center py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-defult p-2 py-4">
            OUR FEATURES
          </h1>
          <p className="md:w-[600px] w-full px-8 h-auto flex justify-center align-middle items-center text-base">
            We enjoy adapting our strategies to offer every client the best
            solutions that are at the forefront of the industry.
          </p>
        </IsEnglish>

        <IsBangla className="w-full h-auto text-center flex flex-col justify-center align-middle items-center py-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-defult p-2 py-4 bfont">
            আমাদের বৈশিষ্ট্য
          </h1>
          <p className="md:w-[600px] w-full px-8 h-auto flex justify-center align-middle items-center bfont text-xl">
            আমরা প্রতিটি ক্লায়েন্টকে শিল্পের অগ্রভাগে থাকা সেরা সমাধানগুলি অফার
            করার জন্য আমাদের কৌশলগুলিকে অভিযোজিত করা উপভোগ করি।
          </p>
        </IsBangla>

        <div className="w-full h-auto px-2 py-4 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pb-5">
          {featuresData.map(({ title, icon, id, details,titleBn,detailsBn }) => {
            return (
              <div key={id} className="w-full h-full p-2 pb-0">
                <div className="w-full h-full p-4 pb-2 shadow-3xl rounded-lg border">
                  <div className="w-full h-auto flex justify-center align-middle items-center p-3 pt-2">
                    <Image width={100} height={100} src={icon} alt={title} />
                  </div>
                  <IsEnglish className="w-full h-full p-2 ">
                    <h1 className={` mb-3 text-gray-900 text-xl font-semibold`}>
                      {title}
                    </h1>
                    <p
                      className={`font-normal text-gray-800 text-justify text-base`}
                    >
                      {details}
                    </p>
                  </IsEnglish>
                  <IsBangla className="w-full h-full p-2 ">
                    <h1 className={` mb-3 text-gray-900 text-3xl font-semibold bfont`}>
                      {titleBn}
                    </h1>
                    <p
                      className={`font-normal text-gray-800 text-justify text-xl bfont`}
                    >
                      {detailsBn}
                    </p>

                  


                  </IsBangla>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <HomeCustomerReview />
    </div>
  );
};

export default WorkProcessBodySection;
