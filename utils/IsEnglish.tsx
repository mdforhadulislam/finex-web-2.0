"use client"
import { useLang } from "@/context/LangContext";

const IsEnglish = ({ className, children }) => {
  const languge = useLang();

  return (
    <span className={` ${languge.isEnglish ? className : "hidden"}`}>
      {children}
    </span>
  );
};
export default IsEnglish;
