package com.sistema.tcc.projeto.coordenador;

import com.sistema.tcc.projeto.administrador.AdministradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CoordenadorController {

    @Autowired
    private AdministradorService administradorService;

    @GetMapping("/coordenador/solicitar-edital")
    public ModelAndView SolicitarEdital (){ return null;}
}
