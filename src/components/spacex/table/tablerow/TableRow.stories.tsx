import React from "react";
import {Meta,Story} from '@storybook/react';
import TableRow from "./TableRow";
import withReduxToolKitStore from '../../../decorators/withReduxToolKitStore';
export default {
    title:'Flight/Table/TableRows',
    component:TableRow,
    decorators:[(Story)=>withReduxToolKitStore({Story})]
} as Meta;
const Template:Story =()=><TableRow />

export const tableHeadRows= Template.bind({});