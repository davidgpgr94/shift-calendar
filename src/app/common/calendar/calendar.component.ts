import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as moment from 'moment';

import { SharedDataService } from '../../services';
import { getMonthNameForCurrentLang } from '../../shared';

@Component({
  selector: 'my-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  @Input() initialMonth: number; // 0 - Jan, 11 - December
  @Input() initialYear: number;

  @Output() daySelected = new EventEmitter<moment.Moment>();

  currentMonth: number; // 0 - Jan, 11 - December
  currentYear: number;

  auxDate: moment.Moment;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    const today = moment(moment.now());
    this.currentMonth = this.initialMonth === undefined ? today.month() : this.initialMonth;
    this.currentYear = this.initialYear === undefined ? today.year() : this.initialYear;
    this.auxDate = moment(`01-${this.currentMonth + 1}-${this.currentYear}`, 'DD-MM-YYYY');
    this.sharedDataService.changeCalendarCurrentYearMonth(this.currentYear, this.currentMonth);
  }

  nextMonth() {
    this.auxDate.add(1, 'month');
    this.currentMonth = this.auxDate.month();
    this.currentYear = this.auxDate.year();
    this.sharedDataService.changeCalendarCurrentYearMonth(this.currentYear, this.currentMonth);
  }

  prevMonth() {
    this.auxDate.subtract(1, 'month');
    this.currentMonth = this.auxDate.month();
    this.currentYear = this.auxDate.year();
    this.sharedDataService.changeCalendarCurrentYearMonth(this.currentYear, this.currentMonth);
  }


  public get currentTitle(): string {
    return `${getMonthNameForCurrentLang(this.currentMonth)} ${this.currentYear}`;
  }

  public onDaySelected(day: moment.Moment) {
    this.daySelected.emit(day);
  }


}
