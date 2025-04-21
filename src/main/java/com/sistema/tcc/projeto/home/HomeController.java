package com.sistema.tcc.projeto.home;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

public class HomeController {

    @GetMapping("/home")
    public String home() {
        return "home/home";
    }

}
