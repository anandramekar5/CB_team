import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonmaterialModule } from './commonmaterial/commonmaterial.module';
import { CbteamComponent } from './cbteam/cbteam.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpertiseFormComponent } from './expertise/expertise-form/expertise-form.component';

@NgModule({
  declarations: [AppComponent, CbteamComponent, ExpertiseFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonmaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
