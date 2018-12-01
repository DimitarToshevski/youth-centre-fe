import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './app-layout/header/header.module';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { NewsModule } from './pages/news/news.module';
import { ActivitiesModule } from './pages/activities/activities.module';
import { EventsModule } from './pages/events/events.module';
import { TeamModule } from './pages/team/team.module';
import { ContactModule } from './pages/contact/contact.module';

import { HeaderComponent } from './app-layout/header/header.component';
import { FooterComponent } from './app-layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    AboutModule,
    NewsModule,
    ActivitiesModule,
    EventsModule,
    TeamModule,
    ContactModule
  ],
  providers: [RouterOutlet],
  bootstrap: [AppComponent]
})
export class AppModule { }
