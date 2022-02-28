import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AppComponent {
  navData = [
    {
      title: 'Ngx-datatable',
      link: '/ngx-datatable'
    },
    {
      title: 'List',
      link: '/list'
    },
    {
      title: 'JSON',
      link: '/json'
    }
  ]
}
