import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule'},
  { path: 'news', loadChildren: './pages/news/news.module#NewsModule'},
  { path: 'activities', loadChildren: './pages/activities/activities.module#ActivitiesModule'},
  { path: 'events', loadChildren: './pages/events/events.module#EventsModule'},
  { path: 'team', loadChildren: './pages/team/team.module#TeamModule'},
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactModule'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
