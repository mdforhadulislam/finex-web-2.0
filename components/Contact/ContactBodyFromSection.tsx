"use client";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import { Input } from "../ui/input";
import { useState } from "react";
import { CONTACT_API, postRequestSend } from "../ApiCall/ApiMethod";
import { toast } from "sonner";
import { useLoad } from "@/context/LoadContext";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactBodyFromSection = () => {
  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactData>>({});
  const load = useLoad();

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactData> = {};
    if (!contactData.name.trim()) newErrors.name = "Name is required";
    if (!contactData.email.trim()) newErrors.email = "Email is required";
    if (!contactData.phone.trim()) newErrors.phone = "Phone is required";
    if (!contactData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    load.loadingStart();
    postRequestSend(CONTACT_API, {}, contactData).then((res) => {
      load.loadingEnd();
      if (res.status === 200) {
        toast.success(res.message);
        setContactData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <form
      className="w-full h-auto flex flex-col gap-3"
      onSubmit={submitHandler}
    >
      <div className="w-full h-auto flex flex-col">
        <IsEnglish className="">
          <label
            htmlFor="name"
            className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]"
          >
            Name
          </label>
        </IsEnglish>
        <IsBangla className="">
          <label
            htmlFor="name"
            className="w-full h-auto text-[23px] bfont font-medium text-gray-800 pl-2 p-[2px]"
          >
            নাম
          </label>
        </IsBangla>
        <Input
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          value={contactData.name}
          onChange={(e) =>
            setContactData({ ...contactData, name: e.target.value })
          }
        />
        {errors.name && <p className="text-red-500 text-sm pl-2">{errors.name}</p>}
      </div>

      <div className="w-full h-auto flex flex-col">
        <IsEnglish className="">
          <label
            htmlFor="email"
            className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]"
          >
            E-mail
          </label>
        </IsEnglish>
        <IsBangla className="">
          <label
            htmlFor="email"
            className="w-full h-auto text-[23px] bfont font-medium text-gray-800 pl-2 p-[2px]"
          >
            ই-মেইল
          </label>
        </IsBangla>
        <Input
          id="email"
          type="text"
          placeholder="E-mail"
          name="email"
          value={contactData.email}
          onChange={(e) =>
            setContactData({ ...contactData, email: e.target.value })
          }
        />
        {errors.email && <p className="text-red-500 text-sm pl-2">{errors.email}</p>}
      </div>

      <div className="w-full h-auto flex flex-col">
        <IsEnglish className="">
          <label
            htmlFor="phone"
            className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]"
          >
            Phone
          </label>
        </IsEnglish>
        <IsBangla className="">
          <label
            htmlFor="phone"
            className="w-full h-auto text-[23px] bfont font-medium text-gray-800 pl-2 p-[2px]"
          >
            ফোন
          </label>
        </IsBangla>
        <Input
          id="phone"
          type="text"
          placeholder="Phone"
          name="phone"
          value={contactData.phone}
          onChange={(e) =>
            setContactData({ ...contactData, phone: e.target.value })
          }
        />
        {errors.phone && <p className="text-red-500 text-sm pl-2">{errors.phone}</p>}
      </div>

      <div className="w-full h-auto flex flex-col">
        <IsEnglish className="">
          <label
            htmlFor="message"
            className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]"
          >
            Message
          </label>
        </IsEnglish>
        <IsBangla className="">
          <label
            htmlFor="message"
            className="w-full h-auto text-[23px] bfont font-medium text-gray-800 pl-2 p-[2px]"
          >
            মেসেজ
          </label>
        </IsBangla>
        <textarea
          id="message"
          placeholder="Message"
          name="message"
          className="flex h-20 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm"
          value={contactData.message}
          onChange={(e) =>
            setContactData({ ...contactData, message: e.target.value })
          }
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm pl-2">{errors.message}</p>
        )}
      </div>

      <IsEnglish className="">
        <button
          className="px-4 py-2 text-center text-[16.6px] shadow bg-defult hover:bg-defult/85 text-white transition duration-300 block rounded-md w-full"
          type="submit"
        >
          Send Message
        </button>
      </IsEnglish>

      <IsBangla className="">
        <button
          className="px-4 py-[4px] bfont text-2xl text-center shadow bg-defult hover:bg-defult/85 text-white transition duration-300 block rounded-md w-full"
          type="submit"
        >
          সেন্ড ম্যাসেজ
        </button>
      </IsBangla>
    </form>
  );
};

export default ContactBodyFromSection;
