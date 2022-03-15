import React, { useContext, useEffect, useRef } from "react";
import Header from "../Search/Header";
import styled from "styled-components";
import { StoreContext } from "../../App";
import { fechDataCity } from "../../api/axios";
import removeVietnameseTones from "../../method/removeVietmeseTelex";
import Weather from "../Main/Weather";
import Footer from "../Main/Footer";
import { setLocationFilter } from "../../store/actions";
import { toastError } from "../../method/toast";

function Search() {
  const userWrapper = useRef();
  const { store, dispatch } = useContext(StoreContext);
  const city = removeVietnameseTones(store.search);
  const input = useRef();
  useEffect(() => {
    async function getData() {
      try {
        if (city) {
          const request = await fechDataCity(city);
          dispatch(setLocationFilter(request.data));
        }
      } catch (e) {
        toastError("Cannot Get Data!!!", userWrapper.current);
      }
    }
    getData();
  }, [dispatch, city]);

  useEffect(() => {
    input.current.focus();
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <UserWrapper ref={userWrapper}>
      <Header theme={store.theme} inputRef={input} />
      <Weather
        data={store.dataSearch ? store.dataSearch : store.data}
        theme={store.theme}
      />
      <Footer
        data={store.dataSearch ? store.dataSearch : store.data}
        theme={store.theme}
      />
    </UserWrapper>
  );
}

export default Search;
const UserWrapper = styled.div`
  width: 100%;
  color: #fff;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.1;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/3/38/Worldmap-blank.svg);
    background-repeat: no-repeat;
    background-size: 800px;
    background-position: 60% 10%;
    z-index: 1;
  }
`;
