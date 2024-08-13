/* MODULO RAIZ */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

/* "ReactiveFormsModule" de pagina "https://angular.dev/guide/forms/reactive-forms" */
import { ReactiveFormsModule } from '@angular/forms'; /*Modulo de ReactiveForms de algular/forms, manipular formularios complejos */
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Componentes */
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent, /* PROBLEMA no se reconoce como componente,directorio o pipe */
    ListarProductosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, /* Importacion de modulo ReactiveForms, se crea la importacion del modulo */
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
