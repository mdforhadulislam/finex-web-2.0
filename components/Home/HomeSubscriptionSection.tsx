import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

const HomeSubscriptionSection = () => {
  return (
    <div className="w-full h-auto bg-white">
      <div className=" container m-auto px-2 sm:px-2 py-10">
        <IsEnglish className="w-full h-auto flex justify-center align-middle items-center">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-defult text-center">
            Subscription Plan
          </h1>
        </IsEnglish>
        <IsBangla className="w-full h-auto flex justify-center align-middle items-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-defult bfont text-center">
            সাবস্ক্রিপশন প্ল্যান
          </h1>
        </IsBangla>

        <div className="w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 p-2 py-10 ">


          <div className="w-full h-auto p-2">
            <div className="w-full h-auto shadow-3xl rounded-xl">
              <IsEnglish className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-lg">BASIC</h1>
                <h2 className="text-3xl">Free</h2>
              </IsEnglish>
              <IsBangla className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-2xl bfont">বেসিক</h1>
                <h2 className="text-5xl bfont">ফ্রী</h2>
              </IsBangla>
              <div className="w-full h-auto px-3 py-6">
                <ul className="w-full h-auto flex flex-col justify-center align-top items-start gap-1">
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>24 Hour Support</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />{" "}
                    <span>Free Packaging(Any Type Of Box)</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Live Tracking</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />
                    <span>Documentation</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />{" "}
                    <span>Free Home Pickup</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />
                    <span>5% Discount After 10 Shipments</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />
                    <span>Shipments Suggestions</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />
                    <span>Shipment Solutation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* special suggestion */}
   
          <div className="w-full h-auto p-2">
            <div className="w-full h-auto shadow-3xl rounded-xl">
              <IsEnglish className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-lg">STANDARD</h1>
                <h2 className="text-3xl">1500TK/MONTH</h2>
              </IsEnglish>
              <IsBangla className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-2xl bfont">স্ট্যান্ডার্ড</h1>
                <h2 className="text-5xl bfont">১৫০০টাকা/মাস</h2>
              </IsBangla>
              <div className="w-full h-auto px-3 py-6">
                <ul className="w-full h-auto flex flex-col justify-center align-top items-start gap-1">
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>24 Hour Support</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Standard Packaging</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Documentation</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Live Tracking</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Free Home Pickup</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>5% Discount After 10 Shipments</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />
                    <span>Shipments Suggestions</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCancel className="w-6 h-6" />
                    <span>Shipment Solutation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full h-auto p-2">
            <div className="w-full h-auto shadow-3xl rounded-xl">
              <IsEnglish className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-lg">PREMIUM</h1>
                <h2 className="text-3xl">3000TK/MONTH</h2>
              </IsEnglish>
              <IsBangla className="w-full h-auto p-4 py-8 bg-defult text-white shadow-3xl rounded-2xl font-bold flex justify-center align-middle items-center flex-col gap-4">
                <h1 className="text-2xl bfont">প্রিমিয়াম </h1>
                <h2 className="text-5xl bfont">৩০০০টাকা/মাস</h2>
              </IsBangla>

              <div className="w-full h-auto px-3 py-6">
                <ul className="w-full h-auto flex flex-col justify-center align-top items-start gap-1">
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>24 Hour Support</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />{" "}
                    <span>Special Packaging</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Documentation</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Live Tracking</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />{" "}
                    <span>Free Home Pickup</span>
                  </li>
                  
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>5% Discount After 5 Shipments</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Shipments Suggestions</span>
                  </li>
                  <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                    <span>Shipment Solutation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HomeSubscriptionSection;
