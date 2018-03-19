
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillansComponent } from './villans/villans.component';
import { DashboardComponent } from './dash/dash.component';
import { VillanDetailComponent } from './villan-detail/villan-detail.component';

const routes: Routes = [
  { path: 'villans', component: VillansComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: VillanDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

