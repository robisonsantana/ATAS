package com.sistema.tcc.projeto.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.web.service.annotation.GetExchange;

import java.sql.Time;

@Entity
public class Edital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //variaveis de acordo com o diagrama
//    public Integer numeroEdital;
//    public Integer ano;
//    public Integer unidade;
//    public String modalidade;
//    public Time horario;

    //variaveis de acordo com o form solicitação-edital

}