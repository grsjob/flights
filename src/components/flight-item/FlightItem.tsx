import React from "react";
import FlightItemTitle from "./flightItem__title/FlightItem__Title";
import { SelectButton, StyledFlightItem } from "./flightItemStyles";
import FlightItemOneFlight from "./flightItem__oneFlight/FlightItem__oneFlight";
import { IFlight } from "../../types/flight";
import { ILegs } from "../../types/legs";
import {
  FillFlightFields,
  InterfaceFlightDescription,
  SegmentAndTransferCount,
} from "../../types/helpers";
import { HelpersService } from "../../services/helpersService";

interface FlightItemProps {
  numberOfFlights: number;
  flight: IFlight;
}
interface DepartureBase {
  departureCity: string;
  departureAirport: string;
  departureAirportUid: string;
  departureDate: string;
}
export interface IDeparture {
  forward: DepartureBase;
  back: DepartureBase;
}
interface ArrivalBase {
  arrivalCity: string;
  arrivalAirport: string;
  arrivalAirportUid: string;
  arrivalDate: string;
}
export interface IArrival {
  forward: ArrivalBase;
  back: ArrivalBase;
}

const FlightItem = ({ numberOfFlights, flight }: FlightItemProps) => {
  const count: number[] = [];
  for (let i = 1; i <= numberOfFlights; i++) {
    count.push(i);
  }
  const { price, carrier, legs } = flight;
  const flightDescription = generateFlightDescription(legs);
  const departure: IDeparture = {
    forward: {
      departureCity: flightDescription.forward.departureCity,
      departureAirport: flightDescription.forward.departureAirport,
      departureAirportUid: flightDescription.forward.departureAirportUid,
      departureDate: flightDescription.forward.departureDate,
    },
    back: {
      departureCity: flightDescription.back.departureCity,
      departureAirport: flightDescription.back.departureAirport,
      departureAirportUid: flightDescription.back.departureAirportUid,
      departureDate: flightDescription.forward.departureDate,
    },
  };
  const arrival: IArrival = {
    forward: {
      arrivalCity: flightDescription.forward.arrivalCity,
      arrivalAirport: flightDescription.forward.arrivalAirport,
      arrivalAirportUid: flightDescription.forward.arrivalAirportUid,
      arrivalDate: flightDescription.forward.arrivalDate,
    },
    back: {
      arrivalCity: flightDescription.back.arrivalCity,
      arrivalAirport: flightDescription.back.arrivalAirport,
      arrivalAirportUid: flightDescription.back.arrivalAirportUid,
      arrivalDate: flightDescription.back.arrivalDate,
    },
  };
  return (
    <StyledFlightItem>
      <FlightItemTitle
        carrierCaption={carrier.caption}
        price={price.total.amount}
      />
      {count.map((count) => {
        if (count == 1) {
          return (
            <FlightItemOneFlight
              key={count}
              departure={departure}
              arrival={arrival}
              duration={flightDescription.forward.duration}
              carrierCaption={carrier.caption}
              numberOfTransfers={flightDescription.forward.transfersCount}
              oneFlight={count}
            />
          );
        } else {
          return (
            <FlightItemOneFlight
              key={count}
              departure={departure}
              arrival={arrival}
              duration={flightDescription.back.duration}
              carrierCaption={carrier.caption}
              numberOfTransfers={flightDescription.back.transfersCount}
              oneFlight={count}
            />
          );
        }
      })}

      <SelectButton>Выбрать</SelectButton>
    </StyledFlightItem>
  );
};

export default FlightItem;

function calcSegmentIndexAndTransfersCount(
  segmentsCount: number,
): SegmentAndTransferCount {
  const object = {};

  if (segmentsCount) {
    object["segmentsIndex"] = segmentsCount - 1;
    object["transfersCount"] = segmentsCount - 1;
  } else {
    object["segmentsIndex"] = 0;
    object["transfersCount"] = 0;
  }

  return object as SegmentAndTransferCount;
}
function generateFlightDescription(legs: ILegs[]): InterfaceFlightDescription {
  const flightDescription = {};

  for (let i = 0; i < legs.length; i++) {
    if (i == 0) {
      const data = calcSegmentIndexAndTransfersCount(legs[i].segments.length);
      flightDescription["forward"] = fillFlightFields(
        legs[i],
        i,
        data.segmentsIndex,
        data.transfersCount,
      );
      flightDescription["forward"].duration = HelpersService.calcDuration(
        legs[i].duration,
      );
    } else {
      const data = calcSegmentIndexAndTransfersCount(legs[i].segments.length);
      flightDescription["back"] = fillFlightFields(
        legs[i],
        i,
        data.segmentsIndex,
        data.transfersCount,
      );
      flightDescription["back"].duration = HelpersService.calcDuration(
        legs[i].duration,
      );
    }
  }

  return flightDescription as InterfaceFlightDescription;
}
function fillFlightFields(
  leg: ILegs,
  currentIndex: number,
  segmentsIndex: number,
  transfersCount: number,
): FillFlightFields {
  const object = {};
  object["departureCity"] = leg.segments[0].departureCity
    ? leg.segments[0].departureCity.caption
    : "";

  object["departureAirport"] = leg.segments[0].departureAirport
    ? leg.segments[0].departureAirport.caption
    : "";

  object["departureAirportUid"] = leg.segments[0].departureAirport
    ? leg.segments[0].departureAirport.uid
    : "";
  object["departureDate"] = leg.segments[0].departureDate
    ? HelpersService.formatDate(leg.segments[0].departureDate)
    : "";

  object["arrivalCity"] = leg.segments[segmentsIndex].arrivalCity
    ? leg.segments[segmentsIndex].arrivalCity.caption
    : "";

  object["arrivalAirport"] = leg.segments[segmentsIndex].arrivalAirport
    ? leg.segments[segmentsIndex].arrivalAirport.caption
    : "";

  object["arrivalAirportUid"] = leg.segments[segmentsIndex].arrivalAirport
    ? leg.segments[segmentsIndex].arrivalAirport.uid
    : "";
  object["arrivalDate"] = leg.segments[segmentsIndex].arrivalDate
    ? HelpersService.formatDate(leg.segments[segmentsIndex].arrivalDate)
    : "";
  object["transfersCount"] = transfersCount;

  return object as FillFlightFields;
}
