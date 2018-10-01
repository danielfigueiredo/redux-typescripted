import { combineReducers, Reducer, Store } from 'redux';

import {
  ILoadedReducers,
  ILoadedState,
} from './app.types';
import { todoReducer } from '../todo/todo.reducer';

let asyncReducers: ILoadedReducers = {};

export const createRootReducer = (): Reducer<ILoadedState> => {
  const initialReducers: ILoadedReducers = {
    todo: todoReducer,
    ...asyncReducers,
  };
  return combineReducers(initialReducers);
};

export const injectReducer = (store: Store<ILoadedState>, reducers: ILoadedReducers) => {
  asyncReducers = { ...asyncReducers, ...reducers };
  store.replaceReducer(createRootReducer())
};
