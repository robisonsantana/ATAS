package com.sistema.tcc.projeto.reestruturacao.professor;

import com.sistema.tcc.projeto.reestruturacao.usuario.Usuario;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Professor extends Usuario {

    private String curso;

}
