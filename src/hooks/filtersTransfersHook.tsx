import { IFlights } from "../types/flights";
import { useStore } from "../state/storeHooks";
import { useMemo } from "react";

export function useFilterTransfers(transfers: string[], count = 2): IFlights {
  const { flights } = useStore(({ flights }) => flights);

  const flightsWithTransefers = useMemo(() => {
    return withTransfers(flights, count);
  }, [flights]);
  const flightsWithoutTratsfers = useMemo(() => {
    return whithoutTransfers(flights, count);
  }, [flights]);

  if (
    transfers.includes("oneTransfer") &&
    transfers.includes("withoutTransfer")
  ) {
    return [...flightsWithTransefers, ...flightsWithoutTratsfers];
  } else if (transfers.includes("withoutTransfer")) {
    return [...flightsWithoutTratsfers];
  } else if (transfers.includes("oneTransfer")) {
    return [...flightsWithTransefers];
  }
}
export function withTransfers(flights: IFlights, count = 2) {
  return flights.filter((flights) => {
    const route = flights.flight.legs.filter(
      (leg) => leg.segments.length === count,
    );
    if (route.length > 0) return route;
  });
}

export function whithoutTransfers(flights: IFlights, count = 2) {
  const newArray = withTransfers(flights, count);
  return flights.filter((flight) => !newArray.includes(flight));
}
