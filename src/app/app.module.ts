import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { MockdataComponent } from './components/mockdata/mockdata.component';
import { LazyscrollDirective } from './directives/lazyscroll.directive';
import { ItemlistComponent } from './components/itemlist/itemlist.component';
import { LazyloadDirective } from './directives/lazyload.directive';

@NgModule({
  declarations: [
    AppComponent,
    MockdataComponent,
    LazyscrollDirective,
    ItemlistComponent,
    LazyloadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
