import React, { ChangeEvent } from "react";
import { StyledFilters } from "./filtersStyles";
import TransferFilter from "./filters__transfer-filter/transfer-filter";
import SortingFilter from "./filters__sorting/sorting-filter";
import PriceFilter from "./filters__price/price-filter";
import AirlineFilter from "./filters__airline-filter/AirlineFilter";

const Filters = () => {
  const airlines = ["Air France", "KLM", "Аэрофлот - российские авиалинии"];
  return (
    <StyledFilters>
      <li>
        <SortingFilter
          sortForAscending={() => console.log("сортировка по возрастанию")}
          sortForDescending={() => console.log("сортировка по убыванию")}
          sortByTime={() => console.log("сортировка по времени")}
        />
      </li>
      <li>
        <TransferFilter
          onChangeForWithoutTransfer={printCheckbox}
          onChangeForOneTrasfer={printCheckbox}
        />
      </li>
      <li>
        <PriceFilter setMaximumPrice={max} setMinimumPrice={min} />
      </li>
      <li>
        <AirlineFilter airlines={airlines} onChangeAirline={printCheckbox} />
      </li>
    </StyledFilters>
  );
};

export default Filters;

function min(e: ChangeEvent<HTMLInputElement>) {
  console.log(e.target.value);
}

function max(e: ChangeEvent<HTMLInputElement>) {
  console.log(e.target.value);
}
function printCheckbox(e: ChangeEvent<HTMLInputElement>) {
  console.log(e.target.name);
}
