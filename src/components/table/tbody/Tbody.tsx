import React from 'react';
import { ColummnDefinationType } from '../thead/TableHead';

export interface DataProp{
    name: string;
    age: number;
    color: string;
}
interface TableRowsProps{
    data:Array<DataProp>;
    columns:Array<ColummnDefinationType>;
}

const style={
    border:'1px solid black',
    textAlign:'center' as const
} 
const Tbody = ({data,columns}:TableRowsProps)=>{
    const rows = data.map((row,index)=>{
        return(
            <tr key={`row-${index}`}>
                {columns.map((column,index2)=>{
                    return(
                        <td key={`cell-${index2}`} style={style}>
                            {row[column.key]}
                        </td>
                    )
                })}
            </tr>
        )
    })

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

export default Tbody
