

/*  */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; /* Importacion de tipos de estilos de angular/forms igualandolas a VARIABLES */
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup; /* Se importa FormGrup de '@angular/forms'  */

  /*propiedad productoform se inicializa en constructor */
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) { /* para poder redireccionar al usuario desde el archivo ts */
    this.productoForm = this.fb.group({ /* grupo de elementos *//* this.productoForm llama a la variable, igualada por variable fb por inyeccion de dependencias */
      producto: ['', Validators.required], /* se modificaran los elementos en la direccion /crear-producto */
      categoria: ['', Validators.required], 
      ubicacion: ['', Validators.required], 
      precio: ['', Validators.required], 
    })   /* ESTE FORMULARIO SE CONECTA CON EL HTML de la misma carpeta */
    
  } /* clase FormBuilder manejo de formularios*/
  ngOnInit(): void {
  }


  agregarProducto(){


    const PRODUCTO: producto = { /* creacion de un producto, almacena los valores de las variables y crea un objeto */
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    console.log(PRODUCTO);
    this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!'); /* https://www.npmjs.com/package/ngx-toastr documentacion de lo que se puede hacer con esta libreria */
    this.router.navigate(['/']); /* Redirecciona a la ruta raiz a router */
  }


}
