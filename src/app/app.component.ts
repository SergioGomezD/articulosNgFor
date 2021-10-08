import { Component } from '@angular/core';
import { Articulo } from './articulo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Listado de Articulos';
  codigo:number = 0;
  descripcion:string = '';
  precio:number = 0;
  articuloSave:number=0;


  articulos:Articulo[] = [new Articulo(1,'Jiménez',0)];

  agregarArticulo(){
    let articulo1=new Articulo(this.codigo, this.descripcion, this.precio);
    this.articulos.push(articulo1);
  }
  modificarArticulo(){
    this.articulos[this.articuloSave]= new Articulo(this.codigo, this.descripcion, this.precio);
  }
  eliminarArticulo(art:number){
    this.articulos.splice(art,1);
    console.log(art);

  }
  guardarArticulo(art:number){
    const codigoF = document.getElementById("codigoI");
    const descripcionF = document.getElementById("descripcionI");
    const precioF = document.getElementById("precioI");
    this.articuloSave=art;
    console.log(this.articuloSave);
    //codigoF.=this.articulos[this.articuloSave].codigo;
    //this.articulos[this.articuloSave].descripcion
    //this.articulos[this.articuloSave].precio

  }
}
