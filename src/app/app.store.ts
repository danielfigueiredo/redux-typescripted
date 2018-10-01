import { createStore, Store } from 'redux';

import { createRootReducer } from './app.reducer';
import { IState } from './app.types';

export const store: Store<IState> = createStore(
  createRootReducer(),
);
