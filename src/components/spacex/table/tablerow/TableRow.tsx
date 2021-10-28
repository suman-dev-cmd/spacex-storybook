import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import moment from "moment";
import { TableDataProps } from "../typeInterface/TableInterface";
import { getItems } from "../../../../state/actions/spacexActions";
import styled from "styled-components";
const TdContainer = styled.td`
  padding: 1rem 0.5rem;
`;
const TbodyContainer = styled.tbody`
  tr:nth-child(even) {
    background-color: #e7e3e3;
  }
`;
type Props = {
  status:string
}
const SpanContainer = styled.span<Props>`
  border-radius: 5px;
  padding: 0.2rem 1rem;
  text-align: center;
  display: flex; 
  justify-content: center;
  text-transform: uppercase;
  color: ${(props)=>props.status === 'upcoming'? '#ab2e2e':props.status === 'success'?'#e7e5e0':'#f3c55c'};
  background-color:${(props)=>props.status === 'upcoming'? 'rgb(237 204 40)':props.status === 'success'?'rgb(9 185 104)':'#ef2c2c'};
`;
const TableRow: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tableHead, item, isLoading, errorMessage } = useAppSelector(
    (state) => state.spacex
  );
  let tableData: TableDataProps[] = [];
  if (item) {
    tableData = item.map((item) => {
      const container = {} as TableDataProps;
      if (item.flight_number !== undefined)
        container.flight_number = item.flight_number;
      container.launch_date_utc = moment(item.launch_date_utc).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      container.mission_name = item.mission_name;
      container.rocket_name = item.rocket?.rocket_name;
      container.orbit = item.rocket?.second_stage.payloads[0].orbit;
      container.upcoming = item.upcoming;
      container.launch_success = item.launch_success;
      container.launch_site = item.launch_site?.site_name;

      return container;
    });
  }
  const getStatus = (upcoming: boolean, launch_success: boolean) => {
    if (upcoming) {
      return <SpanContainer status='upcoming'>Upcoming</SpanContainer>;
    } else {
      if (launch_success) {
        return <SpanContainer status='success'>Success</SpanContainer>;
      } else {
        return <SpanContainer status='faild'>Faild</SpanContainer>;
      }
    }
  };
  useEffect(() => {
    dispatch(getItems());
  }, []);

  const rows = tableData.map((row, index) => {
    return (
      <tr key={`row-${index}`}>
        {tableHead.columns.map((column, index2) => {
          return (
            <TdContainer key={`cell-${index2}`}>
              {column.key == "launch_success"
                ? getStatus(row.upcoming, row.launch_success)
                : row[column.key]}
            </TdContainer>
          );
        })}
      </tr>
    );
  });
  return (
    <TbodyContainer>
      {isLoading ? (
        <>Loading.....</>
      ) : errorMessage ? (
        <>{errorMessage}</>
      ) : (
        rows
      )}
    </TbodyContainer>
  );
};

export default TableRow;
