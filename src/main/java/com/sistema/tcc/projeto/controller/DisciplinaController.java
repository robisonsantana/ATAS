package com.sistema.tcc.projeto.controller;

import com.sistema.tcc.projeto.model.Disciplina;
import com.sistema.tcc.projeto.service.DisciplinaService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/disciplina")
@CrossOrigin(origins = "http://localhost:4200")
public class DisciplinaController {

    private final DisciplinaService disciplinaService;

    public DisciplinaController(DisciplinaService disciplinaService) {
        this.disciplinaService = disciplinaService;
    }

    @PostMapping
    public Disciplina create(@RequestBody Disciplina disciplina) {
        return disciplinaService.create(disciplina);
    }

    @GetMapping
    public List<Disciplina> list() {
        return disciplinaService.list();
    }

    @GetMapping("/{id}")
    public Disciplina findById(@PathVariable Long id) {
        return disciplinaService.findById(id);
    }

    @PutMapping("/{id}")
    public Disciplina update(@PathVariable Long id,
                               @RequestBody Disciplina disciplina) {
        return disciplinaService.update(id, disciplina);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        disciplinaService.delete(id);
    }
}
