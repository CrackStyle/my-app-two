import { Component, OnInit } from '@angular/core';
import { Ipublikation } from 'src/app/components/models/publikation';
import { publikations as data } from 'src/app/components/shared/publications';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {
  publikation: Ipublikation[] = data;
  p: number = 1;
  opensearch = false;

  constructor() {}
  
  ngOnInit (){  }

  searchText = '';
    
  onClick(){
    this.opensearch = !this.opensearch
  }

}



