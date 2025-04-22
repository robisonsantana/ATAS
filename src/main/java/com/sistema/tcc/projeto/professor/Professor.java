package com.sistema.tcc.projeto.professor;

import com.sistema.tcc.projeto.usuario.Usuario;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Professor extends Usuario {

    private String curso;

}
