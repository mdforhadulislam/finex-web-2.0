import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import React from "react";
import { FcCancel, FcCheckmark } from "react-icons/fc";

const PriceSubscriptionSection = () => {
  return (
    <div className=" container m-auto h-auto px-2 py-6">
      <IsEnglish className="w-full h-auto flex justify-center align-middle items-center">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-defult text-center uppercase">
          Subscription Plan
        </h1>
      </IsEnglish>
      <IsBangla className="w-full h-auto flex justify-center align-middle items-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-defult bfont text-center">
          সাবস্ক্রিপশন প্ল্যান
        </h1>
      </IsBangla>

      <div className="w-full h-auto py-8">
        <div className="w-full h-auto grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
          
        <div className="w-full h-auto p-2 flex justify-center group">
            <div className=" w-[270px] h-[430px] bg-defult p-5 shadow-4xl rounded-lg relative   group-hover:-ml-7 transition-all duration-200">
              <div className="w-[60px] h-[350px] bg-defult shadow-[12px_3px_14px_0px] text-black/35 rounded-tr-[50px] rounded-br-[50px] absolute top-10 left-0"></div>

              <div className="w-[230px] h-[390px] bg-white group-hover:ml-12 rounded-md group-hover:shadow-[12px_3px_14px_0px] group-hover:text-black/50 transition-all duration-200">
                <div className="w-full h-auto flex justify-center align-middle items-center text-white">
                  <IsEnglish className="w-full h-auto p-3 py-5 bg-defult/90 text-white rounded-md font-bold flex justify-center align-middle items-center flex-col gap-3">
                    <h1 className="text-lg">BASIC</h1>
                    <h2 className="text-2xl">Free</h2>
                  </IsEnglish>
                  <IsBangla className="w-full h-auto p-3 py-5 bg-defult/90 text-white rounded-md font-bold flex justify-center align-middle items-center flex-col gap-3">
                    <h1 className="text-2xl bfont">বেসিক</h1>
                    <h2 className="text-4xl bfont">ফ্রী</h2>
                  </IsBangla>
                </div>

                <div className="w-full h-auto px-2 py-6 text-black">
                  <ul className="w-full h-auto flex flex-col justify-center align-top items-start gap-1">
                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCheckmark className="w-6 h-6" />
                      <span>24 Hour Support</span>
                    </li>

                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCheckmark className="w-6 h-6" />{" "}
                      <span>Free Packaging</span>
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
                      <span>5% discount </span>
                    </li>
                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCancel className="w-6 h-6" />
                      <span>Shipments solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-auto p-2 flex justify-center group">
            <div className=" w-[270px] h-[430px] bg-defult p-5 shadow-4xl rounded-lg relative   group-hover:-ml-7 transition-all duration-200">
              <div className="w-[60px] h-[350px] bg-defult shadow-[12px_3px_14px_0px] text-black/35 rounded-tr-[50px] rounded-br-[50px] absolute top-10 left-0"></div>

              <div className="w-[230px] h-[390px] bg-white group-hover:ml-12 rounded-md group-hover:shadow-[12px_3px_14px_0px] group-hover:text-black/50 transition-all duration-200">
                <div className="w-full h-auto flex justify-center align-middle items-center text-white">
                  <IsEnglish className="w-full h-auto p-3 py-5 bg-defult/90 text-white rounded-md font-bold flex justify-center align-middle items-center flex-col gap-3">
                    <h1 className="text-lg">STANDARD</h1>
                    <h2 className="text-2xl">1500TK/MONTH</h2>
                  </IsEnglish>
                  <IsBangla className="w-full h-auto p-3 py-5 bg-defult/90 text-white rounded-md font-bold flex justify-center align-middle items-center flex-col gap-3">
                    <h1 className="text-2xl bfont">স্ট্যান্ডার্ড</h1>
                    <h2 className="text-4xl bfont">১৫০০টাকা/মাস</h2>
                  </IsBangla>
                </div>

                <div className="w-full h-auto px-2 py-6 text-black">
                  <ul className="w-full h-auto flex flex-col justify-center align-top items-start gap-1">
                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCheckmark className="w-6 h-6" />
                      <span>24 Hour Support</span>
                    </li>

                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCheckmark className="w-6 h-6" />{" "}
                      <span>Free Packaging</span>
                    </li>

                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCheckmark className="w-6 h-6" />
                      <span>Live Tracking</span>
                    </li>

                    <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                      <span>Documentation</span>
                    </li>
                    <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                      <span>Free Home Pickup</span>
                    </li>

                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCancel className="w-6 h-6" />
                      <span>5% discount </span>
                    </li>
                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCancel className="w-6 h-6" />
                      <span>Shipments solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-auto p-2 flex justify-center group">
            <div className=" w-[270px] h-[430px] bg-defult p-5 shadow-4xl rounded-lg relative   group-hover:-ml-7 transition-all duration-200">
              <div className="w-[60px] h-[350px] bg-defult shadow-[12px_3px_14px_0px] text-black/35 rounded-tr-[50px] rounded-br-[50px] absolute top-10 left-0"></div>

              <div className="w-[230px] h-[390px] bg-white group-hover:ml-12 rounded-md group-hover:shadow-[12px_3px_14px_0px] group-hover:text-black/50 transition-all duration-200">
                <div className="w-full h-auto flex justify-center align-middle items-center text-white">
                  <IsEnglish className="w-full h-auto p-3 py-5 bg-defult/90 text-white rounded-md font-bold flex justify-center align-middle items-center flex-col gap-3">
                    <h1 className="text-lg">PREMIUM</h1>
                    <h2 className="text-2xl">3000TK/MONTH</h2>
                  </IsEnglish>
                  <IsBangla className="w-full h-auto p-3 py-5 bg-defult/90 text-white rounded-md font-bold flex justify-center align-middle items-center flex-col gap-3">
                    <h1 className="text-2xl bfont">প্রিমিয়াম</h1>
                    <h2 className="text-4xl bfont">৩০০০টাকা/মাস</h2>
                  </IsBangla>
                </div>

                <div className="w-full h-auto px-2 py-6 text-black">
                  <ul className="w-full h-auto flex flex-col justify-center align-top items-start gap-1">
                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCheckmark className="w-6 h-6" />
                      <span>24 Hour Support</span>
                    </li>

                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCheckmark className="w-6 h-6" />
                      <span>Free Packaging</span>
                    </li>

                    <li className="flex justify-start items-center align-middle gap-3">
                      <FcCheckmark className="w-6 h-6" />
                      <span>Live Tracking</span>
                    </li>

                    <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                      <span>Documentation</span>
                    </li>
                    <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                      <span>Free Home Pickup</span>
                    </li>

                    <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                      <span>5% discount </span>
                    </li>
                    <li className="flex justify-start items-center align-middle gap-3">
                    <FcCheckmark className="w-6 h-6" />
                      <span>Shipments solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PriceSubscriptionSection;
