package com.sistema.tcc.projeto.comissao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ComissaoController {

    @Autowired
    public ComissaoService comissaoService;

    @GetMapping("comissao/validarDocumentos")
    public ModelAndView validarDocumentos() throws Exception {
        return null;
    }

    @GetMapping("comissao/gerarRanking")
    public ModelAndView gerarRanking() throws Exception {
        return null;
    }


}
