import { createReducer, on } from "@ngrx/store";
import { TodoStatusEnum } from "../../enums/todo-status.enum";
import { ITodo } from "../../interfaces/todo.interface";
import { TodoActions } from "../actions/todo.action";

export interface State{
  ids: string[];
  query: string;
}

export const initTodo: ITodo[] = [
  {
    id: 0,
    title: "Buy groceries",
    description: "Milk, eggs, bread, and cheese",
    status: TodoStatusEnum.Todo,
  },
  {
    id: 1,
    title: "Finish project",
    description: "Complete all remaining tasks for the project",
    status: TodoStatusEnum.Completed
  },
  {
    id: 2,
    title: "Call mom",
    description: "Check in and see how she's doing",
    status: TodoStatusEnum.Todo
  },
  {
    id: 3,
    title: "Go for a run",
    description: "Jog for 30 minutes around the park",
    status: TodoStatusEnum.Inprogress
  },
  {
    id:4,
    title: "Plan vacation",
    description: "Research destinations and book flights",
    status: TodoStatusEnum.Todo ,
  }
]

export const todoReducer = createReducer(
  initTodo,
  on(
    TodoActions.add,
    (state,{todo}) =>(
    [
      ...state,
      todo
    ])
  ),
  on(
    TodoActions.update,
    (state, {id, todo}) =>{
      const item = state.find(x => x.id === id);
      if(!!item){
        item.description = todo.description;
        item.title = todo.title;
        item.status = todo.status;
      }
      return state;
    }
  ),
  on(
    TodoActions.delete,
    (state, {id}) =>{
      const index = state.findIndex(x => x.id === id);
      if(index >  -1)
        state.splice(index, 1);
      return state;
    }
  )
)
