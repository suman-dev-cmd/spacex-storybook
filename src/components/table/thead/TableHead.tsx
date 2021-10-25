import React from 'react';
import { DataProp } from '../tbody/Tbody';

export interface ColummnDefinationType{
    key: keyof DataProp;
    header:string;
    width?:number;
}
export interface TableHeadprops{
   columns:ColummnDefinationType[];
   backgroundColor?:string;
}

export const TableHead = ({
    columns,backgroundColor,...props
}:TableHeadprops) => {
    const headers = columns.map((column, index) => {
        const style = {
          width: column.width ?? 100, 
          borderBottom: '2px solid black',
        };
    
        return (
          <th
            key={`headCell-${index}`}
            style={style}
          >
            {column.header}
          </th>
        );
      });
    return (
        <thead style={{backgroundColor}}{...props}> 
            <tr>{headers}</tr>
        </thead>
    )
}

