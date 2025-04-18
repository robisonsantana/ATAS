package com.sistema.tcc.projeto.usuario;

import com.sistema.tcc.projeto.exception.ServiceExc;
import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;


import java.security.NoSuchAlgorithmException;

@Controller
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ServiceUsuario serviceUsuario;

    @GetMapping("/")
    public ModelAndView login() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("templates/login/login/login/login");
        modelAndView.addObject("usuario", new Usuario());
        return modelAndView;
    }

    @GetMapping("/cadastro")
    public ModelAndView cadastrar() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("usuario", new Usuario());
        modelAndView.setViewName("templates/login/login/login/cadastro");
        return modelAndView;
    }

    @PostMapping("/salvarUsuario")
    public ModelAndView cadastrar(Usuario usuario) throws Exception {
        ModelAndView modelAndView = new ModelAndView();
        serviceUsuario.salvarUsuario(usuario);
        modelAndView.setViewName("redirect:/");
        return modelAndView;
    }

    @PostMapping("/login")
    public ModelAndView login(
            Usuario usuario,
            BindingResult br,
            HttpSession session
    ) throws NoSuchAlgorithmException, ServiceExc {

        ModelAndView modelAndView = new ModelAndView();
        if (br.hasErrors()) {
            modelAndView.setViewName("template/login/login");
            return modelAndView;
        }

        // Adicione a lógica de autenticação
        Usuario usuarioLogin = serviceUsuario.login(usuario.getEmail(), usuario.getSenha());
        if (usuarioLogin == null) {
            modelAndView.addObject("erro", "Credenciais inválidas");
            modelAndView.setViewName("template/login/login");
        } else {
            session.setAttribute("usuarioLogado", usuarioLogin);
            modelAndView.setViewName("redirect:/pagina-inicial");
        }

        return modelAndView;
    }

    @PostMapping("/logout")
    public ModelAndView logout(HttpSession session) {
        session.invalidate();
        return login();
    }
}


