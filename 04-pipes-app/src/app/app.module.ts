import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

// Cambiar el locale de la app
import localES from "@angular/common/locales/es-AR";
import localFR from "@angular/common/locales/fr";

import { registerLocaleData } from "@angular/common";

registerLocaleData(localES)
registerLocaleData(localFR)



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    SalesModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue:"es-AR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
