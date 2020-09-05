import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';

import { AddShiftPageRoutingModule } from './add-shift-routing.module';

import { AddShiftPage } from './add-shift.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddShiftPageRoutingModule,
    CalendarModule
  ],
  declarations: [AddShiftPage]
})
export class AddShiftPageModule {}
