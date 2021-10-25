import React from 'react';
import {useSelector} from 'react-redux';
import { DataProp } from '../table/tbody/Tbody';
const List:React.FC = () => {
    const {spacex} = useSelector((state)=>state) as any;
    console.log(spacex);

    return (
        <ul>
         {spacex&&spacex.catData?.map((obj:DataProp,i:number)=>(
             <li key={i}>{obj.name}</li>
         ))}
        </ul>
    )
}

export default List;
