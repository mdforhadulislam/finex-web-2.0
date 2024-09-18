"use client"
import { useLang } from "@/context/LangContext";

const IsBangla = ({ className, children }) => {
  const languge = useLang();
  return (
    <span className={` ${languge.isBangla ? className : "hidden"}`}>
      {children}
    </span>
  );
};

export default IsBangla;
