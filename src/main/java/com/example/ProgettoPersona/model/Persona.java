package com.example.ProgettoPersona.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Table(name = "persona")
@Data
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank(message = "Il nome non può essere vuoto")
    @Column(name = "nome")
    private String nome;
    @Column(name = "cognome")
    @NotBlank(message = "Il cognome non può essere vuoto")
    private String cognome;
    @Column(name = "eta")
    @Min(value = 18, message = "Età minima 18 anni")
    private int eta;
}
