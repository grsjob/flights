import React, { ChangeEvent } from "react";
import { StyledCheckboxGroup } from "./transferFilterStyles";
interface TransferFilterProps {
  onChangeForOneTrasfer: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeForWithoutTransfer: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TransferFilter = ({
  onChangeForOneTrasfer,
  onChangeForWithoutTransfer,
}: TransferFilterProps) => {
  return (
    <StyledCheckboxGroup>
      <h4>Фильтровать</h4>
      <li>
        <input
          type="checkbox"
          name="oneTransfer"
          onChange={(e) => onChangeForOneTrasfer(e)}
        />
        <label htmlFor="oneTransfer">1 пересадка</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="withoutTransfer"
          onChange={(e) => onChangeForWithoutTransfer(e)}
        />
        <label htmlFor="withoutTransfer">без пересадок</label>
      </li>
    </StyledCheckboxGroup>
  );
};

export default TransferFilter;
