import React, { useContext } from "react";
import Header from "./Header";
import Weather from "./Weather";
import styled from "styled-components";
import Footer from "./Footer";
import { StoreContext } from "../../App";
function Main() {
  const { store } = useContext(StoreContext);
  return (
    <MainWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Weather data={store.data} theme={store.theme} />
      <Footer data={store.data} theme={store.theme} />
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.2;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/3/38/Worldmap-blank.svg);
    background-repeat: no-repeat;
    background-size: 800px;
    background-position: 60% 10%;
    z-index: 1;
  }
`;

const HeaderWrapper = styled.div`
  color: #fff;
  width: 100%;
  position: relative;
`;
