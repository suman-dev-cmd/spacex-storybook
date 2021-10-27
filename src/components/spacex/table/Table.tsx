import React from "react";
import { TableColumn } from "./tablecolumn/TableColumn";
import TableRow from "./tablerow/TableRow";
import { Container,TableRowContainer } from "./TableStyles";
const Table:React.FC = () => {
  return (
    <Container bid={2}>
      <table>
        <TableColumn />
        <TableRow />
      </table>
    </Container>
  );
};

export default Table;
