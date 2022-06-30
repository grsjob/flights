import React, { ComponentType } from "react";
import { useStore } from "../../../state/storeHooks";
import { IFlights } from "../../../types/flights";

interface FlightsListContainerProps {
  currentFlights: IFlights;
}

const FlightsListContainer = <T extends object>(
  Component: ComponentType<T>,
): React.FC<T & FlightsListContainerProps> => {
  const displayName = Component.displayName || Component.name || "Component";

  const ComponentWithFlightsList = (props: T) => {
    const { currentFlights } = useStore(({ flights }) => flights);

    return <Component currentFlights={currentFlights} {...(props as T)} />;
  };
  ComponentWithFlightsList.displayName = `withFlightsList(${displayName})`;
  return ComponentWithFlightsList;
};

export default FlightsListContainer;
