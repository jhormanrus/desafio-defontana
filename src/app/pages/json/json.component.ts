import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Test } from 'src/app/models/test.model';
import { DefontanaService } from 'src/app/services/defontana.service';
import ObjArrToTree from 'src/utils/objArrToTree';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styles: [`
    .fix  .ngx-json-viewer {
      overflow: auto !important;
    }
  `]
})
export class JsonComponent implements OnInit {

  testData: Test[] = []

  constructor(private sDefontana: DefontanaService) { }

  ngOnInit(): void {
    //* Request test data
    this.sDefontana.readTest().pipe(take(1)).subscribe(response => {
      this.testData = ObjArrToTree(response.sort((a, b) => +a.ID - +b.ID), 'Parent')
    })
  }

}
