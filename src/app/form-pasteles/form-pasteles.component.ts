import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../material-module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-pasteles',
  standalone: true,
  imports: [MaterialModule, MatInputModule, FormsModule, ReactiveFormsModule, ReactiveFormsModule, FormsModule,],
  templateUrl: './form-pasteles.component.html',
  styleUrl: './form-pasteles.component.css'
})
export class FormPastelesComponent implements OnInit {

  nombre: string = '';
  tipo: string = '';
  sabor: string = '';
  tamano: string = '';
  ingredientes: string = '';
  descripcion: string = '';
  precio: number = 0;
  stock: number = 0;
  fecha: string = '';
  peso: string = '';
tama: any;

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    console.log("Datos del formulario:");
    console.log("Nombre del pastel:", this.nombre);
    console.log("Tipo de pastel:", this.tipo);
    console.log("Sabor del pastel:", this.sabor);
    console.log("Tamaño del pastel:", this.tamano);
    console.log("Ingredientes:", this.ingredientes);
    console.log("Descripción:", this.descripcion);
    console.log("Precio:", this.precio);
    console.log("Stock disponible:", this.stock);
    console.log("Fecha de Vencimiento:", this.fecha);
    console.log("Peso del Pastel:", this.peso);
  }
}
