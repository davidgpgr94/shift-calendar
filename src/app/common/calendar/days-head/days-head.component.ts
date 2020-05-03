import { Component } from '@angular/core';

import { GlobalizeService } from '../../../services';

@Component({
  selector: 'days-head',
  templateUrl: './days-head.component.html',
  styleUrls: ['./days-head.component.scss'],
})
export class DaysHeadComponent {

  weekDays: string[];

  constructor(private globalize: GlobalizeService) {
    const days = this.globalize.getWeekDaysForCurrentLang();
    days.push(days[0]);
    this.weekDays = days.slice(1);
  }

}
