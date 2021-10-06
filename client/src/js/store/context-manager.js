import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const { setIsLoading, isLoading, data } = useFetch();

  const context = {
    setIsLoading: setIsLoading,
    isLoading: isLoading,
    current: data?.currentLocationData,
    forecast: data?.currentLocationForecastData,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}
