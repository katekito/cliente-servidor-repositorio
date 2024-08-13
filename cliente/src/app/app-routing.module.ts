/* ARCHIVO RUTEO */ 
/*  LOS COMPONENTES SE RENDERIZARAN EN app.component.html*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* componentes */ 
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

/*primera ruta configurada */ 
/*cuando la ruta esta vacia se renderisa el componente ListarProductosComponent *//* /cuando la ruta esta en crear-productos se renderiza el componente */
/*se usara la misma componente ya que los temas son parecidos, se le agregara una id ya que se le pasara un producto */

const routes: Routes = [ /* CONFIGURACION DE RUTAS */
  { path: '', component: ListarProductosComponent },
  {path: 'crear-producto',component: CrearProductoComponent },
  {path: 'editar-producto/:id',component: CrearProductoComponent },
  /*este path entrega una ruta inexistente hace que lo redirija a la ruta raiz, el pathMatch con full hace que lea toda la ruta */
  /*esta linea tiene que estar en el fondo de todas las rutas(no se el porque) */
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
