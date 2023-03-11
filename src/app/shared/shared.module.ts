import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdModule } from './antd.module';
import { BaseComponent } from './components/base/base.component';



@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    AntdModule
  ],
  exports: [
    AntdModule
  ]
})
export class SharedModule { }
