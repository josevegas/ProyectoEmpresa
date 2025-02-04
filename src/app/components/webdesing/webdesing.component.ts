import { Component } from '@angular/core';


@Component({
  selector: 'app-webdesing',
  imports: [],
  templateUrl: './webdesing.component.html',
  styleUrl: './webdesing.component.css'
})
export class WebdesingComponent {
cabecera:string='';
ecommerse:string='';
catalogo:string='';
web:string='';
landing:string='';
private initializeCabecera():void{
  this.cabecera+='<b>Transformamos ideas en experiencias digitales irresistibles</b>. No solo creamos sitios web, construimos puentes entre tu marca y tu audiencia:<br />';
this.cabecera+='<ul><li>Interfaces fluídas</li>';
this.cabecera+='<li>Diseños responsivos</li>';
this.cabecera+='<li>Funcionalidades inteligentes que convierten visitantes en aliados</li></ul>'
this.cabecera+='Ten una web que no solo se vea increible, sino que vende, comunica y seduce. Porque en la era digital, tu sitio web es tu mejor tarjeta de presentación <b>¡Y aquí estamos para hacerla brillar como nunca!</b>';
}
ngOnInit():void{
  this.initializeCabecera();
}
}
