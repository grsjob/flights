import { useStore } from "../state/storeHooks";
import { IFlights } from "../types/flights";

export function useCarriersFilter(carriers: string[]): IFlights {
  const { flights } = useStore(({ flights }) => flights);

  const flightsAfterCarriersFilter = flights.filter((flight) =>
    carriers.includes(flight.flight.carrier.caption),
  );

  return flightsAfterCarriersFilter;
}

export function carriersFilter(carriers: string[], flights: IFlights) {
  return flights.filter((flight) =>
    carriers.includes(flight.flight.carrier.caption),
  );
}
