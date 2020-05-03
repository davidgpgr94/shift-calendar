import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  currentYear: number;
  currentMonth: number;

  constructor(private sharedDataService: SharedDataService, private router: Router) {}

  ngOnInit() {
    this.sharedDataService.currentYearMonth.subscribe(yearMonth => {
      [this.currentYear, this.currentMonth] = yearMonth;
    });
  }

  onAddShift() {
    this.router.navigate([`/day-details/01-${this.currentMonth + 1}-${this.currentYear}`]);
  }

}
