package com.sistema.tcc.projeto.service;

import com.sistema.tcc.projeto.model.Disciplina;
import com.sistema.tcc.projeto.repository.DisciplinaRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class DisciplinaService {

    private final DisciplinaRepository disciplinaRepository;

    public DisciplinaService(DisciplinaRepository disciplinaRepository) {
        this.disciplinaRepository = disciplinaRepository;
    }

    public Disciplina create(Disciplina disciplina) {
        return disciplinaRepository.save(disciplina);
    }

    public List<Disciplina> list() {
        return disciplinaRepository.findAll();
    }

    public Disciplina findById(Long id) {
        return disciplinaRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Disciplina não encontrada"));
    }

    public Disciplina update(Long id, Disciplina nova) {
        Disciplina existente = findById(id);

        existente.setDisciplina(nova.getDisciplina());
        existente.setCurso(nova.getCurso());
        existente.setModeloDisciplina(nova.getModeloDisciplina());
        existente.setObjetivo(nova.getObjetivo());
        existente.setEmenta(nova.getEmenta());
        existente.setDescricao(nova.getDescricao());

        return disciplinaRepository.save(existente);
    }

    public void delete(Long id) {
        disciplinaRepository.deleteById(id);
    }
}