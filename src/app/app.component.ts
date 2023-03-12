import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BaseComponent } from './shared/components/base/base.component';
import { TodoStatusEnum } from './shared/enums/todo-status.enum';
import { ITodo } from './shared/interfaces/todo.interface';
import { TodoActionConstant } from './shared/store/actions/todo-action.constant';
import { TodoActions } from './shared/store/actions/todo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  todo$ = this.store.select(state => state.todo);
  readonly optionTodo: {value: TodoStatusEnum | -1, name: string}[] =[
    {
      name: 'In Progress',
      value: TodoStatusEnum.Inprogress
    },
    {
      name: 'Completed',
      value: TodoStatusEnum.Completed
    },
    {
      name: 'Todo',
      value: TodoStatusEnum.Todo
    }
  ]
  readonly optionFilter: {value: TodoStatusEnum | -1, name: string}[] = [
    {
      name: 'All',
      value: -1
    },
    ...this.optionTodo
  ];
  filtered = -1;
  loading = false;
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
  ];

  formTodo !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<{todo: ITodo[]}>
  ){
    super();
    this._initFormTodo();
  }
  ngOnInit(): void {
    this.todo$.subscribe(res =>{
      console.log(res)
    })
  }

  filterOptionChange(valueChange: TodoStatusEnum){
  }

  private _initFormTodo(){
    this.formTodo = this.fb.group({
      title: ['', [Validators.required]],
      desciption: [''],
      type: [TodoStatusEnum.Todo, [Validators.required]]
    })
  }
  onSubmitForm(){
    console.log(this.formTodo.value);
  }
}
