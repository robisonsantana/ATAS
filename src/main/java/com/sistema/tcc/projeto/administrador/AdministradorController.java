package com.sistema.tcc.projeto.administrador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AdministradorController {

    @Autowired
    private AdministradorService administradorService;

    @GetMapping("/administrador/configurarTabelas")
    public ModelAndView configurarTabelas() {
        return null;
    }

    @GetMapping("/administrador/gerenciarPrazos")
    public ModelAndView gerenciarPrazosETemplates() {
        return null;
    }

}
