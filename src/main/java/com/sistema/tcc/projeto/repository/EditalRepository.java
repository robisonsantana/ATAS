package com.sistema.tcc.projeto.repository;

import com.sistema.tcc.projeto.model.Edital;
import com.sistema.tcc.projeto.model.Enum.StatusEdital;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EditalRepository extends JpaRepository<Edital, Long> {
    List<Edital> findByStatus(StatusEdital status);
}
