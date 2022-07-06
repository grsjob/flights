import { IFlights } from "../types/flights";
import { store } from "../state/store";
import {
  applyFilters,
  initialCurrentFlights,
} from "../state/slices/flightsSlice";
import { carriersFilter } from "../hooks/filtersCarriersHook";

interface IApplyFiltersBySelectedConditions {
  carriersState: string[];
  transfersState: string[];
  flightsAfterCarriersFilter: IFlights;
  flightsAfterTransfersFilter: IFlights;
  minPrice: string;
  maxPrice: string;
}

export class HelpersService {
  static formatDate(date: string): string {
    const newDate = new Date(date);
    return newDate.toLocaleString();
  }
  static calcDuration(duration: number): string {
    const durationInHours = Math.trunc(duration / 60);
    const durationInMinute = duration - durationInHours * 60;
    return `${durationInHours} ч ${durationInMinute} мин`;
  }

  static deleteDuplicateFlights(obj: IFlights) {
    return obj.reduce((prev, item) => {
      if (!prev.find((v) => v.flightToken === item.flightToken)) {
        prev.push(item);
      }
      return prev;
    }, []);
  }
  static applyFiltersBySelectedConditions({
    carriersState,
    transfersState,
    flightsAfterCarriersFilter,
    flightsAfterTransfersFilter,
    minPrice,
    maxPrice,
  }: IApplyFiltersBySelectedConditions) {
    if (carriersState.length > 0 && transfersState.length === 0) {
      store.dispatch(applyFilters(flightsAfterCarriersFilter));
    }
    if (transfersState.length > 0 && carriersState.length === 0) {
      store.dispatch(applyFilters(flightsAfterTransfersFilter));
    }
    if (transfersState.length > 0 && carriersState.length > 0) {
      const intermediateRes = carriersFilter(
        carriersState,
        flightsAfterTransfersFilter,
      );
      store.dispatch(
        applyFilters(HelpersService.deleteDuplicateFlights(intermediateRes)),
      );
    }
    if (
      transfersState.length === 0 &&
      carriersState.length === 0 &&
      minPrice.length === 0 &&
      maxPrice.length === 0
    ) {
      store.dispatch(initialCurrentFlights());
    }
  }
}
