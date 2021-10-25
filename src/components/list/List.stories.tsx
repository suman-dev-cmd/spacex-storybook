import React from "react";
import {Meta,Story} from '@storybook/react';
import List from "./List";
import withReduxToolKitStore from '../decorators/withReduxToolKitStore';

export default{
    title:'Spacex/List',
    component:List,
    decorators:[(Story)=>withReduxToolKitStore({Story})],
} as Meta;

const Template:Story =()=><List />;
export const listCat = Template.bind({});