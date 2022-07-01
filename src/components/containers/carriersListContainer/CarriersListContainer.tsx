import React, { ComponentType } from "react";
import { useStore } from "../../../state/storeHooks";
import AirlineFilter from "../../filters/filters__airline-filter/AirlineFilter";

interface CarriersListContainerPops {
  carriers: string[];
}

const ContainerWithCarriersList = <T extends CarriersListContainerPops>(
  Component: ComponentType<T>,
) => {
  const displayName = Component.displayName || Component.name || "Component";

  const ComponentWithCarriersList = (
    props: Omit<T, keyof CarriersListContainerPops>,
  ) => {
    const { flights } = useStore(({ flights }) => flights);

    const carriers = [
      ...new Set(flights.map((item) => item.flight.carrier.caption)),
    ];
    return <Component carriers={carriers} {...(props as T)} />;
  };
  ComponentWithCarriersList.displayName = `withCarriersList(${displayName})`;
  return ComponentWithCarriersList;
};

export const CarriersListContainer = ContainerWithCarriersList(AirlineFilter);
