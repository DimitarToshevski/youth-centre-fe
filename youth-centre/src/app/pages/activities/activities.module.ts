import { NgModule } from '@angular/core';
import { ActivitiesComponent } from './activities.component';
import { CommonModule } from '@angular/common';
import { ActivitiesRoutingModule } from './activities-routing.module';

@NgModule({
  declarations: [ActivitiesComponent],
  imports: [CommonModule, ActivitiesRoutingModule]
})

export class ActivitiesModule {}
