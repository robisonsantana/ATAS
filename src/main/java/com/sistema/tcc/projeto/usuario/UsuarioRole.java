package com.sistema.tcc.projeto.usuario;

public enum UsuarioRole {

    ADMIN ("admin"),
    COORDENADOR ("coord");

    private String role;

    UsuarioRole (String role) {
        this.role = role;
    }

    public String getRole (){
        return role;
    }
}
