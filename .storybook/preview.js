import React from 'react';
import {addDecorator} from '@storybook/react';
import Root from '../src/components/root/Root';
import { Provider } from 'react-redux';
import {store} from '../src/state/store'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story=><Root>{story()}</Root>)