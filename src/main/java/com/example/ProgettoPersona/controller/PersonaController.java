package com.example.ProgettoPersona.controller;

import com.example.ProgettoPersona.model.Persona;
import com.example.ProgettoPersona.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/persone")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaController {

    @Autowired
    private PersonaService personaService;

    // Get all Persone
    @GetMapping
    public ResponseEntity<List<Persona>> getAllPersone() {
        List<Persona> persone = personaService.getAll();
        return ResponseEntity.ok(persone);
    }

    // Get Persona by ID
    @GetMapping("/{id}")
    public ResponseEntity<Persona> getPersonaById(@PathVariable int id) {
        Persona persona = personaService.getById(id);
        return ResponseEntity.ok(persona);
    }

    // Create a new Persona
    @PostMapping
    public ResponseEntity<Persona> createPersona(@RequestBody Persona persona) {
        Persona createdPersona = personaService.create(persona);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPersona);
    }

    // Update an existing Persona
    @PutMapping("/{id}")
    public ResponseEntity<Persona> updatePersona(@PathVariable int id, @RequestBody Persona persona) {
        Persona updatedPersona = personaService.update(id, persona);
        return ResponseEntity.ok(updatedPersona);
    }

    // Delete a Persona by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersona(@PathVariable int id) {
        personaService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
