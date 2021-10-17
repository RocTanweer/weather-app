export const getCurrLocName = () => {
  let location;
  const successFunc = async (position) => {
    const { latitude, longitude } = position.coords;
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    const responseData = await response.json();
    const currLocName =
      responseData.localityInfo.administrative[3].name.split(" ")[0];
    location = currLocName;
  };

  if (navigator) {
    navigator.geolocation.getCurrentPosition(successFunc, (err) => {
      console.error(err);
    });
  }
  setTimeout(() => {
    console.log(location);
    return location;
  }, 600);
};
