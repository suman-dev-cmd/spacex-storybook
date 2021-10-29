import React from "react";
import { TableColumn } from "./tablecolumn/TableColumn";
import TableRow from "./tablerow/TableRow";
import { TableContainer } from "./TableStyles";
const Table = () => {
  return (
    <TableContainer data-test='component-app'>
        <TableColumn />
        <TableRow />
    </TableContainer>
  );
};

export default Table;
