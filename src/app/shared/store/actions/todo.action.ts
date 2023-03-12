import { createAction, props } from "@ngrx/store";
import { TodoStatusEnum } from "../../enums/todo-status.enum";
import { ITodo, ITodoAction, ITodoUpdate } from "../../interfaces/todo.interface";
import { TodoActionConstant } from "./todo-action.constant";

export const TodoActions: ITodoAction = {
  add: createAction(TodoActionConstant.Add, props<{ todo: ITodo; }>()),
  update: createAction(TodoActionConstant.Update, props<{ id: number; todo: ITodoUpdate; }>()),
  changeStatus: createAction(TodoActionConstant.ChangeStatus, props<{ status: TodoStatusEnum; id: number; }>()),
  delete: createAction(TodoActionConstant.Delete, props<{ id: number; }>()),
}
