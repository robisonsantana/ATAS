package com.sistema.tcc.projeto.service;

import com.sistema.tcc.projeto.model.Disciplina;
import com.sistema.tcc.projeto.model.Edital;
import com.sistema.tcc.projeto.model.DTO.SolicitarEditalDTO;
import com.sistema.tcc.projeto.model.Enum.StatusEdital;
import com.sistema.tcc.projeto.repository.DisciplinaRepository;
import com.sistema.tcc.projeto.repository.EditalRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class EditalService {

    private final DisciplinaRepository disciplinaRepository;
    private final EditalRepository editalRepository;

    public EditalService(DisciplinaRepository disciplinaRepository, EditalRepository editalRepository) {
        this.disciplinaRepository = disciplinaRepository;
        this.editalRepository = editalRepository;
    }

    public Edital solicitar(SolicitarEditalDTO dto) {
        Disciplina disciplina;

        if (dto.getDisciplinaId() != null) {
            disciplina = disciplinaRepository.findById(dto.getDisciplinaId())
                .orElseThrow();
        } else {
            disciplina = new Disciplina();
            disciplina.setDisciplina(dto.getDisciplinaNome());
            disciplina.setCurso(dto.getCurso());
            disciplina.setModeloDisciplina(dto.getTipo());
            disciplina.setDiasSemana(dto.getDiasSemana());

            disciplina.setTurnoManha("MANHA".equals(dto.getTurno()));
            disciplina.setTurnoTarde("TARDE".equals(dto.getTurno()));
            disciplina.setTurnoNoite("NOITE".equals(dto.getTurno()));

            disciplinaRepository.save(disciplina);
        }

        Edital edital = new Edital();
        edital.setNome(dto.getNome());
        edital.setDisciplina(disciplina);
        edital.setStatus(StatusEdital.SOLICITADO);
        edital.setDataSolicitacao(LocalDateTime.now());

        int ano = LocalDate.now().getYear();
        edital.setAno(LocalDate.of(ano, 1, 1));

        return editalRepository.save(edital);
    }

    public List<Edital> listarSolicitados() {
        return editalRepository.findByStatus(StatusEdital.SOLICITADO);
    }

    public List<Edital> listarAprovados() {
        return editalRepository.findByStatus(StatusEdital.APROVADO);
    }

    public Edital aprovarEdital(Long id) {
        Edital edital = editalRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Edital não encontrado"));

        edital.setStatus(StatusEdital.APROVADO);
        edital.setDataAbertura(LocalDateTime.now());

        return editalRepository.save(edital);
    }
}
