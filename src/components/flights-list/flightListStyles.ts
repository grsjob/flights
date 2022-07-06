import styled from "styled-components";

export const StyledFlightsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const FlightsListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ShowMoreButton = styled.button`
  width: 30%;
  padding: 1% 2%;
  align-self: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
`;
