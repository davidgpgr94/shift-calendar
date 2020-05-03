import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private calendarCurrentYearMonthSource = new BehaviorSubject([moment(moment.now()).year(), moment(moment.now()).month()]);
  currentYearMonth = this.calendarCurrentYearMonthSource.asObservable();


  constructor() { }

  changeCalendarCurrentYear(year: number) {
    const lastMonthValue = this.calendarCurrentYearMonthSource.getValue()[1];
    this.calendarCurrentYearMonthSource.next([year, lastMonthValue]);
  }

  changeCalendarCurrentMonth(month: number) {
    const lastYearValue = this.calendarCurrentYearMonthSource.getValue()[0];
    this.calendarCurrentYearMonthSource.next([lastYearValue, month]);
  }

  changeCalendarCurrentYearMonth(year: number, month: number) {
    this.calendarCurrentYearMonthSource.next([year, month]);
  }
}
