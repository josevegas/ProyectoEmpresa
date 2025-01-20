import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebdesingComponent } from './components/webdesing/webdesing.component';
import { WeareComponent } from './components/weare/weare.component';
import { OrgdesingComponent } from './components/orgdesing/orgdesing.component';
import { GraphdesingComponent } from './components/graphdesing/graphdesing.component';

export const routes: Routes = [
    {
        path: 'inicio',
        component: HomeComponent,
        title: 'Mi Nombre',
    },
    {
        path: 'disenoweb',
        component: WebdesingComponent,
        title: 'Diseño Web',
    },
    {
        path: 'quienes-somos',
        component: WeareComponent,
        title: 'Quienes Somos',
    },
    {
        path: 'diseno-organizacional',
        component: OrgdesingComponent,
        title: 'Diseño Organizacional',
    },
    {
        path: 'imagencorporativa',
        component: GraphdesingComponent,
        title: 'Imagen Corporativa',
    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/inicio'
    }
];
