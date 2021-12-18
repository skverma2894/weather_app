import React, { useContext } from "react";
import styled from "styled-components";
import perfectDay from "../icons/perfect-day.svg";
import { DataContext } from "./ContextStore";
import WeatherInfoSection from "./WeatherInfoSection";

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55vw;
  max-width: 450px;
  height: 500px;
  min-height: 75vh;
  box-shadow: 0 2px 2px 2px grey;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-weight: 700;
  margin-top: 40px;
`;

const TemperatureSection = styled.div`
  display: flex;
  align-items: center;
`;

const Temperature = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const City = styled.h2`
  font-weight: bolder;
  display: flex;
  align-items: center;
`;

const TemperatureImg = styled.img`
  min-width: 20%;
  width: 110px;
  min-height: 35%;
  height: 100px;
  // margin: 10px 10px;
`;

const Inp = styled.input`
  border: 1px solid black;
  padding: 10px;
  min-width: 30%;
  width: 180px;
  min-height: 10%;
  height: 15px;
  selection: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Btn = styled.button`
  border: 1px solid black;
  background: black;
  color: white;
  padding: 10px;
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
      <TemperatureSection>
        <Temperature>
          {Math.trunc(data.main.temp)}°C|{data.weather[0].main}
        </Temperature>

        <TemperatureImg src={iconurl} />
      </TemperatureSection>
      <City>
        {data.name}|<span style={{ fontSize: "1rem" }}>{data.sys.country}</span>
      </City>

      <h3>Weather Info</h3>
      <WeatherInfoSection />
    </Container>
  );
}

export default WeatherDisplay;
