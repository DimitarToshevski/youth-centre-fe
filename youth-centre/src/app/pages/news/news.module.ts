import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule]
})

export class NewsModule {}
