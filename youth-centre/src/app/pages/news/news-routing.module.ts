import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NewsRoutingModule {}
