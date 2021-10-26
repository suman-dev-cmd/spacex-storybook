import React from "react";
import { useAppSelector } from "../../../../hooks/hook";
export const TableColumn = () => {
  const { backgroundColor, columns } = useAppSelector(
    (state) => state.spacex.tableHead
  );
  const headers = columns.map((column, index) => {
    const style = {
      width: column.width ?? 100,
      borderBottom: "2px solid black",
    };
    return (
      <th key={`headCell-${index}`} style={style}>
        {column.header}
      </th>
    );
  });
  return (
    <thead style={{ backgroundColor }}>
      <tr>{headers}</tr>
    </thead>
  );
};
