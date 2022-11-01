import { Component, OnInit } from '@angular/core';
//importo la interface
import {Task} from '../task';
// importo el array donde estan las tareas, o sea el mock
import {TASK} from '../mock-tasks';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tareas : Task [] = TASK;

  constructor() { }

  ngOnInit(): void {
  }

}
