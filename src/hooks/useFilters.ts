import { useStore } from "../state/storeHooks";
import { carriersFilter } from "./filtersCarriersHook";
import { whithoutTransfers, withTransfers } from "./filtersTransfersHook";
import { IFlights } from "../types/flights";
import { HelpersService } from "../services/helpersService";
interface Filter {
  value: string | string[];
  filterFunc: (arg: string | string[], arg2: IFlights) => IFlights;
}

export function useFilters(
  carriers: string[],
  transfers: string[],
  minPrice: string,
  maxPrice: string,
) {
  const { flights } = useStore(({ flights }) => flights);
  const filters = [
    { value: transfers, filterFunc: chooseRightTransfersFilter } as Filter,
    { value: carriers, filterFunc: carriersFilter } as Filter,
    { value: minPrice, filterFunc: minPriceFilter } as Filter,
    { value: maxPrice, filterFunc: maxPriceFilter } as Filter,
  ];
  const currentFilters = filters.filter((filter) => filter.value.length > 0);
  const res: IFlights = [];
  if (currentFilters.length === 0) {
    return flights;
  } else if (currentFilters.length > 1) {
    const firstResult: IFlights = currentFilters[0].filterFunc(
      currentFilters[0].value,
      flights,
    );
    res.push(...firstResult);
    currentFilters.map((item, index) => {
      res.push(
        ...item[index + 1].filterFunc(item[index + 1].value, firstResult),
      );
    });
    return res;
  } else {
    currentFilters.map((filter) => {
      res.push(...filter.filterFunc(filter.value, flights));
    });
  }
  return HelpersService.deleteDuplicateFlights(res);
}

function maxPriceFilter(maxPrice: string, flights: IFlights) {
  return flights.filter(
    (flight) => Number(flight.flight.price.total.amount) <= Number(maxPrice),
  );
}
function minPriceFilter(minPrice: string, flights: IFlights) {
  return flights.filter(
    (filter) => Number(filter.flight.price.total.amount) >= Number(minPrice),
  );
}

function chooseRightTransfersFilter(
  transfers: string[],
  flights: IFlights,
): IFlights {
  const res = [];
  if (
    transfers.includes("oneTransfer") &&
    transfers.includes("withoutTransfer")
  ) {
    res.push(...withTransfers(flights));
    res.push(...whithoutTransfers(flights));
  } else if (transfers.includes("oneTransfer")) {
    res.push(...withTransfers(flights));
  } else if (transfers.includes("withoutTransfer")) {
    res.push(...whithoutTransfers(flights));
  }
  return res as IFlights;
}
