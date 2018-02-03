import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule,MatPaginatorModule,MatSortModule} from '@angular/material';
import { AppComponent } from "./app.component";
import "./demo/simple-counter.js";
import { Demo1Component } from "./demo1/demo1.component";
import { Demo2Component } from './demo2/demo2.component';
@NgModule({
  declarations: [AppComponent, Demo1Component, Demo2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule,MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule,MatPaginatorModule,MatSortModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
