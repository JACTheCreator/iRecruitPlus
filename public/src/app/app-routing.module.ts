import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent} from './dashboard/dashboard.component'
import { LandingPageComponent} from './landing-page/landing-page.component'
import { RankingPageComponent } from './ranking-page/ranking-page.component'

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'landing-page', component: LandingPageComponent },
	{ path: 'ranking-dashboard', component: RankingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
