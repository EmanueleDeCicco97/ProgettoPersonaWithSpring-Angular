import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit {
  persone: any[] = []; // inizializzo un array vuoto

// array prova
//   persone: any[] = [
//    { id: 1, nome: 'Giovanni', cognome: 'Rossi', eta: 30 },
//    { id: 2, nome: 'Maria', cognome: 'Bianchi', eta: 25 },
//    { id: 3, nome: 'Luca', cognome: 'Verdi', eta: 40 },
//    { id: 4, nome: 'Anna', cognome: 'Neri', eta: 35 }
//  ];
  

  constructor(private http: HttpClient, private personaService: PersonaService) {}

  ngOnInit(): void {
    this.loadPersone();
  }

  loadPersone(): void {
    this.personaService.getAllPersone().subscribe({
      next: (data) => (this.persone = data),
    });
  }
}
