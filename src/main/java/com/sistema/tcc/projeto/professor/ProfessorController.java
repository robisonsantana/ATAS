package com.sistema.tcc.projeto.professor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ProfessorController {

    @Autowired
    public ProfessorService professorService;

    @GetMapping("/professor/inscrever")
    public ModelAndView inscreverEmEdital(Professor professor) throws Exception{
        return null;
    }

    @GetMapping("/professor/anexaDocumentos")
    public ModelAndView anexaDocumentos() throws Exception{
        return null;
    }

    @GetMapping("/professor/recorrerResultado")
    public ModelAndView recorrerResultado() throws Exception{
        return null;
    }

}
