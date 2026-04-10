package com.sistema.tcc.projeto.model.DTO;

import java.util.List;

public class SolicitarEditalDTO {

    //ref edital
    private String nome;
    private Long disciplinaId;


    //ref disciplina
    private String disciplinaNome;
    private String curso;
    private String tipo; 

    private String turno;
    private String horario;
    private List<String> diasSemana;

    
    
    
    // getters e setters

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public Long getDisciplinaId() { return disciplinaId; }
    public void setDisciplinaId(Long disciplinaId) { this.disciplinaId = disciplinaId; }

    public String getDisciplinaNome() { return disciplinaNome; }
    public void setDisciplinaNome(String disciplinaNome) { this.disciplinaNome = disciplinaNome; }

    public String getCurso() { return curso; }
    public void setCurso(String curso) { this.curso = curso; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public String getTurno() { return turno; }
    public void setTurno(String turno) { this.turno = turno; }

    public String getHorario() { return horario; }
    public void setHorario(String horario) { this.horario = horario; }

    public List<String> getDiasSemana() { return diasSemana; }
    public void setDiasSemana(List<String> diasSemana) { this.diasSemana = diasSemana; }
}