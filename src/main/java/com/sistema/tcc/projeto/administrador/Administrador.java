package com.sistema.tcc.projeto.administrador;

import com.sistema.tcc.projeto.usuario.Usuario;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "administrador")
public class Administrador extends Usuario {
}
