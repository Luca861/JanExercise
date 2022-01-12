import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathFactsModule } from './modules/math-facts/math-facts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathFactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
