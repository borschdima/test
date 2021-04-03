import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { defaultState as appDefaultState } from '../reducers/app';

import reducer from '../reducers';

const initialState = {
  app: appDefaultState,
};

// eslint-disable-next-line
export const store = createStore(
  reducer(),
  initialState as any,
  composeWithDevTools(),
);
