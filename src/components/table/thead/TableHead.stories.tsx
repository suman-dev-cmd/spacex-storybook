import React from "react";
import { TableHead } from './TableHead';
import {ComponentMeta,ComponentStory} from '@storybook/react';

export default {
    title:'Spacex/Thead',
    component:TableHead,
    argsType:{
        backgroundColor:{contorl:'color'}
    }
} as ComponentMeta<typeof TableHead>

const Template:ComponentStory<typeof TableHead> =(args)=><TableHead {...args}/>

export const SmallThead = Template.bind({});

SmallThead.args={
    backgroundColor:'white',
    columns:[
        {header:'No.',width:100},
        {header:'Launched(UTC)',width:100},
        {header:'Location',width:100},
        {header:'Mission',width:100},
        {header:'Orbit',width:100},
        {header:'Launch Status',width:100},
        {header:'Rocket',width:100},
    ]
}
