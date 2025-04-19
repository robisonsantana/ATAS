package com.sistema.tcc.projeto.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/email")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/formulario")
    public String mostrarFormulario(Model model){
        model.addAttribute("email", new Email());
        return "email/email-formulario";
    }

    @PostMapping("/enviar")
    public String enviarEmail(@ModelAttribute Email email, Model model){
        emailService.enviarEmail(email);
        model.addAttribute("msg", "email foi enviado com sucesso");
        return "email-formulario";
    }
}
