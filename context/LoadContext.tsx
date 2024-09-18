"use client"
import { createContext, useContext, useState } from "react";

export const LoadContext = createContext({
  isLoading: false,
  loadingStart: (): void => {},
  loadingEnd: (): void => {},
});

export const useLoad = () => useContext(LoadContext);

const LoadContextProvider: React.FC<{ children: React.ReactNode }> =({ children })=> {
  const [isLoading, setIsLoading] = useState(false);

  const loadingStart = () => {
    setIsLoading(true);
  };
  const loadingEnd = () => {
    setIsLoading(false);
  };

  const contextValue = {
    isLoading,
    loadingStart,
    loadingEnd,
  };

  return (
    <LoadContext.Provider value={contextValue}>{children}</LoadContext.Provider>
  );
}

export default LoadContextProvider