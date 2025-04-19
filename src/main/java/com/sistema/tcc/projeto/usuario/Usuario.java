package com.sistema.tcc.projeto.usuario;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//import jakarta.validation.constraints.NotEmpty;

import java.io.Serializable;

@Entity
@Table(name = "usuario")

public class Usuario implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private Long ra;

    private String nome;
    private String sobrenome;
    private String email;
    private String senha;

    public Long getRa() {
        return ra;
    }

    public void setRa(Long ra) {
        this.ra = ra;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
