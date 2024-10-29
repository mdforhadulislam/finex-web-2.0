"use client";
import { useLoad } from "@/context/LoadContext";
import Image from "next/image";

const Spriner = () => {
  const load = useLoad();

  if (load.isLoading)
    return (
      <div className="fixed w-full h-full flex justify-center items-center top-0 left-0 bg-white opacity-90 z-[100]">
        <Image
          width={200}
          height={200}
          src={"/world.svg"}
          alt="Loading-Image"
        />
      </div>
    );
};

export default Spriner;
