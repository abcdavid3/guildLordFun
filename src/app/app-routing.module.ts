import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LordComponent } from './lord/lord.component';
import { LordDetailComponent } from './lord-detail/lord-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'lord', component: LordComponent },
  { path: 'lord-detail/:id', component: LordDetailComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
