import { Routes } from '@angular/router';
import {PersonaListComponent} from './components/persona-list/persona-list.component';
import {PersonaAddComponent} from './components/persona-add/persona-add.component';
import {PersonaDetailComponent} from './components/persona-detail/persona-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // route predefinita
  { path: 'persone', component: PersonaListComponent }, // route per la lista di persone
  { path: 'persone/add', component: PersonaAddComponent }, // route per aggiungere persone
  { path: 'persona/:id', component: PersonaDetailComponent } , // route per il dettaglio della persona
  { path: '**', redirectTo: 'persone' }, // route per gestione errori
];
