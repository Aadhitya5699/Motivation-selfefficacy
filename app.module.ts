// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, QuestionnaireComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
