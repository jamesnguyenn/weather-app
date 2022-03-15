import React, { memo } from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import styled, { keyframes } from "styled-components";

function Footer({ data, theme }) {
  const lowestTemp = data.main ? Math.round(data.main.temp_min) : "--";

  const maxTemp = data.main ? Math.round(data.main.temp_max) : "--";

  const windSpeed = data.wind ? data.wind.speed : "--";

  const humidity = data?.main?.humidity ? data?.main?.humidity : "--";

  return (
    <FooterWrapper>
      <FooterLists>
        <FooterItem theme={theme}>
          <Icon>
            <AcUnitIcon sx={{ fontSize: "20px", color: "#4A98C3" }} />
            <IconText>Lowest </IconText>
          </Icon>
          <Text>
            <TextPrimary>{lowestTemp}</TextPrimary>
            <TextSecondary>o</TextSecondary>
          </Text>
        </FooterItem>
        <FooterItem theme={theme}>
          <Icon>
            <ThermostatIcon sx={{ fontSize: "20px", color: "#FF0221" }} />
            <IconText>Highest </IconText>
          </Icon>
          <Text>
            <TextPrimary>{maxTemp}</TextPrimary>
            <TextSecondary>o</TextSecondary>
          </Text>
        </FooterItem>
        <FooterItem theme={theme}>
          <Icon>
            <AirIcon sx={{ fontSize: "20px", color: "#49C5D6" }} />
            <IconText>Air </IconText>
          </Icon>
          <Text>
            <TextPrimary>{windSpeed}</TextPrimary>
            <TextSecondary>km/h</TextSecondary>
          </Text>
        </FooterItem>
        <FooterItem theme={theme}>
          <Icon>
            <OpacityIcon sx={{ fontSize: "20px", color: "#1D89E4" }} />
            <IconText>Humidity </IconText>
          </Icon>
          <Text>
            <TextPrimary>{humidity}</TextPrimary>
            <TextSecondary>%</TextSecondary>
          </Text>
        </FooterItem>
      </FooterLists>
    </FooterWrapper>
  );
}

export default memo(Footer);

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
    transform: translateY(20px);
  } to {
    transform: translateY(0);
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const FooterLists = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
`;
const FooterItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  animation: ${opacityAnimation} 0.8s ease-in-out 1,
    ${transformAnimation} 0.8s ease-in-out 1;
  animation-delay: 000005ms;
`;

const Icon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 8px;
`;
const IconText = styled.span`
  font-size: 12px;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
`;
const TextPrimary = styled.div``;
const TextSecondary = styled.div`
  font-size: 12px;
  font-weight: normal;
`;
