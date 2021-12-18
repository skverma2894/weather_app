import React, { useContext } from "react";
import styled from "styled-components";
import humidityIcon from "../icons/humidity.svg";
import tempIcon from "../icons/temp.svg";
import pressureIcon from "../icons/pressure.svg";
import windIcon from "../icons/wind.svg";
import Card from "./Card";
import { DataContext } from "./ContextStore";

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

function WeatherInfoSection() {
  const data = useContext(DataContext);
  const units = data.sys.sunset * 1000;
  let currentDate = new Date(units);
  const hours = currentDate.getHours();
  const mins = currentDate.getMinutes();
  const updatedMins = mins < 10 ? `0${mins}` : mins;

  return (
    <WeatherInfo>
      <Row>
        <Card img={tempIcon} title={"Sunset"} amt={`${hours}:${updatedMins}`} />
        <Card img={humidityIcon} title={"Humidity"} amt={data.main.humidity} />
      </Row>
      <Row>
        <Card img={windIcon} title={"Wind"} amt={data.wind.speed} />
        <Card img={pressureIcon} title={"Pressure"} amt={data.main.pressure} />
      </Row>
    </WeatherInfo>
  );
}

export default WeatherInfoSection;
