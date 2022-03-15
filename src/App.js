import "./App.css";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Search from "./Components/Search";
import styled from "styled-components";
import { useEffect, useReducer, createContext } from "react";
import User from "./Components/User";

import { reducer, initialState } from "./store/reducer";
import { addWeatherData, setLocation } from "./store/actions";
import fetchData from "./api/axios";

let vh = window.innerHeight * 0.01;

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  const currentLocation = store.location;

  //Set innerHeight for any devices
  useEffect(() => {
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  //Get current Location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      if (data) {
        const lat = data.coords.latitude;
        const lon = data.coords.longitude;
        dispatch(setLocation({ lat, lon }));
      }
    });
  }, []);

  // Fetch Data Weather
  useEffect(() => {
    async function getData() {
      const request = await fetchData(currentLocation);
      dispatch(addWeatherData(request.data));
    }
    getData();
  }, [currentLocation]);

  return (
    <div className="App">
      <StoreContext.Provider value={{ store, dispatch }}>
        <Wrapper theme={store.theme}>
          <Nav></Nav>
          <Routes>
            <Route path="/weather-app" element={<Main />}></Route>
            <Route path="/weather-app/search" element={<Search />}></Route>
            <Route path="/weather-app/user" element={<User />}></Route>
          </Routes>
        </Wrapper>
      </StoreContext.Provider>
    </div>
  );
}

export const StoreContext = createContext();

export default App;

const Wrapper = styled.div`
  max-width: 480px;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  background-color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};

  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
