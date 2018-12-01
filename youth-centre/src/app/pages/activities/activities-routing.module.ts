import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActivitiesComponent } from './activities.component';

const routes: Routes = [
  { path: '', component: ActivitiesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ActivitiesRoutingModule {}
