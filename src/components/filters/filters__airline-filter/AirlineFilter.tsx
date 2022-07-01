import React, { ChangeEvent } from "react";
import { StyledAirlineFilter } from "./airLineStyles";
interface AirlineFilterProps {
  onChangeAirline: (e: ChangeEvent<HTMLInputElement>) => void;
  carriers: string[];
}
const AirlineFilter = ({ onChangeAirline, carriers }: AirlineFilterProps) => {
  return (
    <StyledAirlineFilter>
      <h4>Авиакомпании</h4>
      {carriers.map((airline) => (
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
