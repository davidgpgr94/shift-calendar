import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-day-details',
  templateUrl: './day-details.page.html',
  styleUrls: ['./day-details.page.scss'],
})
export class DayDetailsPage implements OnInit {

  day: moment.Moment;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.day = moment(this.router.snapshot.paramMap.get('date'), 'DD-MM-YYYY');
  }


  public get defaultBackHref(): string {
    return `/tabs/shifts?month=${this.day.month() + 1}&year=${this.day.year()}`;
  }

}
