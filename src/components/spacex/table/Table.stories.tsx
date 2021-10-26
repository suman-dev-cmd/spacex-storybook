import React from "react";
import {Meta,Story} from '@storybook/react';
import Table from "./Table";
import withReduxToolKitStore from "../../decorators/withReduxToolKitStore";
export default{
  title:'Flight/Table',
  component:Table,
  decorators:[(Story)=>withReduxToolKitStore({Story})]
} as Meta;

const Template:Story =()=><Table/>
export const TableComponent = Template.bind({});