import { Injectable } from '@angular/core';
//importo la interface
import {Task} from '../task';
// importo el array donde estan las tareas, o sea el mock
import {TASK} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})

export class TareasService {

  constructor() { }
  

  // se define un metodo y lo que el metodo va a devolver es del tipo Task (la interface)
  getTareas() : Task [] {
      return TASK; //Devuelve el archivo mock con todas las tareas
}

}
