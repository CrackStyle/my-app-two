import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor (private router: Router){}

  changeList: boolean = true
  changeTable: boolean = false

  changeTagList(url: string){
    this.router.navigate([url]);
    this.changeList = !this.changeList;
    this.changeTable = !this.changeList;
  }

  changeTagTable(url: string){
    this.router.navigate([url])
    this.changeList = !this.changeList;
    this.changeTable = !this.changeList;
  }

}
