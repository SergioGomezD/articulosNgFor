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
  art:number=0;


  articulos:Articulo[] = [new Articulo(1,'Jiménez',0)];

  agregarArticulo(){
    let articulo1=new Articulo(this.codigo, this.descripcion, this.precio);
    this.articulos.push(articulo1);
  }
  modificarArticulo(){

  }
  eliminarArticulo(art:number){
    this.articulos.splice(art,1);
    console.log(art);

  }
}
