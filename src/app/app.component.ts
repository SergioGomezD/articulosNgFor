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
  articuloSave:number=100;


  articulos:Articulo[] = [new Articulo(1,'Jiménez',0)];

  agregarArticulo(){
    let articulo1=new Articulo(this.codigo, this.descripcion, this.precio);
    this.articulos.push(articulo1);
    this.codigo=0;
    this.descripcion='';
    this.precio=0;

  }
  modificarArticulo(){
    this.articulos[this.articuloSave]= new Articulo(this.codigo, this.descripcion, this.precio);
    this.codigo=0;
    this.descripcion='';
    this.precio=0;
  }


  eliminarArticulo(art:number){
    this.articulos.splice(art,1);
    console.log(art);

  }
  guardarArticulo(art:number){
    this.articuloSave=art;
    console.log(this.articuloSave);
    this.codigo=this.articulos[this.articuloSave].codigo;
    this.descripcion=this.articulos[this.articuloSave].descripcion;
    this.precio=this.articulos[this.articuloSave].precio;
  }
}
