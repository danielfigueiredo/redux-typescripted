import {
  IRemoveTodoAction,
  ITodoActions,
  ITodoActionTypes,
  ITodoState,
  IUpdateTodoAction,
} from './todo.types';
import { Reducer } from 'redux';
import { ensureNever } from '../utils/typescript.utils';

export const initialTodoState: ITodoState = {
  list: [],
};

const removeTodo = (state: ITodoState, action: IRemoveTodoAction): ITodoState => {
  const newTodoList = [ ...state.list ];
  newTodoList.splice(action.payload, 1);
  return { list: newTodoList };
};

const updateTodo = (state: ITodoState, action: IUpdateTodoAction): ITodoState => {
  const newTodoList = [ ...state.list ];
  newTodoList.splice(action.payload.index, 1, { text: action.payload.text, isCompleted: action.payload.isCompleted });
  return { list: newTodoList };
};

export const todoReducer: Reducer<ITodoState, ITodoActions> = (state = initialTodoState, action) => {
  switch(action.type) {
    case ITodoActionTypes.ADD_TODO:
      return { list: [ ...state.list, { text: action.payload, isCompleted: false } ] };
    case ITodoActionTypes.REMOVE_TODO:
      return removeTodo(state, action);
    case ITodoActionTypes.UPDATE_TODO:
      return updateTodo(state, action);
    default:
      ensureNever(action);
      return state;
  }
};
