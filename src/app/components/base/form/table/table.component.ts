import { Component, OnInit } from '@angular/core';
import { Ipublikation } from 'src/app/components/models/publikation';
import { publikations as data } from 'src/app/components/shared/publications';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  publikation: Ipublikation[] = data;
  p: number = 1;
  opensearch = false;
  searchText = '';

  onClick(){
    this.opensearch = !this.opensearch
  }

}
