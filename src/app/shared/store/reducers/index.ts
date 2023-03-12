import { ActionReducer, combineReducers, compose } from '@ngrx/store';
import * as fromTodo from './todo.reducer';
import {storeFreeze} from 'ngrx-store-freeze'

export * from './todo.reducer';


export interface State{
  todo: fromTodo.State
}

const reducers = {
  todo: fromTodo.todoReducer
};


const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
// const productReducer: ActionReducer<State> = combineReducers(reducers)
