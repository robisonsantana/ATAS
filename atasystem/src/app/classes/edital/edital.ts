import { Candidato } from "../candidato/candidato";

export class Edital {

    constructor(
    public id: number,
    public titulo: string,
    public numeroEdital: string,
    public candidatos: Candidato[],
    public disciplina: string,
    public status: string,
    public dataAbertura: Date
    ) { }

}
