import { useStore } from "../state/storeHooks";
import { IFlights } from "../types/flights";
import {
  carriersFilter,
  chooseRightTransfersFilter,
  maxPriceFilter,
  minPriceFilter,
} from "../components/filters/filters-functions";

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
    let result = firstResult;
    for (let i = 1; i < currentFilters.length; i++) {
      result = currentFilters[i].filterFunc(currentFilters[i].value, result);
    }
    return result;
  } else {
    currentFilters.map((filter) => {
      res.push(...filter.filterFunc(filter.value, flights));
    });
  }
  return res;
}
