import { ActionCreator, props } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { TodoStatusEnum } from "../enums/todo-status.enum";

export interface ITodo extends ITodoUpdate{
  id: number;
}

export interface ITodoUpdate{
  title: string;
  description: string;
  status: TodoStatusEnum;
}

export interface ITodoAction{
  add: ActionCreator<string, (props: {todo: ITodo}) => {todo: ITodo} & TypedAction<string>>,
  update: ActionCreator<string, (props: {id: number, todo: ITodoUpdate}) => {
    id: number,
    todo: ITodoUpdate
  } & TypedAction<string>>,
  delete: ActionCreator<string, (props: {id: number}) => {id: number} & TypedAction<string>>,
  changeStatus: ActionCreator<string, (props: {id: number, status: TodoStatusEnum}) => {id: number, status: TodoStatusEnum} &TypedAction<string>>
}
