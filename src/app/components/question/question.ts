import { Component, Input } from '@angular/core';
import { Iquestion } from '../models/iquestion';

@Component({
  selector: 'app-question',
  templateUrl: './question.html',
  styleUrls: ['./question.scss']
})
export class QuestionComponent {
  @Input()quest: Iquestion

  openquest = false


}
