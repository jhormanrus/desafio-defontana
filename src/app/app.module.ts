import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './pages/list/list.component';
import { NativeTableComponent } from './pages/native-table/native-table.component';
import { NgxDatatableComponent } from './pages/ngx-datatable/ngx-datatable.component';
import { JsonComponent } from './pages/json/json.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NativeTableComponent,
    NgxDatatableComponent,
    JsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
