import React from "react";
import Tbody from "./Tbody";
import {ComponentMeta,ComponentStory} from '@storybook/react';
import { DataProp } from './Tbody';
import { ColummnDefinationType } from "../thead/TableHead";
import {useAppDispatch,useAppSelector} from "../../../hooks/hook";
export default {
    title:'Spacex/Table/Tbody',
    component:Tbody,
    argsType:{
        backgroundColor:{contorl:'color'}
    }
} as ComponentMeta<typeof Tbody>
// const {catData} = useAppSelector((state)=>state.spacex);
// console.log(catData);
const Template:ComponentStory<typeof Tbody> =(args)=><Tbody {...args}/>
const data: DataProp[] = [
    {
      name: 'Mittens',
      color: 'black',
      age: 2
    },
    {
      name: 'Mons',
      color: 'grey',
      age: 2,
    },
    {
      name: 'Luna',
      color: 'black',
      age: 2  
    },
    {
      name: 'Bella',
      color: 'grey',
      age: 1
    },
    {
      name: 'Oliver',
      color: 'orange',
      age: 1
    }
  ]
  const columns: ColummnDefinationType[] = [
    {
      key: 'name',
      header: 'Name',
      width: 150
    },
    {
      key: 'age',
      header: 'Age in years',
    },
    {
      key: 'color',
      header: 'Color'
    }
  ]
export const SmallThead = Template.bind({});

SmallThead.args={
    data:data,
    columns:columns
}