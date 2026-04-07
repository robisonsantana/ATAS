import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avaliacao-banca',
  imports: [ FormsModule],
  templateUrl: './avaliacao-banca.html',
  styleUrl: './avaliacao-banca.css'
})
export class AvaliacaoBanca {

  edital: string = 'edital teste';
  nome: string = 'nome teste';
  disciplina: string = 'displicina teste';
  curso: string = 'curso teste';
  areaDisciplina: string = 'area disciplina teste';
  planilha: string = 'planilha teste';

  obs: string = '';

  public pegarValor(): void {
    this.obs = (document.getElementById('observacoes') as HTMLInputElement).value;
    console.log(this.obs);
  }

}
