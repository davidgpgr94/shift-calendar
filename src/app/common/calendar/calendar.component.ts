import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as moment from 'moment';

import { GlobalizeService } from '../../services/globalize.service';

@Component({
  selector: 'my-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  @Input() initialMonth: number;
  @Input() initialYear: number;

  @Output() daySelected = new EventEmitter<moment.Moment>();

  currentMonth: number; // 0 - Jan, 11 - December
  currentYear: number;

  auxDate: moment.Moment;

  constructor(private globalize: GlobalizeService) { }

  ngOnInit() {
    const today = moment(moment.now());
    this.currentMonth = this.initialMonth || today.month();
    this.currentYear = this.initialYear || today.year();
    this.auxDate = moment(`01-${this.currentMonth + 1}-${this.currentYear}`, 'DD-MM-YYYY');
  }

  nextMonth() {
    this.auxDate.add(1, 'month');
    this.currentMonth = this.auxDate.month();
    this.currentYear = this.auxDate.year();
  }

  prevMonth() {
    this.auxDate.subtract(1, 'month');
    this.currentMonth = this.auxDate.month();
    this.currentYear = this.auxDate.year();
  }


  public get currentTitle(): string {
    return `${this.globalize.getMonthNameForCurrentLang(this.currentMonth)} ${this.currentYear}`;
  }

  public onDaySelected(day: moment.Moment) {
    this.daySelected.emit(day);
  }


}
