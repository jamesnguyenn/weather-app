import {
  ADD_WEATHER_DATA,
  SEARCH_FILTER,
  SET_DARK_THEME,
  SET_LIGHT_THEME,
  SET_LOCATION,
  SET_LOCATION_FILTER,
} from "./reducer";
export const addWeatherData = (payload) => {
  return {
    type: ADD_WEATHER_DATA,
    payload,
  };
};
export const setLocation = (payload) => {
  return {
    type: SET_LOCATION,
    payload,
  };
};
export const setLightTheme = () => {
  return {
    type: SET_LIGHT_THEME,
  };
};

export const setLocationFilter = (payload) => {
  return {
    type: SET_LOCATION_FILTER,
    payload,
  };
};

export const setDarkTheme = () => {
  return {
    type: SET_DARK_THEME,
  };
};

export const setSearchFilter = (payload) => {
  return {
    type: SEARCH_FILTER,
    payload,
  };
};
