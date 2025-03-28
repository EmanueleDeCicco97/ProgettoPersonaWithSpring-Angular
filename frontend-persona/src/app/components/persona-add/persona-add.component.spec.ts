import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaAddComponent } from './persona-add.component';

describe('PersonaAddComponent', () => {
  let component: PersonaAddComponent;
  let fixture: ComponentFixture<PersonaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
