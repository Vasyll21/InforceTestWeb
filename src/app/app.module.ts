import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlListComponent } from './components/urls/url-list/url-list.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddUrlComponent } from './components/urls/add-url/add-url.component';
import { EditUrlComponent } from './components/urls/edit-url/edit-url.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlListComponent,
    AddUrlComponent,
    EditUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
