import { Edital } from "../edital/edital";
import { Candidato } from "./candidato";

describe('Candidato', () => {
  it('should create an instance', () => {
    // Provide dummy values for all required constructor arguments
    const editalMock = {} as Edital; // Replace with a proper Edital mock if needed
    expect(new Candidato(
      "Nome Teste",
      "12345678900",
      "MG1234567",
      "Motivo Teste",
      10,
      ["doc1.pdf", "doc2.pdf"],
      editalMock
    )).toBeTruthy();
  });
});
