import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const { setIsLoading, isLoading, data } = useFetch();
  const [isSearchActive, setIsSearchActive] = useState(true);
  const [isCelcius, setIsCelcius] = useState(true);

  const handleTempUnit = (temp) => {
    return Math.ceil(temp * 1.8 + 32);
  };

  const handleButtonClick = (e) => {
    switch (e.target.dataset.type) {
      case "degC":
        setIsCelcius(true);
        break;
      case "degF":
        setIsCelcius(false);
        break;
      case "marker":
        setIsSearchActive(false);
        break;
      case "search":
        console.log("Search");
        break;
      case "close":
        setIsSearchActive(true);
    }
  };

  const context = {
    setIsLoading,
    isLoading,
    current: data?.currentLocationData,
    forecast: data?.currentLocationForecastData,
    setIsCelcius,
    isCelcius,
    handleTempUnit,
    handleButtonClick,
    isSearchActive,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}
