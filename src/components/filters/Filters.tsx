import React, { ChangeEvent, useEffect, useState } from "react";
import { StyledFilters } from "./filtersStyles";
import TransferFilter from "./filters__transfer-filter/transfer-filter";
import SortingFilter from "./filters__sorting/sorting-filter";
import PriceFilter from "./filters__price/price-filter";
import { CarriersListContainer } from "../containers/carriersListContainer/CarriersListContainer";
import { store } from "../../state/store";
import {
  applyFilters,
  ascendingPriceSorting,
  byTimeSorting,
  descendingPriceSorting,
} from "../../state/slices/flightsSlice";
import { setCurrentCarriers } from "../../state/slices/carriersSlice";
import { useFilters } from "../../hooks/useFilters";

const Filters = () => {
  const [carriersState, setCarriersState] = useState<string[]>([]);
  const [transfersState, setTransfersState] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filtersResults = useFilters(
    carriersState,
    transfersState,
    minPrice,
    maxPrice,
  );

  useEffect(() => {
    store.dispatch(setCurrentCarriers(carriersState));
    store.dispatch(applyFilters(filtersResults));
  }, [carriersState, transfersState, minPrice, maxPrice]);

  function transfersOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setTransfersState((transfersState) => [...transfersState, e.target.name]);
    } else {
      setTransfersState((transfersState) => [
        ...transfersState.filter((transfer) => transfer !== e.target.name),
      ]);
    }
  }

  function carriersOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setCarriersState((carriersState) => [...carriersState, e.target.name]);
    } else {
      setCarriersState((carriersState) => [
        ...carriersState.filter((carrier) => carrier !== e.target.name),
      ]);
    }
  }
  return (
    <StyledFilters>
      <li>
        <SortingFilter
          sortForAscending={() => store.dispatch(ascendingPriceSorting())}
          sortForDescending={() => store.dispatch(descendingPriceSorting())}
          sortByTime={() => store.dispatch(byTimeSorting())}
        />
      </li>
      <li>
        <TransferFilter
          onChangeForWithoutTransfer={transfersOnChange}
          onChangeForOneTransfer={transfersOnChange}
        />
      </li>
      <li>
        <PriceFilter
          setMaximumPrice={setMaxPrice}
          setMinimumPrice={setMinPrice}
        />
      </li>
      <li>
        <CarriersListContainer onChangeAirline={carriersOnChange} />
      </li>
    </StyledFilters>
  );
};

export default Filters;
