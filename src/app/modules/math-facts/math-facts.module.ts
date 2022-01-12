import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathFactsRoutingModule } from './math-facts-routing.module';
import { FactsContainerComponent } from './pages/facts-container/facts-container.component';
import { EvenFactsComponent } from './components/even-facts/even-facts.component';
import { OddFactsComponent } from './components/odd-facts/odd-facts.component';
import { CurrentFactComponent } from './components/current-fact/current-fact.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    FactsContainerComponent,
    EvenFactsComponent,
    OddFactsComponent,
    CurrentFactComponent
  ],
  imports: [
    CommonModule,
    MathFactsRoutingModule,
    HttpClientModule
  ]
})
export class MathFactsModule { }
