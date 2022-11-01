import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../task';
import { TASK } from '../mock-tasks';

@Component({
  selector: 'app-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: ['./tarea-card.component.css']
})
export class TareaCardComponent implements OnInit {

  @Input() tarea : Task = TASK[0];
  constructor() { }

  ngOnInit(): void {
  }

}
