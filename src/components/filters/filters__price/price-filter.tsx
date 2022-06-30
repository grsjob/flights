import React, { ChangeEvent } from "react";
import { StyledPriceFilter } from "./priceFilterStyles";

interface PriceFilterProps {
  setMinimumPrice: (e: ChangeEvent<HTMLInputElement>) => void;
  setMaximumPrice: (e: ChangeEvent<HTMLInputElement>) => void;
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
        <input placeholder="0" onChange={(e) => setMinimumPrice(e)} />
      </label>
      <label>
        До
        <input placeholder="1000000" onChange={(e) => setMaximumPrice(e)} />
      </label>
    </StyledPriceFilter>
  );
};

export default PriceFilter;
