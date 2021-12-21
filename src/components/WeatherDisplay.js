import React, { useContext } from "react";
import styled from "styled-components";
// import perfectDay from "../icons/perfect-day.svg";
import { DataContext } from "./ContextStore";
import WeatherInfoSection from "./WeatherInfoSection";

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.25em;
  width: 95vw;
  max-width: 5000px;
  max-height: 750px;
  height: 70vh;
  // box-shadow: 0 2px 2px 2px grey;
  // border-radius: 5px;

  @media (min-width: 700px) {
    font-size: 32px;
    width: 65vw;
  }

  @media (min-width: 1000px) {
    font-size: 34px;
    height: 70vh;
    width: 60vw;
  }

  @media (min-width: 2000px) {
    font-size: 50px;
    height: 90vh;
    width: 60vw;
  }
`;

const Title = styled.h1`
  margin-top: 40px;
  font-weight: 900;

  @media (min-width: 700px) {
    font-size: 52px;
  }

  @media (min-width: 1000px) {
    font-size: 56px;
  }

  @media (min-width: 2000px) {
    font-size: 100px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const TemperatureSectionOuter = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 2000px) {
    flex-direction: row;
  }
`;

const TemperatureSection = styled.div`
  display: flex;
  align-items: center;
`;

const Temperature = styled.div`
  font-weight: 700;
  font-size: 24px;
  @media (min-width: 2000px) {
    font-size: 48px;
    font-weight: 900;
  }
`;

const City = styled.h2`
  font-weight: bolder;
  display: flex;
  align-items: center;
  @media (min-width: 2000px) {
    margin: 20px 0;
  }
`;

const Head3 = styled.h3`
  margin-bottom: 30px;
  margin-top: 10px;
`;

const TemperatureImg = styled.img`
  min-width: 20%;
  width: 110px;
  min-height: 35%;
  height: 100px;
  // margin: 10px 10px;
`;

function WeatherDisplay() {
  const data = useContext(DataContext);
  console.log(data);
  console.log(data.weather[0].icon);
  var iconCode = data.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
  return (
    <Container>
      <Title>Weather App</Title>
      <TemperatureSectionOuter>
        <TemperatureSection>
          <Temperature>
            {Math.trunc(data.main.temp)}°C|{data.weather[0].main}
          </Temperature>

          <TemperatureImg src={iconurl} />
        </TemperatureSection>
        <City>
          {data.name}|
          <span style={{ fontSize: "50%" }}>{data.sys.country}</span>
        </City>
      </TemperatureSectionOuter>

      <Head3>Weather Info</Head3>
      <WeatherInfoSection />
    </Container>
  );
}

export default WeatherDisplay;
