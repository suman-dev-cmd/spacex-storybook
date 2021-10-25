import React from "react";
import { TableHead } from './TableHead';
import {ComponentMeta,ComponentStory} from '@storybook/react';

export default {
    title:'Spacex/Table/Thead',
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
}
