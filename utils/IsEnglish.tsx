"use client"
import { useLang } from "@/context/LangContext";

const IsEnglish : React.FC<{className: string, children: React.ReactNode,  }>= ({ className="", children }) => {
  const languge = useLang();

  return (
    <span className={` ${languge.isEnglish ? className : "hidden"}`}>
      {children}
    </span>
  );
};
export default IsEnglish;
