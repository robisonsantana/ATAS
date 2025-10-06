package com.sistema.tcc.projeto.controller;

import com.sistema.tcc.projeto.model.Disciplina;
import com.sistema.tcc.projeto.repository.DisciplinaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cadastro-disciplina")
@CrossOrigin(origins = "http://localhost:4200")
public class DisciplinaController {

    private final DisciplinaRepository repository;

    public DisciplinaController(DisciplinaRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Disciplina create(@RequestBody Disciplina disciplina) {
        return repository.save(disciplina);
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "rota de disciplina funcionando!";
    }
}
