package com.example.ProgettoPersona.repository;

import com.example.ProgettoPersona.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonaRepository extends JpaRepository<Persona, Integer> {
}
