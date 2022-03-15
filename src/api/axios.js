import axios from "axios";

import * as requests from "./requests";

function fetchData({ lat, lon }) {
  return axios.get(requests.baseURL(lat, lon));
}

export const fechDataCity = (city) => {
  return axios.get(requests.searchCity(city));
};

export default fetchData;
