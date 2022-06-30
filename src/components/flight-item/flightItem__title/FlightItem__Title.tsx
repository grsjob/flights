import React from "react";
import { PriceBox, Title } from "./titleStyles";

interface FlightItemTitleProps {
  carrierCaption: string;
  price: string;
}

const FlightItemTitle = ({ carrierCaption, price }: FlightItemTitleProps) => {
  return (
    <Title>
      {carrierCaption}
      <PriceBox>
        {price} руб.<span>Стоимость для одного взрослого пассажира</span>
      </PriceBox>
    </Title>
  );
};

export default FlightItemTitle;
