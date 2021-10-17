import { useEffect, useState } from "react";

export default function (locationName) {
  const [name, setName] = useState();

  const fetchName = () => {
    console.log("working?");
    const successFunc = async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const responseData = await response.json();
      const currLocName =
        responseData.localityInfo.administrative[3].name.split(" ")[0];
      setName(currLocName);
    };

    if (navigator) {
      navigator.geolocation.getCurrentPosition(successFunc, (err) => {
        console.error(err);
      });
    }
  };
  useEffect(() => {
    console.log(locationName);
    if (locationName === undefined) {
      fetchName();
    }
  });

  return name;
}
