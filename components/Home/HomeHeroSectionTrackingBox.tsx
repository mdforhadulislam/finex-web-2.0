"use client";

import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { IoLocation } from "react-icons/io5";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useLoad } from "@/context/LoadContext";
import { getRequestSend, PUBLIC_TRACKING_API } from "../ApiCall/ApiMethod";
import { toast } from "sonner";

const HomeHeroSectionTrackingBox = () => {
  const router = useRouter();

  const [trackingNumber, setTrackingNumber] = useState("");

  const load = useLoad()

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    load.loadingStart()
    getRequestSend(PUBLIC_TRACKING_API(trackingNumber)).then(res=>{
      if(res.status==200){
        toast.success(res.message)
        router.push(`/track/${trackingNumber}`);
      }else{
        toast.error(res.message)
      }
    })


  };
  return (
    <Fade direction="up" duration={600}>
      <div className="w-full sm:w-auto md:w-[400px] lg:w-[450px] p-5 shadow-3xl bg-white rounded-lg border-defult">
        <div className="w-full h-auto">
          <IsEnglish className="flex justify-center align-middle items-center gap-1 text-defult pb-4">
            <IoLocation className="w-6 h-6" />
            <h3 className="text-xl font-semibold">Track a shipment</h3>
          </IsEnglish>
          <IsBangla className="flex justify-center align-middle items-center gap-1 text-defult pb-3">
            <IoLocation className="w-6 h-6" />
            <h3 className="text-[25px] font-semibold bfont ">চালান ট্র্যাক</h3>
          </IsBangla>
          <form className="w-full h-auto pb-4" onSubmit={onSubmitHandler}>
            <Input
              className=" border-defult text-[18px] h-auto py-2 rounded-br-none rounded-bl-none w-full"
              placeholder="Enter Tracking Number "
              value={trackingNumber}
              onChange={(e) => {
                setTrackingNumber(e.target.value);
              }}
            />
            <IsEnglish className="">
              <Button
                type="submit"
                className="w-full h-auto bg-defult hover:bg-defult/90 text-white rounded-tl-none rounded-tr-none text-lg"
                onClick={onSubmitHandler}
              >
                Track
              </Button>
            </IsEnglish>
            <IsBangla className="">
              <Button
                type="submit"
                className="w-full h-auto bg-defult hover:bg-defult/90 text-white rounded-tl-none rounded-tr-none text-[22px] bfont"
                onClick={onSubmitHandler}
              >
                ট্র্যাক
              </Button>
            </IsBangla>
          </form>

          <IsEnglish className="w-full h-auto flex flex-col pt-3 border-t">
            <h2 className="text-base font-semibold text-gray-800">
              Can’t Find Your Order Details?
            </h2>
            <p className="text-sm font-light text-gray-600">
              We have sent your AWB (tracking) number to you via email and
              WhatsApp upon booking the shipment.
            </p>
          </IsEnglish>

          <IsBangla className="w-full h-auto flex flex-col pt-3 border-t">
            <h2 className=" font-semibold text-gray-800 bfont text-[22px]">
              আপনার অর্ডারের বিবরণ খুঁজে পাচ্ছেন না?
            </h2>
            <p className=" font-light text-gray-600 bfont text-[20px] leading-5">
              চালানটি বুক করার সময় আমরা আপনাকে ইমেল এবং WhatsApp এর মাধ্যমে
              আপনার AWB (ট্র্যাকিং) নম্বর পাঠিয়েছি।
            </p>
          </IsBangla>
        </div>
      </div>
    </Fade>
  );
};

export default HomeHeroSectionTrackingBox;
