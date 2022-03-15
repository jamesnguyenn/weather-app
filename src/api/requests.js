export const iconURL = (icon) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};

export const baseURL = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=vi`;
};

export const searchCity = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=vi`;
};
