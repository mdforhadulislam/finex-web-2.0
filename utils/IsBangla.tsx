"use client";
import { useLang } from "@/context/LangContext";
import React from "react";

const IsBangla: React.FC<{ className: string , children: React.ReactNode,}> = ({
  className="",
  children,
}) => {
  const languge = useLang();
  return (
    <span className={` ${languge.isBangla ? className : "hidden"}`}>
      {children}
    </span>
  );
};

export default IsBangla;
