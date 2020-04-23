import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShiftsPage } from './shifts.page';

import { CommonModule } from '../../common/common.module';

@NgModule({
  imports: [
    IonicModule,
    AngularCommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ShiftsPage }]),
    CommonModule
  ],
  declarations: [ShiftsPage]
})
export class ShiftsPageModule {}
