import React from "react";
import { useAppSelector } from "../../../../hooks/hook";
import styled from "styled-components";
const TheadCotainer = styled.thead`
  box-shadow: 0 0px 6px #706d6d;
  height: 45px;
  background-color: #e5e9ed;
`;
const ThContainer = styled.th`
  padding: 1rem 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.7rem;
  font-weight: 900;
`;
export const TableColumn = () => {
  const { backgroundColor, columns } = useAppSelector(
    (state) => state.spacex.tableHead
  );
  const headers = columns.map((column, index) => {
    const style = {
      width: column.width ?? 100,
    };
    return (
      <ThContainer key={`headCell-${index}`} style={style}>
        {column.header}
      </ThContainer>
    );
  });
  return (
    <TheadCotainer>
      <tr>{headers}</tr>
    </TheadCotainer>
  );
};
