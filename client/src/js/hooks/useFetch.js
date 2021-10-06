import { useEffect, useState } from "react";
import useCurrLocName from "./useCurrLocName";

export default function (name = undefined) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const localName = useCurrLocName();

  if (name === undefined) {
    name = localName;
  }

  const fetchData = async (name) => {
    setIsLoading(true);
    try {
      // const response = await fetch("http://localhost:4000/weather", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ location: name }),
      // });
      // const data = await response.json();
      console.log(name);
      const res1 = await fetch("http://localhost:4000/currentLocationData");
      const currentLocationData = await res1.json();
      const res2 = await fetch(
        "http://localhost:4000/currentLocationForecastData"
      );
      const currentLocationForecastData = await res2.json();
      const data = { currentLocationData, currentLocationForecastData };
      setData(data);
      setIsLoading(false);
      console.log(data);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(name);
  }, [name]);

  return { isLoading, setIsLoading, data };
}
