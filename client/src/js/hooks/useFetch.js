import { useEffect, useState } from "react";
import useCurrLocName from "./useCurrLocName";

export default function (name) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const locName = useCurrLocName(name);

  if (name === undefined) {
    name = locName;
    console.log(name);
  }

  const fetchData = async (name) => {
    setIsLoading(true);
    console.log(name);
    try {
      if (name === "") {
        const temporaryData = {
          currentLocationData: {
            icon: "09d",
            desc: "drizzle",
            temperature: 24,
            pressure: 1005,
            humidity: 84,
            visibility: 3251,
            windSpeed: 1.54,
            windDir: 149,
            date: 1633335095,
            location: "Patna",
          },
          currentLocationForecastData: {
            data: [
              {
                id: 1,
                date: 1633359600,
                minTemp: 29.7,
                maxTemp: 31.46,
                icon: "04d",
              },
              {
                id: 2,
                date: 1633446000,
                minTemp: 29.3,
                maxTemp: 29.3,
                icon: "02d",
              },
              {
                id: 3,
                date: 1633532400,
                minTemp: 30.22,
                maxTemp: 30.22,
                icon: "04d",
              },
              {
                id: 4,
                date: 1633618800,
                minTemp: 29.28,
                maxTemp: 29.28,
                icon: "01d",
              },
              {
                id: 5,
                date: 1633705200,
                minTemp: 28.97,
                maxTemp: 28.97,
                icon: "01d",
              },
            ],
          },
        };
        setData(temporaryData);
        setIsLoading(false);
      } else {
        const response = await fetch(
          // Link for dev and prod server are different
          "http://localhost:4000/weather",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ location: name }),
          }
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      }
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
