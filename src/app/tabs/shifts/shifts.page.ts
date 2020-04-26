import { Component } from '@angular/core';

@Component({
  selector: 'tab-shifts',
  templateUrl: 'shifts.page.html',
  styleUrls: ['shifts.page.scss']
})
export class ShiftsPage {

  constructor() {}

  onDaySelected(day: moment.Moment) {
    console.log(day.format('DD-MM-YYYY'));
  }

}