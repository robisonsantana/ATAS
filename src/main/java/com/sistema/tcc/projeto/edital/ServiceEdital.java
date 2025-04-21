package com.sistema.tcc.projeto.edital;

import com.sistema.tcc.projeto.edital.Edital;
import org.springframework.beans.factory.annotation.Autowired;
import com.sistema.tcc.projeto.exception.ServiceExc;

public class ServiceEdital {

    @Autowired
    private EditalRepository editalRepository;

    //TODO: Implementar classe postarEdital.
    public void postarEdital(Edital edital) throws Exception {

    }

    public Edital findByNumeroEdital(String numeroEdital) throws ServiceExc {

        return editalRepository.findByNumeroEdital(numeroEdital);
    }

    public Edital findByNumeroProcesso(String numeroProcesso) throws ServiceExc {

        return editalRepository.findByNumeroProcesso(numeroProcesso);
    }

    public Edital findByCodigoUnidade(String codigoUnidade) throws ServiceExc {

        return editalRepository.findByCodigoUnidade(codigoUnidade);
    }

    public Edital findByNomeUnidadeEnsino(String nomeUnidadeEnsino) throws ServiceExc {

        return editalRepository.findByNomeUnidadeEnsino(nomeUnidadeEnsino);
    }

    public Edital findByCidade(String cidade) throws ServiceExc {

        return editalRepository.findByCidade(cidade);
    }

    public Edital findByDisciplina(String disciplina) throws ServiceExc {

        return editalRepository.findByDisciplina(disciplina);
    }
}
