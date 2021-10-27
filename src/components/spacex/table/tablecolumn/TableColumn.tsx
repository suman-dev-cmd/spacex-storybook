import React from "react";
import { useAppSelector } from "../../../../hooks/hook";
import styled from "styled-components";

export const TableColumn = () => {
  const { backgroundColor, columns } = useAppSelector(
    (state) => state.spacex.tableHead
  );
  const headers = columns.map((column, index) => {
    const style = {
      width: column.width ?? 100,
    };
    return (
      <th key={`headCell-${index}`} style={style}>
        {column.header}
      </th>
    );
  });
  return (
      <thead>
        <tr>{headers}</tr>
      </thead>
  );
};
