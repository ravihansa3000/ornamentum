import { Directive, ElementRef, AfterViewInit, NgZone, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';

import { DataTableScrollPositionService } from '../services/data-table-scroll-position.service';

@Directive({
  selector: '[ngScrollPosition]'
})
export class ScrollPositionDirective implements AfterViewInit, OnDestroy {
  private scrollEventSubscription: Subscription;

  constructor(private el: ElementRef, private zone: NgZone, private scrollPositionService: DataTableScrollPositionService) {
  }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.scrollEventSubscription = fromEvent(this.el.nativeElement, 'scroll')
        .subscribe(() => {
          this.scrollPositionService.scrollPositionStream.next({
            scrollLeft: this.el.nativeElement.scrollLeft,
            scrollTop: this.el.nativeElement.scrollTop
          });
        });
    });
  }

  public ngOnDestroy(): void {
    if (this.scrollEventSubscription) {
      this.scrollEventSubscription.unsubscribe();
    }
  }
}
