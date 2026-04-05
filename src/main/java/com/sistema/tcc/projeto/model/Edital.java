package com.sistema.tcc.projeto.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.sistema.tcc.projeto.model.Enum.StatusEdital;

@Getter
@Setter
@Entity
public class Edital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @ManyToOne
    @JoinColumn(name = "disciplina_id")
    private Disciplina disciplina;

    @Enumerated(EnumType.STRING)
    private StatusEdital status;

    private LocalDateTime dataSolicitacao;
    private LocalDateTime dataAbertura;

    private LocalDateTime dias;
    private LocalDate ano;
}

