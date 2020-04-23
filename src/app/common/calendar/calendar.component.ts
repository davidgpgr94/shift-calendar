import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  @Input() initialDate: Date;

  currentDate: Date;
  maxYear: number;

  constructor() { }

  ngOnInit() {
    this.currentDate = this.initialDate || moment(moment.now()).toDate();
    this.maxYear = moment(this.currentDate).add(3, 'years').year();
  }

  dateChanged(date: string) {
    const dateSelected = moment(date);
    this.currentDate = moment(`${dateSelected.date()}-${dateSelected.month() + 1}-${dateSelected.year()}`, 'DD-MM-YYYY').toDate();
  }

  nextMonth() {
    const mCurrentDate = moment(this.currentDate);
    mCurrentDate.add(1, 'month');
    this.currentDate = mCurrentDate.toDate();
  }

  prevMonth() {
    const mCurrentDate = moment(this.currentDate);
    mCurrentDate.subtract(1, 'month');
    this.currentDate = mCurrentDate.toDate();
  }

}
