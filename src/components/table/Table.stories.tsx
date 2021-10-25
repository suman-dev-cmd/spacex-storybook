import React from "react";
import { Table } from './Table';
import {ComponentMeta,ComponentStory} from '@storybook/react';
import { DataProp } from "./tbody/Tbody";
import { ColummnDefinationType } from "./thead/TableHead";
export default{
    title:'Spacex/Table',
    component:Table,
    argsType:{
        backgroundColor:{contorl:'color'}
    }
} as ComponentMeta<typeof Table>;
const Template:ComponentStory<typeof Table> = (args)=><Table {...args}/>
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
export const TableComponent = Template.bind({});
TableComponent.args={
    data:data,
    columns:columns
}