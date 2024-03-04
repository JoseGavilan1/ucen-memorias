import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.scss'
})

export class TablaUsuariosComponent {
  columnas: string[] = ['id', 'nombre de proyecto', 'carrera', 'curso actual','periodo', 'area de investigacion','estado'];

  datos: Articulo[] =
  [new Articulo(1, 'Proyecto 1', 'ICCI','PT1','01/2024','ia','listo'),
  new Articulo(2, 'manzanas', 'ICI','PT1','01/2024','ia','listo'),
  new Articulo(3, 'naranjas', 'ICCI','PT1','01/2024','ia','listo'),

  new Articulo(3, 'naranjas', 'ICCI','PT1','01/2024','ia','listo'),];

  articuloselect: Articulo = new Articulo(0, "", "","","","","");

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(new Articulo(this.articuloselect.id, this.articuloselect.nombre_proyecto, this.articuloselect.carrera,
      this.articuloselect.curso,this.articuloselect.periodo, this.articuloselect.area_investigacion, this.articuloselect.estado));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo(0, "", "","","","","");
  }
}

export class Articulo {
  constructor(public id: number, public nombre_proyecto: string, public carrera: string, public curso: string, public periodo: string,
    public area_investigacion: string, public estado: string) {
  }
}
