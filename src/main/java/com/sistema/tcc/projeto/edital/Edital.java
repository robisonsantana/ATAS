package com.sistema.tcc.projeto.edital;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "edital")
public class Edital implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String numeroEdital;
    private String numeroProcesso;
    private String codigoUnidade;
    private String nomeUnidadeEnsino;
    private String cidade;
    private String disciplina;
    private LocalDate dataInicioInscricao;
    private LocalDate dataFimInscricao;
    private String areaAtuacao;
    private String link;

    public String getNumeroEdital() {
        return numeroEdital;
    }

    public void setNumeroEdital(String numeroEdital) {
        this.numeroEdital = numeroEdital;
    }

    public String getNumeroProcesso() {
        return numeroProcesso;
    }

    public void setNumeroProcesso(String numeroProcesso) {
        this.numeroProcesso = numeroProcesso;
    }

    public String getCodigoUnidade() {
        return codigoUnidade;
    }

    public void setCodigoUnidade(String codigoUnidade) {
        this.codigoUnidade = codigoUnidade;
    }

    public String getNomeUnidadeEnsino() {
        return nomeUnidadeEnsino;
    }

    public void setNomeUnidadeEnsino(String nomeUnidadeEnsino) {
        this.nomeUnidadeEnsino = nomeUnidadeEnsino;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

    public LocalDate getDataInicioInscricao() {
        return dataInicioInscricao;
    }

    public void setDataInicioInscricao(LocalDate dataInicioInscricao) {
        this.dataInicioInscricao = dataInicioInscricao;
    }

    public LocalDate getDataFimInscricao() {
        return dataFimInscricao;
    }

    public void setDataFimInscricao(LocalDate dataFimInscricao) {
        this.dataFimInscricao = dataFimInscricao;
    }

    public String getAreaAtuacao() {
        return areaAtuacao;
    }

    public void setAreaAtuacao(String areaAtuacao) {
        this.areaAtuacao = areaAtuacao;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
