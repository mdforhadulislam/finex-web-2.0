"use client";
import { createContext, useContext, useState } from "react";

export const LangContext = createContext({
  isBangla: false,
  isEnglish: true,
  bangla: (): void => {},
  english: (): void => {},
});

export const useLang = () => useContext(LangContext);

const LangContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isBangla, setIsBangla] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  const bangla = () => {
    setIsBangla(true);
    setIsEnglish(false);
  };
  const english = () => {
    setIsBangla(false);
    setIsEnglish(true);
  };

  const contextValue = {
    isBangla,
    isEnglish,
    bangla,
    english,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};

export default LangContextProvider;
