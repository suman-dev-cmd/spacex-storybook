import React from 'react';
import {Meta,Story} from '@storybook/react';
import {TableColumn} from './TableColumn';
import withReduxToolKitStore from '../../../decorators/withReduxToolKitStore';

export default {
    title:'Flight/Table/TableHead',
    component:TableColumn,
    decorators:[(Story)=>withReduxToolKitStore({Story})]
} as Meta;

const Template:Story =()=><TableColumn />

export const tableHeadColumn = Template.bind({});