import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
@Input() name!:string;
currentRoute:string='';
constructor(private router:Router){
  this.router.events.subscribe(event=>{
    if(event instanceof NavigationEnd){
      this.currentRoute = event.url;
    }
  })
}
isServiciosActive():boolean{
  return this.currentRoute.includes('/servicios');
}
}
