import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Persona, PersonaService } from '../../services/persona.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona-detail',
  standalone: true,
    imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.scss'],
})
export class PersonaDetailComponent implements OnInit {
  persona: Persona | null = null;
  isEditing: boolean = false;

  constructor(
    private personaService: PersonaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPersona(id);
  }

  loadPersona(id: number): void {
    this.personaService.getPersonaById(id).subscribe({
      next: (data) => (this.persona = data),
      error: (err) => console.error('Errore nel caricamento:', err),
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  savePersona(): void {
    if (this.persona) {
      this.personaService.updatePersona(this.persona.id, this.persona).subscribe({
        next: () => this.router.navigate(['/persone']),
        error: (err) => console.error('Errore nel salvataggio:', err),
      });
    }
  }

  deletePersona(): void {
    if (this.persona) {
      this.personaService.deletePersona(this.persona.id).subscribe({
        next: () => this.router.navigate(['/persone']),
        error: (err) => console.error('Errore nella cancellazione:', err),
      });
    }
  }
}
