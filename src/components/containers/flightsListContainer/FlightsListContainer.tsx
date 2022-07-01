import React, { ComponentType } from "react";
import { useStore } from "../../../state/storeHooks";
import { IFlights } from "../../../types/flights";
import FlightsList from "../../flights-list/FlightsList";

interface FlightsListContainerProps {
  flights: IFlights;
}

const ContainerWithFlights = <T extends FlightsListContainerProps>(
  Component: ComponentType<T>,
) => {
  const displayName = Component.displayName || Component.name || "Component";

  const ComponentWithFlightsList = (
    props: Omit<T, keyof FlightsListContainerProps>,
  ) => {
    const { currentFlights } = useStore(({ flights }) => flights);

    return <Component flights={currentFlights} {...(props as T)} />;
  };
  ComponentWithFlightsList.displayName = `withFlightsList(${displayName})`;
  return ComponentWithFlightsList;
};

export const FlightsListContainer = ContainerWithFlights(FlightsList);
