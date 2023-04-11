import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from 'src/app/components/modal.window/modal.window.component';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent {
  
  constructor(
    public dialog: MatDialog) {}

  openFirstModal(){
    this.dialog.open(ModalWindowComponent);
  }
}
