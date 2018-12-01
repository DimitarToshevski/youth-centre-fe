import { NgModule } from '@angular/core';
import { TeamComponent } from './team.component';
import { CommonModule } from '@angular/common';
import { TeamRoutingModule } from './team-routing.module';

@NgModule({
  declarations: [TeamComponent],
  imports: [CommonModule, TeamRoutingModule]
})

export class TeamModule {}
