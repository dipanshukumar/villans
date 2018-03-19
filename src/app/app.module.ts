import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { VillansComponent } from './villans/villans.component';
import { VillanDetailComponent } from './villan-detail/villan-detail.component';
import { VillanService } from './villan.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dash/dash.component';
import { VillanSearchComponent } from './villan-search/villan-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

  ],
  declarations: [
    AppComponent,
    VillansComponent,
    VillanDetailComponent,
    MessagesComponent,
    DashboardComponent,
    VillanSearchComponent
  ],

  providers: [
    VillanService,
    MessageService
    /* . . . */
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
