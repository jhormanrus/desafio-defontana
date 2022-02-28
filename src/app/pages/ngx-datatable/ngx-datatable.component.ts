import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { Test } from 'src/app/models/test.model';
import { DefontanaService } from 'src/app/services/defontana.service';

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styles: [`
    .ngx-datatable {
      box-shadow: none;
      height: 460px;
    }
  `]
})
export class NgxDatatableComponent implements OnInit {

  testData: Test[] = []

  constructor(private sDefontana: DefontanaService) { }

  ngOnInit(): void {
    //* Request test data
    this.sDefontana.readTest().pipe(take(1)).pipe(map(response => {
      for(const item of response) {
        item.treeStatus = response.find(v => v.Parent === item.ID)? 'expanded' : 'disabled'
      }
      return response
    })).subscribe(response => {
      this.testData = response
    })
  }

  onTreeAction(event: any) {
    const row = event.row
    row.treeStatus = row.treeStatus === 'collapsed' ? 'expanded' : 'collapsed'
    this.testData = [...this.testData]
  }
}
