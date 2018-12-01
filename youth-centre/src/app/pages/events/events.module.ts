import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [EventsComponent],
  imports: [CommonModule, EventsRoutingModule]
})

export class EventsModule {}
