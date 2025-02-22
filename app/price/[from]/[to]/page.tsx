"use client";
import {
  GET_SHIPPING_PRICE_QUOTE,
  getRequestSend,
} from "@/components/ApiCall/ApiMethod";
import PriceCBMCalculatorSction from "@/components/Price/PriceCBMCalculatorSction";
import { useLoad } from "@/context/LoadContext";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

interface PriceGetProps {
  params: {
    from: string;
    to: string;
  };
}

interface Country {
  name: string;
  _id: string;
}
interface WeightRates {
  gm500?: number;
  gm1000?: number;
  gm1500?: number;
  gm2000?: number;
  gm2500?: number;
  gm3000?: number;
  gm3500?: number;
  gm4000?: number;
  gm4500?: number;
  gm5000?: number;
  gm5500?: number;
  kg6to10?: number;
  kg11to15?: number;
  kg16to20?: number;
  kg21to25?: number;
  kg26to30?: number;
  kg31to40?: number;
  kg41to50?: number;
  kg51to80?: number;
  kg81to100?: number;
  kg101to500?: number;
  kg501to1000?: number;
}
interface SChart {
  _id: string;
  from?: Country;
  to?: Country;
  gift: number;
  premium?: WeightRates;
  affordable?: WeightRates;
  economy?: WeightRates;
}

