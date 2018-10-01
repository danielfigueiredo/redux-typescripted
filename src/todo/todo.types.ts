import { PayloadAction } from '../app/app.types';

export type ITodo = {
  text: string;
  isCompleted: boolean;
};

export type ITodoState = {
  list: ITodo[];
};

export enum ITodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  // CLEAR_TODO = 'CLEAR_TODO',
}

export type IAddTodoAction = PayloadAction<ITodoActionTypes.ADD_TODO, string>;

export type IRemoveTodoAction = PayloadAction<ITodoActionTypes.REMOVE_TODO, number>;

export type IUpdateTodoTextActionPayload = ITodo & { index: number };

export type IUpdateTodoAction = PayloadAction<ITodoActionTypes.UPDATE_TODO, IUpdateTodoTextActionPayload>;

// export type IClearTodosAction = Action<ITodoActionTypes.CLEAR_TODO>;

export type ITodoActions = IAddTodoAction | IRemoveTodoAction | IUpdateTodoAction; // | IClearTodosAction;
