"use client";
import {
  postRequestSend,
  VISITOR_POST_API,
} from "@/components/ApiCall/ApiMethod";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { useLoad } from "./LoadContext";

interface UserTrackDataType {
  isDone: boolean;
  name: string;
  phone: string;
  email: string;
  type: string;
  service: string;
}

export const UserTrackContext = createContext({
  isDone: false,
  name: "",
  phone: "",
  email: "",
  type: "",
  service: "",
});

export const useUserTrack = () => useContext(UserTrackContext);

const UserTrackContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userTrackData, setUserTrackData] = useState<UserTrackDataType>({
    isDone: false,
    name: "",
    phone: "",
    email: "",
    type: "",
    service: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(true);

  // const router = useRouter();

  useEffect(() => {
    const getUserTrackData = window?.localStorage?.getItem("finex-user-track");
    if (getUserTrackData) {
      const parsedData: UserTrackDataType = JSON?.parse(getUserTrackData);
      setUserTrackData(parsedData);
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);

  const load = useLoad()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserTrackData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setUserTrackData((prevData) => ({ ...prevData, service: value }));
  };

  const handleTypeChange = (value: string) => {
    setUserTrackData((prevData) => ({ ...prevData, type: value }));
  };

  const isValidForm = () => {
    const { name, email, phone, service } = userTrackData;
    if (!name || !email || !phone || !service) {
      setError("Please fill in all required fields and including Service.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    const phoneRegex = /^\+?\d{11,15}$/;
    if (!phoneRegex.test(phone)) {
      setError(
        "Please enter a valid phone number (11-15 digits, including country code)."
      );
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = () => {
    
    if (isValidForm()) {
      load.loadingStart()
      postRequestSend(VISITOR_POST_API, {}, userTrackData).then((res) => {
        load.loadingEnd()
        if (res.status == 200) {
          toast.success(res.message);
          window?.localStorage?.setItem(
            "finex-user-track",
            JSON?.stringify(userTrackData)
          );
          if (userTrackData.type == "B2B") {
            // router.push("/b2b");
          }
          if (userTrackData.type == "B2C") {
            // router.push("/");
          }

          setOpen(false);
        } else {
          toast.success(res.message);
        }
      });
    }
  };

  return (
    <UserTrackContext.Provider value={userTrackData}>
      {children}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="px-5 bg-transparent border-none">
          <div className="sm:container p-6 bg-white rounded-lg shadow-4xl">
            <AlertDialogHeader className="pb-5">
              <AlertDialogTitle className="text-xl font-semibold text-gray-800">
                Provide Your Information
              </AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-gray-600">
                Please fill in your details to continue. This information will
                help us personalize your experience.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="flex flex-col gap-3">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={userTrackData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={userTrackData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={userTrackData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />

              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="export">
                    Export (From Bangladesh)
                  </SelectItem>
                  <SelectItem value="import">Import</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={handleTypeChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="B2B">Business Shipment</SelectItem>
                  <SelectItem value="B2C">Personal Shipment</SelectItem>
                </SelectContent>
              </Select>

              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>
            <AlertDialogFooter className="flex justify-end space-x-2 pt-3">
              <Button
                onClick={handleSubmit}
                className="px-4 py-2 bg-defult text-white rounded-md hover:bg-defult"
              >
                Submit
              </Button>
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </UserTrackContext.Provider>
  );
};

export default UserTrackContextProvider;
