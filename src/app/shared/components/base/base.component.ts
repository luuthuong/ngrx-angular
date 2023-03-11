import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnDestroy {
  protected ngUnsubcribe$ = new Subject<void>();
  ngOnDestroy(): void {
    this.ngUnsubcribe$.complete();
    this.ngUnsubcribe$.next();
  }
}
