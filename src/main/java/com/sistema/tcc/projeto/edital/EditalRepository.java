package com.sistema.tcc.projeto.edital;

import com.sistema.tcc.projeto.edital.Edital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EditalRepository extends JpaRepository<Edital, Long> {

    @Query("select e from Edital e where e.numeroEdital = :numeroEdital")
    public Edital findByNumeroEdital(String numeroEdital);

    @Query("select l from Edital l where l.numeroProcesso = :numeroProcesso")
    public Edital findByNumeroProcesso(String numeroProcesso);

    @Query("select l from Edital l where l.codigoUnidade = :codigoUnidade")
    public Edital findByCodigoUnidade(String codigoUnidade);

    @Query("select l from Edital l where l.nomeUnidadeEnsino = :nomeUnidadeEnsino")
    public Edital findByNomeUnidadeEnsino(String nomeUnidadeEnsino);

    @Query("select l from Edital l where l.cidade = :cidade")
    public Edital findByCidade(String cidade);

    @Query("select l from Edital l where l.disciplina = :disciplina")
    public Edital findByDisciplina(String disciplina);
}
