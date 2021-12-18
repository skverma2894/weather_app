import React, { Component } from "react";
import CityInput from "./components/CityInput";
import WeatherDisplay from "./components/WeatherDisplay";

import styled from "styled-components";
import { DataContext } from "./components/ContextStore";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

class App extends Component {
  state = {};

  render() {
    const setData = (api) => {
      this.setState(api);
    };
    return (
      <AppContainer>
        <DataContext.Provider value={this.state}>
          {Object.entries(this.state).length === 0 &&
          this.state.constructor === Object ? (
            <CityInput setData={setData}></CityInput>
          ) : (
            <WeatherDisplay></WeatherDisplay>
          )}
        </DataContext.Provider>
      </AppContainer>
    );
  }
}

App.contextType = DataContext;

export default App;
