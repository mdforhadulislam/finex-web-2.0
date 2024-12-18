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

interface Country {
  name: string;
  _id: string;
}

const PriceCalCulatorSection = () => {
  const [allCountryList, setAllCountryList] = useState<Country[] | null>([]);

  const [selectedFromCountry, setSelectedFromCountry] = useState<string>("");
  const [selectedToCountry, setSelectedToCountry] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    getRequestSend(COUNTRY_API).then((res) => {
      if (res.status == 200) {
        setAllCountryList(res.data);
      }
    });
  }, []);

  return (
    <div className="w-full h-auto px-4 py-10 m-auto">
      <div className="w-full h-auto px-5 py-8 pt-5 border-defult rounded-lg border shadow-3xl ">
        <div className="w-full flex sm:flex-row flex-col">
          <div className="w-full h-auto p-2">
            <SelecteSearchBox
              title="Ship From"
              
                      // @ts-ignore
              datas={allCountryList?.filter((item) =>
                item?.name?.toLowerCase().includes("bangladesh")
              )}
              setValue={(e) => setSelectedFromCountry(e._id)}
            />
          </div>
          <div className="w-full h-auto p-2">
            <SelecteSearchBox
              title="Ship To"
              
                      // @ts-ignore
              datas={allCountryList?.filter(
                (item) => !item?.name?.toLowerCase().includes("bangladesh")
              )}
              setValue={(e) => setSelectedToCountry(e._id)}
            />
          </div>
        </div>

        <div className="w-full h-auto flex justify-end p-3 pt-5">
          <Button
            className="bg-defult hover:bg-defult/85"
            onClick={() => {
              if (selectedToCountry && selectedFromCountry) {
                getRequestSend(GET_SHIPPING_PRICE_QUOTE(selectedFromCountry,selectedToCountry)).then(res=>{
                    if(res.status==200){
                        toast.success(res.message)
                        router.push(`/price/${res.data.from._id}/${res.data.to._id}`)
                    }else{
                        toast.error(res.message)
                    }
                });
              } else {
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
