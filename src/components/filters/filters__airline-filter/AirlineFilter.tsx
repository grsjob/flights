import React, { ChangeEvent } from "react";
import { StyledAirlineFilter } from "./airLineStyles";
interface AirlineFilterProps {
  airlines: string[];
  onChangeAirline: (e: ChangeEvent<HTMLInputElement>) => void;
}
const AirlineFilter = ({ airlines, onChangeAirline }: AirlineFilterProps) => {
  return (
    <StyledAirlineFilter>
      <h4>Авиакомпании</h4>
      {airlines.map((airline) => (
        <li key={airline}>
          <label>
            <input
              type="checkbox"
              name={airline}
              onChange={(e) => onChangeAirline(e)}
            />
            {airline}
          </label>
        </li>
      ))}
    </StyledAirlineFilter>
  );
};

export default AirlineFilter;
