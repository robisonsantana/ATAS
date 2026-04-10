package com.sistema.tcc.projeto.controller;

import com.sistema.tcc.projeto.model.Edital;
import com.sistema.tcc.projeto.model.DTO.SolicitarEditalDTO;
import com.sistema.tcc.projeto.service.EditalService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/edital")
public class EditalController {

    EditalService editalService;

    public EditalController(EditalService service) {
        this.editalService = service;
    }

    @PostMapping("/solicitar-edital")
    public Edital solicitarEdital(@RequestBody SolicitarEditalDTO dto) {
        return editalService.solicitar(dto);
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    @GetMapping("/solicitados")
    public List<Edital> listarSolicitados() {
        return editalService.listarSolicitados();
    }

    @GetMapping("/aprovados")
    public List<Edital> listarAprovados() {
        return editalService.listarAprovados();
    }

    @PutMapping("/{id}/aprovar")
    public Edital aprovar(@PathVariable Long id) {
        return editalService.aprovarEdital(id);
    }
}
