import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from 'ion2-calendar';

import { getWeekStart, getWeekDaysForCurrentLang } from '../shared';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.page.html',
  styleUrls: ['./add-shift.page.scss'],
})
export class AddShiftPage implements OnInit {

  constructor(private modal: ModalController, private route: ActivatedRoute) { }

  ngOnInit() {
    let initMonth: number, initYear: number;
    this.route.queryParamMap.subscribe(params => {
      if (params.has('month') && params.has('year')) {
        const aux = moment(`01-${params.get('month')}-${params.get('year')}`, 'DD-MM-YYYY');
        if (aux.isValid()) {
          initMonth = aux.month();
          initYear = aux.year();
        }
      }
    });

    this.openCalendarModal(initMonth, initYear);
  }

  async openCalendarModal(month: number, year: number) {
    const options: CalendarModalOptions = {
      title: '',
      pickMode: 'range',
      closeLabel: '',
      closeIcon: true,
      doneLabel: 'OK',
      weekdays: getWeekDaysForCurrentLang(),
      weekStart: getWeekStart(),
      canBackwardsSelected: true,
      showYearPicker: true
    };
    const myCalendar = await this.modal.create({
      component: CalendarModal,
      componentProps: { options }
    });
    myCalendar.present();
    myCalendar.onDidDismiss().then((x) => {
      console.log(x);
    });
  }

}
