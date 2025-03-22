package com.example.ProgettoPersona.service;

import com.example.ProgettoPersona.model.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ProgettoPersona.repository.PersonaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PersonaService {

    PersonaRepository personaRepository;

    @Autowired
    public PersonaService(PersonaRepository personaRepository) {
        this.personaRepository = personaRepository;
    }

    public List<Persona> getAll() {
        return personaRepository.findAll();
    }

    public Optional<Persona> getById(int id) {
        return personaRepository.findById(id);
    }

    public Persona create(Persona persona) {
        return personaRepository.save(persona);
    }

    public Persona update(int id, Persona persona) {
        Optional<Persona> existingPersona = getById(id);

        if (existingPersona.isPresent()) {
            Persona updatedPersona = existingPersona.get();
            updatedPersona.setNome(persona.getNome());
            updatedPersona.setCognome(persona.getCognome());
            updatedPersona.setEta(persona.getEta());
            return personaRepository.save(updatedPersona);
        } else {
            return null;
        }


    }

    public void delete(int id) {
        personaRepository.deleteById(id);
    }
}