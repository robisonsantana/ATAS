export class Candidato {

    constructor(
        public nome: string,
        public cpf: string,
        public rg: string,
        public motivo: string,
        public pontuacao: number,
        public documentos: string[],
        public pontuacaoDif: boolean = false
    ) { }

}
