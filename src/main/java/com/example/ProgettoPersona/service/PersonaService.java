package com.example.ProgettoPersona.service;

import com.example.ProgettoPersona.model.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ProgettoPersona.repository.PersonaRepository;

import java.util.List;

@Service
public class PersonaService {

    @Autowired
    PersonaRepository personaRepository;


    public List<Persona> getAll() {
        return personaRepository.findAll();
    }

    public Persona getById(int id) {
        return personaRepository.findById(id).orElseThrow(() -> new RuntimeException("Persona non trovata"));
    }

    public Persona create(Persona persona) {
        return personaRepository.save(persona);
    }

    public Persona update(int id, Persona persona) {
        Persona existingPersona = getById(id);
        existingPersona.setNome(persona.getNome());
        existingPersona.setCognome(persona.getCognome());
        existingPersona.setEta(persona.getEta());
        return personaRepository.save(existingPersona);
    }

    public void delete(int id) {
        personaRepository.deleteById(id);
    }
}