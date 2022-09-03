import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApidisplayComponent } from './apidisplay/apidisplay.component';
import { HttpClientModule } from '@angular/common/http';
import { Apidisplay2Component } from './testComponents/apidisplay2/apidisplay2.component';
import { StatusPipe } from './pipes/status.pipe';
import { Apidisplay3Component } from './testComponents/apidisplay3/apidisplay3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterpolationPracticeComponent } from './interpolation-practice/interpolation-practice.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { SwithCaseComponent } from './swith-case/swith-case.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TestComponent } from './products/test/test.component';
import { Task1Component } from './task/task1/task1.component';
import { Pipe1Pipe } from './pipes/pipe1.pipe';
import { TestpipeComponent } from './testpipe/testpipe.component';
import { SearchPipe } from './pipes/search.pipe';
import { Pipe2Pipe } from './pipes/pipe2.pipe';
import { AngularEventsComponent } from './angular-events/angular-events.component';
import { FindduplicatearrayComponent } from './findduplicatearray/findduplicatearray.component';
import { LocalcrudComponent } from './localStorageCrud/localcrud/localcrud.component';
import { OfficeregisterComponent } from './vstask/officeregister/officeregister.component';
import { OfficeserviceService } from './vstask/officeservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ApidisplayComponent,
    Apidisplay2Component,
    StatusPipe,
    Apidisplay3Component,
    InterpolationPracticeComponent,
    TemplateRefComponent,
    EventBindingComponent,
    SwithCaseComponent,

    TvComponent,
    MobileComponent,
    ProductsComponent,
    LaptopComponent,
    TestComponent,
    Task1Component,
    Pipe1Pipe,
    TestpipeComponent,
    SearchPipe,
    Pipe2Pipe,
    AngularEventsComponent,
    FindduplicatearrayComponent,
    LocalcrudComponent,
    OfficeregisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [OfficeserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
