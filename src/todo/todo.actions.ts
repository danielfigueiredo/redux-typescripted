import {
  IAddTodoAction,
  IRemoveTodoAction,
  ITodo,
  ITodoActionTypes,
  IUpdateTodoAction,
} from './todo.types';
import { createPayloadAction } from '../app/app.actions';

export const addTodoAction = (text: string): IAddTodoAction => createPayloadAction(ITodoActionTypes.ADD_TODO, text);

export const updateTodoAction = (index: number, todo: ITodo): IUpdateTodoAction => createPayloadAction(
  ITodoActionTypes.UPDATE_TODO,
  { index, ...todo }
);

export const removeTodoAction = (index: number): IRemoveTodoAction => createPayloadAction(
  ITodoActionTypes.REMOVE_TODO,
  index
);
