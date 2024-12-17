import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import { Input } from "../ui/input";

const ContactBodyFromSection = () => {
  return (
    <form className="w-full h-auto flex flex-col gap-3">
      <div className="w-full h-auto flex flex-col">
        <IsEnglish className="">
          <label
            htmlFor={"name"}
            className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]"
          >
            Name
          </label>
        </IsEnglish>
        <IsBangla className="">
          <label
            htmlFor={"name"}
            className="w-full h-auto text-[23px] bfont font-medium text-gray-800 pl-2 p-[2px]"
          >
            নাম
          </label>
        </IsBangla>
        <Input id={"name"} type={"text"} placeholder={"name"} name={"name"} />
      </div>

      <div className="w-full h-auto flex flex-col">
     

        <IsEnglish className="">
        <label
          htmlFor={"email"}
          className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]"
        >
          E-mail
        </label>
        </IsEnglish>
        <IsBangla className="">
          <label
            htmlFor={"email"}
            className="w-full h-auto text-[23px] bfont font-medium text-gray-800 pl-2 p-[2px]"
          >
            ই-মেইল 
          </label>
        </IsBangla>

        <Input
          id={"email"}
          type={"text"}
          placeholder={"E-mail"}
          name={"email"}
        />
      </div>

      <div className="w-full h-auto flex flex-col">
      
        <IsEnglish className="">
        <label
          htmlFor={"phone"}
          className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]"
        >
          Phone
        </label>
        </IsEnglish>
        <IsBangla className="">
        <label
            htmlFor={"phone"}
            className="w-full h-auto text-[23px] bfont font-medium text-gray-800 pl-2 p-[2px]"
          >
           ফোন
          </label>
        </IsBangla>
        <Input
          id={"phone"}
          type={"text"}
          placeholder={"Phone"}
          name={"phone"}
        />
      </div>

      <div className="w-full h-auto flex flex-col">
        
        <IsEnglish className="">
        <label
          htmlFor={"message"}
          className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]"
        >
          Message
        </label>
        </IsEnglish>
        <IsBangla className="">
        <label
            htmlFor={"message"}
            className="w-full h-auto text-[23px] bfont font-medium text-gray-800 pl-2 p-[2px]"
          >
           মেসেজ
          </label>
        </IsBangla>
        <textarea
          id={"message"}
          placeholder={"message"}
          name={"message"}
          className={`flex h-20 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 `}
        ></textarea>
      </div>

      {/* English submit button */}
      <IsEnglish className="">
        <button className="px-4 py-2 text-center text-[16.6px] shadow bg-defult hover:bg-defult/85 text-white transition duration-300 block rounded-md w-full">
          Send Message
        </button>
      </IsEnglish>

      {/* Bangla submit button */}
      <IsBangla className="">
        <button className="px-4 py-[4px] bfont text-2xl text-center shadow  bg-defult hover:bg-defult/85 text-white transition duration-300 block rounded-md w-full">
          সেন্ড ম্যাসেজ
        </button>
      </IsBangla>
    </form>
  );
};

export default ContactBodyFromSection;
