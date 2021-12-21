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
  font-size: 22px;
  width: 90vw;
  max-width: 5000px;
  max-height: 950px;
  height: 70vh;
  box-shadow: 0 2px 2px 2px grey;
  border-radius: 5px;

  @media (min-width: 700px) {
    font-size: 28px;
    width: 65vw;
  }

  @media (min-width: 1000px) {
    font-size: 35px;
    height: 80vh;
  }

  @media (min-width: 2000px) {
    font-size: 48px;
    height: 90vh;
  }
`;

const Title = styled.h1`
  margin-top: 40px;
  font-weight: 900;
  font-size: 42px;

  @media (min-width: 700px) {
    font-size: 48px;
  }

  @media (min-width: 1000px) {
    font-size: 62px;
  }

  @media (min-width: 1400px) {
    font-size: 68px;
  }

  @media (min-width: 1800px) {
    font-size: 72px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  @media (min-width: 2200px) {
    font-size: 80px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

const Img = styled.img`
  width: 60%;
  max-width: 3050px;
  max-height: 2050px;
  height: 30%;
  margin: 20px 0;

  @media (min-width: 700px) {
    height: 32%;
    width: 70%;
    margin-top: 30px;
    margin-bottom: none;
  }

  @media (min-width: 1000px) {
    height: 35%;
    width: 80%;
    margin-top: 30px;
    margin-bottom: none;
  }

  @media (min-width: 1400px) {
    height: 38%;
    width: 75%;
    // margin-top: 20px;
    margin-bottom: none;
  }

  @media (min-width: 1800px) {
    height: 40%;
    width: 80%;
    margin-top: 30px;
    margin-bottom: none;
  }
`;

const Head3 = styled.h3`
  @media (min-width: 700px) {
    margin-top: 5px;
    margin-bottom: 15px;
  }

  @media (min-width: 1000px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (min-width: 2000px) {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 50%;
  @media (min-width: 450px) {
    flex-grow: 6;
  }
`;

const Inp = styled.input`
  border: 1px solid black;
  box-sizing: border-box;
  padding: 10px;
  // width: 70%;
  flex-grow: 4;
  height: 35px;
  selection: none;
  font-size: 20px;
  &:focus {
    outline: none;
  }

  @media (min-width: 450px) {
    flex-grow: 6;
  }
`;

const Btn = styled.button`
  border: 1px solid black;
  display: flex;
  box-sizing: border-box;
  background: black;
  color: white;
  height: 35px;
  font-size: 20px;
  padding: 10px;
  // width: 30%;
  flex-grow: 2;

  justify-content: center;
  align-items: center;
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
      <Head3>Find weather of your city</Head3>
      <Form onSubmit={getWeather}>
        <Inp type="text" onChange={(e) => setCityName(e.target.value)} />
        <Btn onClick={getWeather}>Search</Btn>
      </Form>
    </Container>
  );
}

export default CityInput;
