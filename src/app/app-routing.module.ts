import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'day-details',
    loadChildren: () => import('./day-details/day-details.module').then( m => m.DayDetailsPageModule)
  },
  {
    path: 'add-shift',
    loadChildren: () => import('./add-shift/add-shift.module').then( m => m.AddShiftPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
