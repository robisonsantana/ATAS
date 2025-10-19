package com.sistema.tcc.projeto.controller;

import com.sistema.tcc.projeto.model.Edital;
import com.sistema.tcc.projeto.repository.EditalRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/solicitar-edital")
@CrossOrigin(origins = "http://localhost:4200")
public class EditalController {

    private final EditalRepository repository;

    public EditalController(EditalRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Edital create(@RequestBody Edital edital){
        return repository.save(edital);
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "rota de solicitar-edital funcionando!";
    }
}
