import React, { memo, useContext } from "react";
import styled, { keyframes } from "styled-components";

function Weather({ data, theme }) {
  const iconWeather = data.weather ? data?.weather[0].icon : "10n";

  const temp = data.main ? Math.round(data?.main.temp) : "--";

  return (
    <WeatherWrapper>
      <WeatherImage theme={theme}>
        <img
          src={`http://openweathermap.org/img/wn/${iconWeather}@4x.png`}
          alt="weather-icon"
        />
      </WeatherImage>
      <WeatherInfo theme={theme}>
        {data.weather ? data?.weather[0]?.description.toUpperCase() : "Thunder"}
      </WeatherInfo>
      <WeatherDegree theme={theme}>
        <WeatherDegreePrimary>{temp}</WeatherDegreePrimary>
        <WeatherDegreeSecondary theme={theme}>o</WeatherDegreeSecondary>
      </WeatherDegree>
    </WeatherWrapper>
  );
}

export default memo(Weather);

const opacityAnimation = keyframes`
    from {
        opacity: 0;
        visibility: hidden;
    } to {
        opacity: 1;
        visibility: visible;
    }
`;

const transformAnimation = keyframes`
  from {
    transform: translateY(-20px);
  } to {
    transform: translateY(0);
  }
`;

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const WeatherImage = styled.div`
  width: 100px;
  background-color: ${(props) =>
    props.theme === "dark" ? "transparent" : "#0000007a"};
  border-radius: 100rem;
  transition: all 0.24s linear;
  animation: ${opacityAnimation} 0.8s ease-in-out 1,
    ${transformAnimation} 0.8s ease-in-out 1;
  animation-delay: 000005ms;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  margin-bottom: 20px;
`;

const WeatherInfo = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  transition: all 0.24s linear;
  animation: ${opacityAnimation} 0.8s ease-in-out 1;
  animation-delay: 000005ms;
`;

const WeatherDegree = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  transition: all 0.24s linear;
  opacity: 1;
  visibility: visible;
  animation: ${opacityAnimation} 1s ease-in-out 1;
  animation-delay: 000005ms;
  z-index: 2;
`;

const WeatherDegreePrimary = styled.div`
  font-size: 100px;
  font-weight: bold;
`;

const WeatherDegreeSecondary = styled.div`
  font-size: 20px;
  color: ${(props) => (props.theme === "dark" ? "yellow" : "red")};
  transition: all 0.24s linear;
`;
