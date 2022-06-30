import React from "react";
import { StyledSortingFilter } from "./sortingFilterStyles";

interface SortingFilter {
  sortForAscending: () => void;
  sortForDescending: () => void;
  sortByTime: () => void;
}

const SortingFilter = ({
  sortForAscending,
  sortForDescending,
  sortByTime,
}: SortingFilter) => {
  return (
    <StyledSortingFilter>
      <h4>Сортировать</h4>
      <li>
        <label>
          <input
            type="radio"
            name="sort"
            value="ascending"
            onChange={sortForAscending}
          />
          по возрастанию цены
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            name="sort"
            value="descending"
            onChange={sortForDescending}
          />
          по убыванию цены
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            name="sort"
            value="byTime"
            onChange={sortByTime}
          />
          по времени в пути
        </label>
      </li>
    </StyledSortingFilter>
  );
};

export default SortingFilter;
