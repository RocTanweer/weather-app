import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const { setIsLoading, isLoading, data } = useFetch();
  const [isCelcius, setIsCelcius] = useState(true);

  const handleTempUnit = (temp) => {
    return Math.ceil(temp * 1.8 + 32);
  };

  const context = {
    setIsLoading,
    isLoading,
    current: data?.currentLocationData,
    forecast: data?.currentLocationForecastData,
    setIsCelcius,
    isCelcius,
    handleTempUnit,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}
