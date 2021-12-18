import React from "react";
import styled from "styled-components";

const CardFrame = styled.div`
  // border: 1px solid red;
  display: flex;
  padding: 10px;
  min-padding: 0%;
  margin: 10px;
  justify-content: center;
  min-width: 10%;
  width: 100px;
  font-weight: 700;
`;

const Desc = styled.div`
  margin-left: 5px;
`;

function Card(props) {
  return (
    <CardFrame>
      <img src={props.img} alt="" />
      <Desc>
        <div>{props.amt}</div>
        <div>{props.title}</div>
      </Desc>
    </CardFrame>
  );
}

export default Card;
