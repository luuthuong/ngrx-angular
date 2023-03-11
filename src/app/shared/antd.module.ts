import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzGridModule
  ],
  exports:[
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzGridModule
  ]
})
export class AntdModule { }
