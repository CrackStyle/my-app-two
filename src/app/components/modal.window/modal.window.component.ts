import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal.window.component.html',
  styleUrls: ['./modal.window.component.scss']
})
export class ModalWindowComponent {

  constructor(){}

  showFirstModal = true;
  showSecondModal = false;
  showSearchComponent = false

  closeFirstModal() {
    this.showFirstModal = false;
  }
  openSecondModal() {
    this.showSecondModal = true;
    this.showFirstModal = false;
  }
  closeSecondModal() {
    this.showSecondModal = false;
    this.showFirstModal = true;
  }
}
