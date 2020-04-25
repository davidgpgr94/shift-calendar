import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CalendarComponent } from './calendar/calendar.component';
import { DaysHeadComponent } from './calendar/days-head/days-head.component';
import { YearMonthPickerComponent } from './year-month-picker/year-month-picker.component';


@NgModule({
  declarations: [
    CalendarComponent,
    DaysHeadComponent,
    YearMonthPickerComponent
  ],
  imports: [
    AngularCommonModule,
    IonicModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CommonModule { }
