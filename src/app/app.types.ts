import {
  Action,
  ReducersMapObject,
} from 'redux';

export type IState = {
  todo: import('../todo/todo.types').ITodoState;
};

export type IReducers = ReducersMapObject<IState>;

export type ILoadedState = Partial<IState>;

export type ILoadedReducers = Partial<IReducers>;

export type MetaAction<Type, Meta> = Action<Type> & {
  meta?: Meta;
};

export type PayloadAction<Type, Payload, Meta = void> = MetaAction<Type, Meta> & {
  readonly payload: Payload;
};

