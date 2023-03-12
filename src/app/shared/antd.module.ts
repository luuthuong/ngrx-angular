import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import {NzCardModule} from 'ng-zorro-antd/card'
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NzFormModule } from 'ng-zorro-antd/form';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzGridModule,
    NzTypographyModule,
    NzListModule,
    NzBadgeModule,
    NzCardModule,
    ScrollingModule,
    NzFormModule
  ],
  exports:[
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzGridModule,
    NzTypographyModule,
    NzListModule,
    NzBadgeModule,
    NzCardModule,
    ScrollingModule,
    NzFormModule
  ]
})
export class AntdModule { }
