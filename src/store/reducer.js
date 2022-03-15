export const initialState = {
  search: "",
  data: {},
  dataSearch: {},
  theme: "dark",
  location: {
    lat: 10.823099,
    lon: 106.629662,
  },
};

export const SEARCH_FILTER = "search_filter";
export const ADD_WEATHER_DATA = "add_weather_data";
export const SET_LOCATION = "set_location";
export const SET_LOCATION_FILTER = "set_location_filter";
export const SET_LIGHT_THEME = "set_light_theme";
export const SET_DARK_THEME = "set_dark_theme";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_WEATHER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SEARCH_FILTER:
      return {
        ...state,
        search: action.payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    case SET_LOCATION_FILTER:
      return {
        ...state,
        dataSearch: action.payload,
      };

    case SET_LIGHT_THEME:
      return {
        ...state,
        theme: "light",
      };

    case SET_DARK_THEME:
      return {
        ...state,
        theme: "dark",
      };
    default:
      throw new Error("Invalid action");
  }
};
