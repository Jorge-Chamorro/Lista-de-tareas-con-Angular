import { Component, OnInit } from '@angular/core';
//importo el servicio y en el constructor tengo que declarar que recibira como parametro 
//un objeto "tareasService" que es del tipo "TareasService"
import { TareasService } from '../../service/tareas.service';

import { Task } from '../../task'; // tengo que importar la interface para poder usarla

// ***************************************quede en 58 minutos
@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tareas : Task [] = [];

  constructor(
    private tareasService:TareasService,
  ) { }

  ngOnInit(): void {
   this.tareas = this.tareasService.getTareas();
  }

}
