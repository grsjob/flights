import React, { ChangeEvent } from "react";
import { StyledCheckboxGroup } from "./transferFilterStyles";
interface TransferFilterProps {
  onChangeForOneTransfer: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeForWithoutTransfer: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TransferFilter = ({
  onChangeForOneTransfer,
  onChangeForWithoutTransfer,
}: TransferFilterProps) => {
  return (
    <StyledCheckboxGroup>
      <h4>Фильтровать</h4>
      <li>
        <input
          type="checkbox"
          name="oneTransfer"
          onChange={(e) => onChangeForOneTransfer(e)}
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
