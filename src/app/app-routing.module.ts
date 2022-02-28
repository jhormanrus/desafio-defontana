import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonComponent } from './pages/json/json.component';
import { ListComponent } from './pages/list/list.component';
import { NgxDatatableComponent } from './pages/ngx-datatable/ngx-datatable.component';

const routes: Routes = [
  { path: '', redirectTo: '/ngx-datatable', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'ngx-datatable', component: NgxDatatableComponent },
  { path: 'json', component: JsonComponent },
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
