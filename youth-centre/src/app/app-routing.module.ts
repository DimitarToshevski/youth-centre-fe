import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: HomeComponent},
  { path: 'news', component: HomeComponent},
  { path: 'activities', component: HomeComponent},
  { path: 'events', component: HomeComponent},
  { path: 'team', component: HomeComponent},
  { path: 'contact', component: HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
