import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import moment from "moment";
import { TableDataProps } from "../typeInterface/TableInterface";
import { getItems } from "../../../../state/actions/spacexActions";
const TableRow:React.FC = () => {
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
      return <span style={{ backgroundColor: "#17a2b8" }}>Upcoming</span>;
    } else {
      if (launch_success) {
        return <span style={{ backgroundColor: "green" }}>Success</span>;
      } else {
        return <span style={{ backgroundColor: "red" }}>Faild</span>;
      }
    }
  };
  useEffect(() => {
    dispatch(getItems());
  }, []);
  const style = {
    border: "1px solid black",
    textAlign: "center" as const,
  };
  const rows = tableData.map((row, index) => {
    return (
      <tr key={`row-${index}`}>
        {tableHead.columns.map((column, index2) => {
          return (
            <td key={`cell-${index2}`} style={style}>
              {column.key == "launch_success"
                ? getStatus(row.upcoming, row.launch_success)
                : row[column.key]}
            </td>
          );
        })}
      </tr>
    );
  });
  return (
    <tbody>
      {isLoading ? (
        <>Loading.....</>
      ) : errorMessage ? (
        <>{errorMessage}</>
      ) : (
        rows
      )}
    </tbody>
  );
};

export default TableRow;
