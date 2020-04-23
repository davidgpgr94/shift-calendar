import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    CalendarComponent
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