const PriceGet = ({ params }: PriceGetProps) => {
  const { from, to } = params;

  const [rateChart, setRateChart] = useState<SChart | null>(null);

  const [tab, setTab] = useState({
    premium: true,
    affordable: false,
    economy: false,
  });

  const load = useLoad()

  useEffect(() => {
    load.loadingEnd()
    getRequestSend(GET_SHIPPING_PRICE_QUOTE(from, to)).then((res) => {
      if (res.status == 200) {
        setRateChart(res.data);
      }
    });
  }, [from, load, to]);

  return (
    <div>
      <div
        className="w-full h-auto bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(/bg.png)` }}
      >
        <div className="lg:container h-auto m-auto sm:p-2 p-4  py-20 sm:py-24">
          <h1 className="font-bold text-3xl sm:text-5xl text-white uppercase">
            {rateChart?.from?.name} TO {rateChart?.to?.name}
          </h1>
          <span className="flex flex-row items-center align-middle justify-start text-[16px] sm:text-[20px] gap-[2px] sm:gap-2 font-normal py-2 text-white">
            <Link href={"/"}>HOME</Link>
            <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
            <Link href={"/price/"}>PRICE</Link>
            <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
            <Link
              className="uppercase"
              href={`/price/${rateChart?.from?._id}/${rateChart?.to?._id}`}
            >
              {rateChart?.from?.name} TO {rateChart?.to?.name}
            </Link>
          </span>
        </div>
      </div>

      <div className=" container m-auto h-auto p-2 py-10">
        <div className="w-full h-auto py-5 sm:py-3">
          <div className="sm:hidden">
            <select
              className="w-full px-3 py-[6px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none"
              onChange={(e) => {
                if (e.target.value == "premium") {
                  setTab({
                    premium: true,
                    affordable: false,
                    economy: false,
                  });
                } else if (e.target.value == "affordable") {
                  setTab({
                    premium: false,
                    affordable: true,
                    economy: false,
                  });
                } else if (e.target.value == "economy") {
                  setTab({
                    premium: false,
                    affordable: false,
                    economy: true,
                  });
                }
              }}
            >
              <option value={"premium"}>PREMIUM</option>
              <option value={"affordable"}>PREMIUM</option>
              <option value={"economy"}>ECONOMY</option>
            </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex ">
            <li
              className="w-full focus-within:z-10 cursor-pointer"
              onClick={() => {
                setTab({
                  premium: true,
                  affordable: false,
                  economy: false,
                });
              }}
            >
              <span className="inline-block w-full p-3  bg-defult hover:bg-defult/85 text-white border-r rounded-s-lg">
              PREMIUM
              </span>
            </li>
            <li
              className="w-full focus-within:z-10 cursor-pointer "
              onClick={() => {
                setTab({
                  premium: false,
                  affordable: true,
                  economy: false,
                });
              }}
            >
              <span className="inline-block w-full p-3  bg-defult hover:bg-defult/85 text-white border-r">
              AFFORDABLE
              </span>
            </li>
            <li
              className="w-full focus-within:z-10 cursor-pointer"
              onClick={() => {
                setTab({
                  premium: false,
                  affordable: false,
                  economy: true,
                });
              }}
            >
              <span className="inline-block w-full p-3  bg-defult hover:bg-defult/85 text-white border-r">
              ECONOMY
              </span>
            </li>
         
          </ul>
        </div>

        {tab.premium && (
          <>
            <h1 className="text-lg font-semibold ">PREMIUM SHIPPING RATE</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-2 pt-3 pb-3">
              {Object.entries(rateChart?.premium ?? {}).map(([name, value]) => (
                <div
                  key={name}
                  className="w-full h-auto flex justify-between items-center align-middle border p-2 text-lg"
                >
                  <div>
                    {" "}
                    {name == "gm500"
                      ? "500 GM"
                      : name == "gm1000"
                      ? "1 KG"
                      : name == "gm1500"
                      ? "1.5 KG"
                      : name == "gm1500"
                      ? "1.5 KG"
                      : name == "gm2000"
                      ? "2 KG"
                      : name == "gm2500"
                      ? "2.5 KG"
                      : name == "gm3000"
                      ? "3 KG"
                      : name == "gm3500"
                      ? "3.5 KG"
                      : name == "gm4000"
                      ? "4 KG"
                      : name == "gm4500"
                      ? "4.5 KG"
                      : name == "gm5000"
                      ? "5 KG"
                      : name == "gm5500"
                      ? "5.5 KG"
                      : name == "kg6to10"
                      ? "6 TO 10 PER KG"
                      : name == "kg11to15"
                      ? "11 TO 15 PER KG"
                      : name == "kg16to20"
                      ? "16 TO 20 PER KG"
                      : name == "kg21to25"
                      ? "21 TO 25 PER KG"
                      : name == "kg26to30"
                      ? "26 TO 30 PER KG"
                      : name == "kg31to40"
                      ? "31 TO 40 PER KG"
                      : name == "kg41to50"
                      ? "41 TO 50 PER KG"
                      : name == "kg51to80"
                      ? "51 TO 80 PER KG"
                      : name == "kg81to100"
                      ? "81 TO 100 PER KG"
                      : name == "kg101to500"
                      ? "101 TO 500 PER KG"
                      : name == "kg501to1000"
                      ? "501 TO 1000 PER KG"
                      : ""}{" "}
                  </div>

                  <div> = {value} TK</div>
                </div>
              ))}
            </div>
          </>
        )}
        {tab.affordable && (
          <>
            <h1 className="text-lg font-semibold ">AFFORDABLE SHIPPING RATE</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-2 pt-3 pb-3">
              {Object.entries(rateChart?.affordable ?? {}).map(([name, value]) => (
                <div
                  key={name}
                  className="w-full h-auto flex justify-between items-center align-middle border p-2 text-lg"
                >
                  <div>
                    {" "}
                    {name == "gm500"
                      ? "500 GM"
                      : name == "gm1000"
                      ? "1 KG"
                      : name == "gm1500"
                      ? "1.5 KG"
                      : name == "gm1500"
                      ? "1.5 KG"
                      : name == "gm2000"
                      ? "2 KG"
                      : name == "gm2500"
                      ? "2.5 KG"
                      : name == "gm3000"
                      ? "3 KG"
                      : name == "gm3500"
                      ? "3.5 KG"
                      : name == "gm4000"
                      ? "4 KG"
                      : name == "gm4500"
                      ? "4.5 KG"
                      : name == "gm5000"
                      ? "5 KG"
                      : name == "gm5500"
                      ? "5.5 KG"
                      : name == "kg6to10"
                      ? "6 TO 10 PER KG"
                      : name == "kg11to15"
                      ? "11 TO 15 PER KG"
                      : name == "kg16to20"
                      ? "16 TO 20 PER KG"
                      : name == "kg21to25"
                      ? "21 TO 25 PER KG"
                      : name == "kg26to30"
                      ? "26 TO 30 PER KG"
                      : name == "kg31to40"
                      ? "31 TO 40 PER KG"
                      : name == "kg41to50"
                      ? "41 TO 50 PER KG"
                      : name == "kg51to80"
                      ? "51 TO 80 PER KG"
                      : name == "kg81to100"
                      ? "81 TO 100 PER KG"
                      : name == "kg101to500"
                      ? "101 TO 500 PER KG"
                      : name == "kg501to1000"
                      ? "501 TO 1000 PER KG"
                      : ""}{" "}
                  </div>

                  <div> = {value} TK</div>
                </div>
              ))}
            </div>
          </>
        )}
        {tab.economy && (
          <>
            <h1 className="text-lg font-semibold ">ECONOMY SHIPPING RATE</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-2 pt-3 pb-3">
              {Object.entries(rateChart?.economy ?? {}).map(([name, value]) => (
                <div
                  key={name}
                  className="w-full h-auto flex justify-between items-center align-middle border p-2 text-lg"
                >
                  <div>
                    {" "}
                    {name == "gm500"
                      ? "500 GM"
                      : name == "gm1000"
                      ? "1 KG"
                      : name == "gm1500"
                      ? "1.5 KG"
                      : name == "gm1500"
                      ? "1.5 KG"
                      : name == "gm2000"
                      ? "2 KG"
                      : name == "gm2500"
                      ? "2.5 KG"
                      : name == "gm3000"
                      ? "3 KG"
                      : name == "gm3500"
                      ? "3.5 KG"
                      : name == "gm4000"
                      ? "4 KG"
                      : name == "gm4500"
                      ? "4.5 KG"
                      : name == "gm5000"
                      ? "5 KG"
                      : name == "gm5500"
                      ? "5.5 KG"
                      : name == "kg6to10"
                      ? "6 TO 10 PER KG"
                      : name == "kg11to15"
                      ? "11 TO 15 PER KG"
                      : name == "kg16to20"
                      ? "16 TO 20 PER KG"
                      : name == "kg21to25"
                      ? "21 TO 25 PER KG"
                      : name == "kg26to30"
                      ? "26 TO 30 PER KG"
                      : name == "kg31to40"
                      ? "31 TO 40 PER KG"
                      : name == "kg41to50"
                      ? "41 TO 50 PER KG"
                      : name == "kg51to80"
                      ? "51 TO 80 PER KG"
                      : name == "kg81to100"
                      ? "81 TO 100 PER KG"
                      : name == "kg101to500"
                      ? "101 TO 500 PER KG"
                      : name == "kg501to1000"
                      ? "501 TO 1000 PER KG"
                      : ""}{" "}
                  </div>

                  <div> = {value} TK</div>
                </div>
              ))}
            </div>
          </>
        )}
       

        <IsEnglish className="">
          <div className="w-full h-auto py-5">
            <h1 className="text-lg font-semibold">
              IMPORTANT NOTICE TO OUR VALUED CUSTOMERS
            </h1>
            <ul className=" list-decimal pl-6 flex flex-col gap-3 py-5">
              <li>
                <h1 className="text-base font-medium">Delivery Timeline:</h1>
                <p className=" text-base font-light">
                  If you require additional time for product delivery, please
                  contact us in advance. We offer services that may require
                  extended timelines.
                </p>
              </li>

              <li>
                <h1 className="text-base font-medium">Applicable Rates</h1>
                <ul className=" list-decimal pl-4 flex flex-col gap-1">
                  <li className=" text-base font-light">
                    The quoted rates apply only to garments, jute, and
                    handicraft items.
                  </li>
                  <li className=" text-base font-light">
                    For gift shipments, a 15% VAT will be added.
                  </li>
                  <li>
                    <h1 className="text-base font-medium">
                      For other items such as shoes, bags, or ornaments:
                    </h1>
                    <ul className="list-disc pl-4 flex flex-col gap-1">
                      <li className=" text-base font-light">
                        Add 20% for gift mode if the parcel contains
                        non-clothing items.
                      </li>
                      <li className=" text-base font-light">
                        If the parcel weighs below 10kg, a fixed charge of 3500
                        BDT will be added.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <h1 className="text-base font-medium">Prohibited Items</h1>
                <p className=" text-base font-light">
                  Gold, silver, or any precious metals are strictly prohibited.
                  Any such items will be seized by customs authorities.
                </p>
              </li>

              <li>
                <h1 className="text-base font-medium">
                  Address and Contact Information
                </h1>
                <p className=" text-base font-light">
                  Please ensure you provide the correct address and phone
                  number. We cannot take responsibility for incorrect
                  information.
                </p>
              </li>
              <li>
                <h1 className="text-base font-medium">CBM Charges</h1>
                <p className=" text-base font-light">
                  If your item is measured in cubic meters (CBM), the applicable
                  CBM weight pricing will apply.
                </p>
              </li>
              <li>
                <h1 className="text-base font-medium">
                  Product Missing or Damage Policy
                </h1>
                <ul className=" list-decimal pl-4 flex flex-col gap-1">
                  <li>
                    <ul className=" list-disc pl-4 flex flex-col gap-1">
                      <h1 className="text-base font-medium">
                        We are committed to providing the highest level of
                        customer service. However, in the event of product loss
                        or damage during export/import, please adhere to the
                        following steps:
                      </h1>
                      <li className=" text-base font-light">
                        Provide an accurate packing list before the package
                        departure.
                      </li>
                      <li className=" text-base font-light">
                        Upon receiving your package, ensure to take a short,
                        uncut video during unboxing.
                      </li>
                      <li className=" text-base font-light">
                        Without a proper uncut unboxing video, we will not be
                        held liable for any claims.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p className=" text-base font-semibold">
              We appreciate your cooperation in helping us maintain smooth and
              reliable service. Thank you for choosing us as your logistics
              partner!
            </p>
          </div>
        </IsEnglish>

        <IsBangla className="">
          <div className="w-full h-auto py-5">
            <h1 className="bfont text-2xl">
              আমাদের সম্মানিত গ্রাহকদের জন্য গুরুত্বপূর্ণ বিজ্ঞপ্তি
            </h1>
            <ul className=" list-decimal pl-6 flex flex-col gap-3 py-5">
              <li>
                <h1 className="bfont text-2xl">প্রযোজ্য হার</h1>
                <ul className=" list-disc pl-4 flex flex-col gap-1">
                  <li>
                    উল্লেখিত হার শুধুমাত্র পোশাক, পাট এবং হস্তশিল্পের জন্য
                    প্রযোজ্য।
                  </li>
                  <li>গিফট শিপমেন্টের জন্য ১৫% ভ্যাট প্রযোজ্য হবে।</li>
                  <li>
                    <h1 className="bfont text-2xl">
                      জুতা, ব্যাগ বা গহনার মতো অন্যান্য আইটেমের জন্য:
                    </h1>
                    <ul className=" list-decimal pl-4 flex flex-col gap-1">
                      <li>পোশাকবিহীন আইটেম থাকলে গিফট মোডে ২০% যোগ হবে।</li>
                      <li>
                        যদি পার্সেলের ওজন ১০ কেজির নিচে হয়, তবে নির্ধারিত ৩৫০০
                        টাকা চার্জ প্রযোজ্য হবে।
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h1 className="bfont text-2xl">নিষিদ্ধ আইটেম</h1>
                <p>
                  স্বর্ণ, রূপা বা যে কোনো মূল্যবান ধাতু সম্পূর্ণ নিষিদ্ধ। এ
                  ধরনের আইটেম কাস্টম কর্তৃপক্ষ দ্বারা জব্দ করা হবে।
                </p>
              </li>
              <li>
                <h1 className="bfont text-2xl">ঠিকানা এবং যোগাযোগের তথ্য</h1>
                <p>
                  দয়া করে সঠিক ঠিকানা এবং ফোন নম্বর প্রদান করুন। ভুল তথ্যের
                  জন্য আমরা দায়ী থাকব না।
                </p>
              </li>
              <li>
                <h1 className="bfont text-2xl">সিবিএম চার্জ</h1>
                <p>
                  যদি আপনার পণ্য কিউবিক মিটার (CBM) হিসেবে মাপা হয়, তাহলে
                  প্রযোজ্য সিবিএম ওজন মূল্য প্রযোজ্য হবে।
                </p>
              </li>
              <li>
                <h1 className="bfont text-2xl">
                  পণ্য হারানো বা ক্ষতির নীতিমালা
                </h1>
                <ul className=" list-disc pl-4 flex flex-col gap-1">
                  <li>
                    <h1 className="bfont text-2xl">
                      আমরা সর্বোচ্চ মানের গ্রাহক পরিষেবা প্রদান করতে
                      প্রতিশ্রুতিবদ্ধ। তবে, এক্সপোর্ট/ইমপোর্টের সময় পণ্য হারানো
                      বা ক্ষতিগ্রস্ত হলে, নিম্নলিখিত ধাপগুলি অনুসরণ করুন:
                    </h1>
                    <ul className=" list-decimal pl-4 flex flex-col gap-1">
                      <li>
                        পার্সেল পাঠানোর আগে সঠিক প্যাকিং তালিকা প্রদান করুন।
                      </li>
                      <li>
                        পার্সেল গ্রহণের পরে আনবক্স করার সময় একটি সংক্ষিপ্ত,
                        কাটছাঁটবিহীন ভিডিও তৈরি করুন।
                      </li>
                      <li>
                        সঠিক এবং কাটছাঁটবিহীন আনবক্সিং ভিডিও ছাড়া, আমরা কোনো
                        দাবির জন্য দায়ী থাকব না।
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p className="bfont text-2xl">
              আমাদের সেবা নিরবচ্ছিন্ন এবং নির্ভরযোগ্য রাখতে আপনার সহযোগিতা কামনা
              করছি। আমাদের লজিস্টিক পার্টনার হিসেবে আপনাকে ধন্যবাদ!
            </p>
          </div>
        </IsBangla>
      </div>

      <div className="">
        
    <PriceCBMCalculatorSction />
      </div>
    </div>
  );
};

export default PriceGet;
