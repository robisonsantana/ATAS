package com.sistema.tcc.projeto.edital;

//import com.sistema.tcc.projeto.exception.ServiceExc;
//import com.sistema.tcc.projeto.edital.EditalRepository;
//import com.sistema.tcc.projeto.edital.ServiceEdital;
//import com.sistema.tcc.projeto.edital.Edital;
//import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;


import java.security.NoSuchAlgorithmException;

@Controller
public class EditalController {

//    @Autowired
//    private EditalRepository editalRepository;
//
//    @Autowired
//    private ServiceEdital serviceEdital;

    @GetMapping("/buscar-edital")
    public ModelAndView buscarEdital() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("edital/procurar-edital");
        modelAndView.addObject("edital", new Edital());
        return modelAndView;
    }

    //TODO: No futuro implementar a abertura do edital diretamente no site
    @PostMapping("/abrir-edital")
    public ModelAndView abrirEdital(Edital edital) throws Exception {

        return null;
    }

}
