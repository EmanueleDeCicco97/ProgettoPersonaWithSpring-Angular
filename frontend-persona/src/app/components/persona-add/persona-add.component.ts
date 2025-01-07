import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Persona, PersonaService } from '../../services/persona.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-persona-add',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './persona-add.component.html',
  styleUrls: ['./persona-add.component.scss'],
})
export class PersonaAddComponent {
  persona: Persona = { id: 0, nome: '', cognome: '', eta: 0 };

  constructor(private personaService: PersonaService, private router: Router) {}

  addPersona(): void {
    this.personaService.createPersona(this.persona).subscribe({
      next: () => this.router.navigate(['/persone'])
    });
  }
}
