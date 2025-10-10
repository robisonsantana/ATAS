package com.sistema.tcc.projeto.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Set;

@Entity
public class Banca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // banca é composta de avaliação e de um set de professores
    // salvar primeiro em professores

    private Set<Professor> professores;
    public String avaliacao;
}
