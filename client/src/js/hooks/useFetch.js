import { useEffect, useState } from "react";

export default function (name) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async (name) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/weather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location: name }),
      });
      const data = await response.json();
      setIsLoading(false);
      setData(data);
      console.log(data);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(name);
  }, []);

  return { isLoading, setIsLoading, data };
}
