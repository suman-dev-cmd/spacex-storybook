import React from "react";
import Tbody, { DataProp } from './tbody/Tbody';
import { ColummnDefinationType, TableHead } from './thead/TableHead';
interface TableProps{
    data:Array<DataProp>;
    columns:Array<ColummnDefinationType>;
}
const style = {
    borderCollapse: 'collapse'
  } as const

export const Table=({data,columns}:TableProps)=>{
    return(
        <table style={style}> 
            <TableHead columns={columns}/>
            <Tbody 
              data={data}
              columns={columns}
            />
        </table>
    )
}