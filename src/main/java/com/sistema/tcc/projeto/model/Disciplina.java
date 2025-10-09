package com.sistema.tcc.projeto.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Disciplina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String disciplina;
    private String curso;
    private String modeloDisciplina;
    private String objetivo;
    private String ementa;
    private String descricao;

    private boolean turnoManha;
    private boolean turnoTarde;
    private boolean turnoNoite;

    private Integer quantidadeAulas;

    @ElementCollection
    private List<String> diasSemana;

    private String dataCriacao;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDisciplina() { return disciplina; }
    public void setDisciplina(String disciplina) { this.disciplina = disciplina; }

    public String getCurso() { return curso; }
    public void setCurso(String curso) { this.curso = curso; }

    public String getModeloDisciplina() { return modeloDisciplina; }
    public void setModeloDisciplina(String modeloDisciplina) { this.modeloDisciplina = modeloDisciplina; }

    public String getObjetivo() { return objetivo; }
    public void setObjetivo(String objetivo) { this.objetivo = objetivo; }

    public String getEmenta() { return ementa; }
    public void setEmenta(String ementa) { this.ementa = ementa; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public boolean isTurnoManha() { return turnoManha; }
    public void setTurnoManha(boolean turnoManha) { this.turnoManha = turnoManha; }

    public boolean isTurnoTarde() { return turnoTarde; }
    public void setTurnoTarde(boolean turnoTarde) { this.turnoTarde = turnoTarde; }

    public boolean isTurnoNoite() { return turnoNoite; }
    public void setTurnoNoite(boolean turnoNoite) { this.turnoNoite = turnoNoite; }

    public Integer getQuantidadeAulas() { return quantidadeAulas; }
    public void setQuantidadeAulas(Integer quantidadeAulas) { this.quantidadeAulas = quantidadeAulas; }

    public List<String> getDiasSemana() { return diasSemana; }
    public void setDiasSemana(List<String> diasSemana) { this.diasSemana = diasSemana; }

    public String getDataCriacao() { return dataCriacao; }
    public void setDataCriacao(String dataCriacao) { this.dataCriacao = dataCriacao; }
}

