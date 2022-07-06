import styled from "styled-components";

export const StyledFlightItem = styled.div`
  //max-width: 900px;
`;

export const SelectButton = styled.button`
  border: none;
  width: 100%;
  padding: 2% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 2%;
  &:active {
    transition: 0.3s all;
    transform: translateY(3px);
    opacity: 0.8;
  }
`;
