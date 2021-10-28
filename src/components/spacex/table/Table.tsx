import React from "react";
import { TableColumn } from "./tablecolumn/TableColumn";
import TableRow from "./tablerow/TableRow";
import { TableContainer } from "./TableStyles";
const Table:React.FC = () => {
  return (
    <TableContainer>
        <TableColumn />
        <TableRow />
    </TableContainer>
  );
};

export default Table;
