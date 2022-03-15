import React, { memo, useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import moment from "moment";
import { StoreContext } from "../../App";
import { setDarkTheme, setLightTheme } from "../../store/actions";

function Header() {
  const [activeTheme, setActiveTheme] = useState(true);
  const { store, dispatch } = useContext(StoreContext);

  const [date, setDate] = useState("");
  let timezone = store.data.timezone;

  const handleClickNightMode = () => {
    setActiveTheme(!activeTheme);
    if (activeTheme) {
      return dispatch(setLightTheme());
    } else {
      return dispatch(setDarkTheme());
    }
  };

  useEffect(() => {
    if (timezone) {
      function getDateFormat(timezone) {
        const currentDate = moment().utcOffset(timezone).toDate();
        const dateFormat = moment(currentDate).format("DD,MMM YYYY");
        setDate(dateFormat);
      }
      getDateFormat(timezone);
    }
  }, [timezone]);

  return (
    <HeaderContent theme={store.theme}>
      <TimeContainer>
        <Day>{date}</Day>
        <Location>
          <LocationOnIcon />
          <LocationText>
            <LocationPrimary theme={store.theme}>
              {store.data ? store.data?.name : "Thành Phố Hồ Chí Minh"},{" "}
            </LocationPrimary>
            <LocationSecondary>
              {store.data ? store.data?.sys?.country : "VN"}
            </LocationSecondary>
          </LocationText>
        </Location>
      </TimeContainer>
      <NightMode onClick={handleClickNightMode}>
        <DarkModeIcon
          sx={{
            transition: "all 400ms linear",
            fontSize: "20px",
            color: store.theme === "dark" && "yellow",
          }}
        />
        <LightModeIcon
          sx={{
            transition: "all 400ms  linear",
            fontSize: "20px",
            color: store.theme === "light" && "yellow",
          }}
        />
      </NightMode>
    </HeaderContent>
  );
}

export default memo(Header);

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  overflow: hidden;
  color: ${(props) => (props.theme === "dark" ? "#7f7f81" : "#000")};
  transition: all 0.24s linear;
`;

const TimeContainer = styled.div`
  letter-spacing: 0.6px;
`;

const dropDown = keyframes`
  from {
  opacity:0;
  visibility:hidden;
  transform: translateY(-70px);
  }
  to {
  opacity:1;
  visibility:visible;
  transform: translateY(0);
  }
`;

const opacity = keyframes`
from {
  opacity:0;
  visibility:hidden;
}to{
  opacity:1;
  visibility:visible;
}`;

const Day = styled.div`
  margin-left: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  transform: translateY(0);
  animation: ${dropDown} 0.8s ease-in-out 1;
  animation-delay: 000005ms;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${opacity} 1.5s ease-in-out 1;
  animation-delay: 000005ms;
`;

const LocationText = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const LocationPrimary = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  transition: all 0.24s linear;
  margin-right: 5px;
`;

const LocationSecondary = styled.div`
  font-weight: normal;
  font-size: 10px;
  color: #7f7f81;
`;

const NightMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border: 1px solid #7f7f81;
  padding: 4px 8px;
  border-radius: 20px;
  z-index: 2000;
  cursor: pointer;
`;
