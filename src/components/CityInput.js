import axios from "axios";
import React, { useState } from "react";

import styled from "styled-components";
import perfectDay from "../icons/perfect-day.svg";

const API_KEY = "a8a391a6fe147d07592d4aecdba50256";

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
  margin-top: 40px;
  font-weight: 700;
`;

const Img = styled.img`
  min-width: 40%;
  width: 150px;
  min-height: 40%;
  height: 150px;
  margin: 20px 0;
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

function CityInput(props) {
  const [cityName, setCityName] = useState();

  const fetchAPI = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
    );

    props.setData(response.data);
  };
  const getWeather = (e) => {
    e.preventDefault();
    fetchAPI();
  };
  return (
    <Container>
      <Title>Weather App</Title>
      <Img src={perfectDay} />
      <h3>Find weather of your city</h3>
      <form onSubmit={getWeather}>
        <Inp type="text" onChange={(e) => setCityName(e.target.value)} />
        <Btn onClick={getWeather}>Search</Btn>
      </form>
    </Container>
  );
}

export default CityInput;
