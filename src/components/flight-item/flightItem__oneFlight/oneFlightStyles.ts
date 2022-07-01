import styled from "styled-components";
const clock = require("../../../assets/img/clock.png");

export const StyledOneFlight = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-bottom: ${(props) =>
    props.oneFlight > 1 ? "none" : "2px solid blue"};
`;

export const Line = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1% 5%;
`;

export const Uid = styled.span`
  color: cadetblue;
`;

export const Departure = styled.span`
  min-width: 40%;
`;

export const Arrival = styled.span`
  min-width: 40%;
  display: inline-flex;
  justify-content: flex-end;
`;

export const Time = styled.div`
  display: inline-block;
  position: relative;

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    left: -25px;
    top: 3px;
    background-image: url(${clock});
    background-size: cover;
  }
`;

export const Transfers = styled(Line)`
  padding: 0;
  justify-content: center;
`;
