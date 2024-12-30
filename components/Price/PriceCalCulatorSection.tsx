"use client";
import SelecteSearchBox from "@/utils/SearchSelectBox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  COUNTRY_API,
  GET_SHIPPING_PRICE_QUOTE,
  getRequestSend,
} from "../ApiCall/ApiMethod";
import { Button } from "../ui/button";
import { useLoad } from "@/context/LoadContext";
import IsEnglish from "@/utils/IsEnglish";
import IsBangla from "@/utils/IsBangla";

interface Country {
  name: string;
  _id: string;
}

const PriceCalCulatorSection = () => {
  const [allCountryList, setAllCountryList] = useState<Country[] | null>([]);

  const [selectedFromCountry, setSelectedFromCountry] = useState<string>("");
  const [selectedToCountry, setSelectedToCountry] = useState<string>("");

  const router = useRouter();
  const load = useLoad()

  useEffect(() => {
    getRequestSend(COUNTRY_API).then((res) => {
      if (res.status == 200) {
        setAllCountryList(res.data);
      }
    });
  }, []);

  return (
    <div className="w-full h-auto px-4 pt-16 m-auto pb-24">
      
      <IsEnglish className="w-full h-auto flex justify-center align-middle items-center pb-8">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-defult text-center">
            PRICE CALCULATOR
          </h1>
        </IsEnglish>
        <IsBangla className="w-full h-auto flex justify-center align-middle items-center pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-defult bfont text-center">
          প্রাইস ক্যালকুলেটর
          </h1>
        </IsBangla>


      <div className="w-full h-auto px-5 py-8 pt-5 border-defult rounded-lg border shadow-3xl ">
        <div className="w-full flex sm:flex-row flex-col">
          <div className="w-full h-auto p-2">
            <SelecteSearchBox
              title="Ship From"
              // @ts-expect-error: Filtering out Bangladesh from the country list
              datas={allCountryList?.filter((item) =>
                item?.name?.toLowerCase().includes("bangladesh")
              )}
              setValue={(e) => setSelectedFromCountry(e?._id)}
            />
          </div>
          <div className="w-full h-auto p-2">
            <SelecteSearchBox
              title="Ship To"
              // @ts-expect-error: Filtering out Bangladesh from the country list
              datas={allCountryList?.filter(
                (item) => !item?.name?.toLowerCase().includes("bangladesh")
              )}
              setValue={(e) => setSelectedToCountry(e?._id)}
            />
          </div>
        </div>

        <div className="w-full h-auto flex justify-end p-3 pt-5">
          <Button
            className="bg-defult hover:bg-defult/85"
            onClick={() => {
              load.loadingStart()
              if (selectedToCountry && selectedFromCountry) {
                getRequestSend(GET_SHIPPING_PRICE_QUOTE(selectedFromCountry,selectedToCountry)).then(res=>{
                  
                load.loadingEnd()
                    if(res.status==200){
                        toast.success(res.message)
                        router.push(`/price/${res.data.from._id}/${res.data.to._id}`)
                    }else{
                        toast.error(res.message)
                    }
                });
              } else {
                load.loadingEnd()
                toast.error("Select Country Name");
              }
            }}
          >
            GET PRICE LIST
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceCalCulatorSection;
