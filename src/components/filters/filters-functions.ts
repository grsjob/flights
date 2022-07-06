import { IFlights } from "../../types/flights";

export function maxPriceFilter(maxPrice: string, flights: IFlights) {
  return flights.filter(
    (flight) => Number(flight.flight.price.total.amount) <= Number(maxPrice),
  );
}
export function minPriceFilter(minPrice: string, flights: IFlights) {
  return flights.filter(
    (filter) => Number(filter.flight.price.total.amount) >= Number(minPrice),
  );
}

export function chooseRightTransfersFilter(
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
export function carriersFilter(carriers: string[], flights: IFlights) {
  return flights.filter((flight) =>
    carriers.includes(flight.flight.carrier.caption),
  );
}
