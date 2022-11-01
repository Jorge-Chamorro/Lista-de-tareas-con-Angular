import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BotonComponent } from './components/boton/boton.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { TareaCardComponent } from './components/tarea-card/tarea-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TareaComponent,
    TareaCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
