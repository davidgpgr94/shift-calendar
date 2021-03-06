import { Component } from '@angular/core';

import { getWeekDaysForCurrentLang } from '../../../shared';

@Component({
  selector: 'days-head',
  templateUrl: './days-head.component.html',
  styleUrls: ['./days-head.component.scss'],
})
export class DaysHeadComponent {

  weekDays: string[];

  constructor() {
    const days = getWeekDaysForCurrentLang();
    days.push(days[0]);
    this.weekDays = days.slice(1);
  }

}
