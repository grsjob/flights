import React, { ChangeEvent } from "react";
import { StyledPriceFilter } from "./priceFilterStyles";

interface PriceFilterProps {
  setMinimumPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaximumPrice: React.Dispatch<React.SetStateAction<string>>;
}
const PriceFilter = ({
  setMinimumPrice,
  setMaximumPrice,
}: PriceFilterProps) => {
  return (
    <StyledPriceFilter>
      <h4>Цена</h4>
      <label>
        От
        <input
          placeholder="0"
          onChange={(e) => setMinimumPrice(e.target.value)}
        />
      </label>
      <label>
        До
        <input
          placeholder="1000000"
          onChange={(e) => setMaximumPrice(e.target.value)}
        />
      </label>
    </StyledPriceFilter>
  );
};

export default PriceFilter;
