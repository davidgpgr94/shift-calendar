import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'days-grid',
  templateUrl: './days-grid.component.html',
  styleUrls: ['./days-grid.component.scss'],
})
export class DaysGridComponent implements OnInit {

  WEEKS_TO_DISPLAY = 6;

  @Input() year: number;
  @Input() month: number;

  constructor() { }

  ngOnInit() {}


  public get startOfMonth(): moment.Moment {
    return moment(`01-${this.month + 1}-${this.year}`, 'DD-MM-YYYY');
  }

  public get endOfMonth(): moment.Moment {
    return this.startOfMonth.endOf('month');
  }

  public get daysPerWeek(): any[] {
    const weeks = [];
    const initialDay = this.startOfMonth.startOf('isoWeek');

    for (let weekNum = 0; weekNum < this.WEEKS_TO_DISPLAY; weekNum++) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        const aux = initialDay.clone();
        week.push(aux);
        initialDay.add(1, 'day');
      }
      weeks.push(week);
    }
    return weeks;
  }

}
