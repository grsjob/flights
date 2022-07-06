import React, { ChangeEvent, useEffect, useState } from "react";
import { StyledFilters } from "./filtersStyles";
import TransferFilter from "./filters__transfer-filter/transfer-filter";
import SortingFilter from "./filters__sorting/sorting-filter";
import PriceFilter from "./filters__price/price-filter";
import { CarriersListContainer } from "../containers/carriersListContainer/CarriersListContainer";
import { store } from "../../state/store";
import {
  applyFilters,
  initialCurrentFlights,
} from "../../state/slices/flightsSlice";
import { useFilterTransfers } from "../../hooks/filtersTransfersHook";
import {
  carriersFilter,
  useCarriersFilter,
} from "../../hooks/filtersCarriersHook";
import { HelpersService } from "../../services/helpersService";
import { setCurrentCarriers } from "../../state/slices/carriersSlice";
import { useFilters } from "../../hooks/useFilters";

const Filters = () => {
  const [carriersState, setCarriersState] = useState<string[]>([]);
  const [transfersState, setTransfersState] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const flightsAfterTransfersFilter = useFilterTransfers(transfersState);
  const flightsAfterCarriersFilter = useCarriersFilter(carriersState);
  const filtersRefults = useFilters(
    carriersState,
    transfersState,
    minPrice,
    maxPrice,
  );

  useEffect(() => {
    store.dispatch(setCurrentCarriers(carriersState));
    // HelpersService.applyFiltersBySelectedConditions({
    //   carriersState,
    //   transfersState,
    //   flightsAfterCarriersFilter,
    //   flightsAfterTransfersFilter,
    //   minPrice,
    //   maxPrice,
    // });
    store.dispatch(applyFilters(filtersRefults));
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
          sortForAscending={() => console.log("сортировка по возрастанию")}
          sortForDescending={() => console.log("сортировка по убыванию")}
          sortByTime={() => console.log("сортировка по времени")}
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
