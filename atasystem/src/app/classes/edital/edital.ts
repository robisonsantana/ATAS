import { Candidato } from "../candidato/candidato";

export class Edital {

    constructor(
    public id: number,
    public candidatos: Candidato[],
    public nomeEdital: string
    ) { }

}
