import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddTeamComponent} from './add-team/add-team.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PouleComponent} from './poule3/poule.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {CardModule} from "primeng/card";
import { Poule4Component } from './poule4/poule4.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    ButtonModule,
    RippleModule,
    InputTextModule,
    InputNumberModule,
    CardModule
  ],
  declarations: [
    AppComponent,AddTeamComponent, PouleComponent, Poule4Component
  ],

  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
