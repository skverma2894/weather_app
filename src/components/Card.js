import React from "react";
import styled from "styled-components";

const CardFrame = styled.div`
  // border: 1px solid red;
  display: flex;
  padding: 10px;
  min-padding: 0%;

  justify-content: center;
  max-width: 1000px;
  width: 50%;
  font-weight: 700;
`;

const Desc = styled.div`
  margin-left: 15px;
`;

function Card(props) {
  return (
    <CardFrame>
      <img src={props.img} alt="" width="80px" />
      <Desc>
        <div>{props.amt}</div>
        <div>{props.title}</div>
      </Desc>
    </CardFrame>
  );
}

export default Card;
