import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'tab-shifts',
  templateUrl: 'shifts.page.html',
  styleUrls: ['shifts.page.scss']
})
export class ShiftsPage implements OnInit {

  month: number;
  year: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      if (params.has('month') && params.has('year')) {
        const aux = moment(`01-${params.get('month')}-${params.get('year')}`, 'DD-MM-YYYY');
        this.month = aux.month();
        this.year = aux.year();
      }
    });
  }

  onDaySelected(day: moment.Moment) {
    console.log(day.format('DD-MM-YYYY'));
    this.router.navigate([`/day-details/${day.format('DD-MM-YYYY')}`]);
  }

}
