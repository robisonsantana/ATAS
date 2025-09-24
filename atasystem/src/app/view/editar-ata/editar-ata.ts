// editar-ata.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Edital {
  id: string;
  numero: string;
  ativo: boolean;
  conteudo: string;
}

@Component({
  selector: 'app-editar-ata',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-ata.html',
  styleUrls: ['./editar-ata.css']
})
export class EditarAtaComponent {
  editais: Edital[] = [
    {
      id: '1',
      numero: 'edital 000001',
      ativo: false,
      conteudo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo enim, vehicula non feugiat vel, placerat ut arcu. Etiam at vulputate urna. Mauris nec sapien mi. Pellentesque vitae semper leo. Cras massa magna, viverra dapibus finibus vel, cursus vel nisl. Pellentesque hendrerit erat eget erat volutpat tincidunt. Morbi in vulputate felis. Pellentesque placerat dignissim turpis. Curabitur tincidunt, lorem sed aliquam tincidunt, lectus ex laoreet ex, non egestas turpis ligula a magna. Vivamus ut placerat dui, non possuere orci.

Vivamus ut lacinia metus. Aenean at est id enim iaculis eleifend. Phasellus fringilla odio vitae rhoncus maximus. Sed consectetur porttitor odio, at vehicula arcu consectetur sed. Ut iaculis semper augue nec interdum. Nunc congue sem sem, id sollicitudin lectus venenatis a. Nam lacinia tincidunt maximus. Nam aliquet mollis tellus, in aliquet eros pharetra non. Donec convallis mattis libero, eget efficitur ante molestie non sit amet. Vivamus augue augue, eleifend in hendrerit non, faucibus ut tortor eu, eleifend in porttitor. Pellentesque ultricies augue luctus. Fusce suscipit elementum dui. Fusce id est faucibus, consectetur non elit. Mauris tempor ipsum quis tellus venenatis. Morbi non arcu sit amet dui faucibus ultrices placerat sit amet lacus. Nulla facilisi.`
    },
    {
      id: '2',
      numero: 'edital 000002',
      ativo: false,
      conteudo: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse felis risus, auctor et est eget, pellentesque placerat ligula. Suspendisse eget maximus urna. Fusce at placerat ex. Maecenas vel nisl orci. Praesent dignissim nisl vel justo efficitur efficitur. Quisque ac ex sit amet tellus accumsan dapibus. Mauris dictum tristique ipsum in fringilla. Fusce ultrices blandit turpis, non efficitur neque hendrerit et.

Sed consectetur porttitor odio, at vehicula arcu consectetur sed. Ut iaculis semper augue nec interdum. Nunc congue sem sem, id sollicitudin lectus venenatis a. Nam lacinia tincidunt maximus.`
    },
    {
      id: '3',
      numero: 'edital 000003',
      ativo: true,
      conteudo: `ATA - edital 000003

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo enim, vehicula non feugiat vel, placerat ut arcu. Etiam at vulputate urna. Mauris nec sapien mi. Pellentesque vitae semper leo. Cras massa magna, viverra dapibus finibus vel, cursus vel nisl. Pellentesque hendrerit erat eget erat volutpat tincidunt. Morbi in vulputate felis. Pellentesque placerat dignissim turpis. Curabitur tincidunt, lorem sed aliquam tincidunt, lectus ex laoreet ex, non egestas turpis ligula a magna. Vivamus ut placerat dui, non possuere orci.

Vivamus ut lacinia metus. Aenean at est id enim iaculis eleifend. Phasellus fringilla odio vitae rhoncus maximus. Sed consectetur porttitor odio, at vehicula arcu consectetur sed. Ut iaculis semper augue nec interdum. Nunc congue sem sem, id sollicitudin lectus venenatis a. Nam lacinia tincidunt maximus. Nam aliquet mollis tellus, in aliquet eros pharetra non. Donec convallis mattis libero, eget efficitur ante molestie non sit amet. Vivamus augue augue, eleifend in hendrerit non, faucibus ut tortor eu, eleifend in porttitor. Pellentesque ultricies augue luctus. Fusce suscipit elementum dui. Fusce id est faucibus, consectetur non elit. Mauris tempor ipsum quis tellus venenatis. Morbi non arcu sit amet dui faucibus ultrices placerat sit amet lacus. Nulla facilisi.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse felis risus, auctor et est eget, pellentesque placerat ligula. Suspendisse eget maximus urna. Fusce at placerat ex. Maecenas vel nisl orci. Praesent dignissim nisl vel justo efficitur efficitur. Quisque ac ex sit amet tellus accumsan dapibus. Mauris dictum tristique ipsum in fringilla. Fusce ultrices blandit turpis, non efficitur neque hendrerit et.`
    },
    {
      id: '4',
      numero: 'edital 000004',
      ativo: false,
      conteudo: `Documento oficial do edital 000004 com informações específicas sobre este processo seletivo.`
    },
    {
      id: '5',
      numero: 'edital 000005',
      ativo: false,
      conteudo: `Conteúdo do edital 000005 para processos administrativos internos da instituição.`
    },
    {
      id: '6',
      numero: 'edital 000006',
      ativo: false,
      conteudo: `Texto oficial do edital 000006 referente às normas e procedimentos estabelecidos.`
    }
  ];

  editalSelecionado: Edital | null = null;
  modoEdicao: boolean = false;
  conteudoEditado: string = '';
  loading: boolean = false;
  successMessage: string = '';

  constructor() {
    const editalAtivo = this.editais.find(e => e.ativo);
    if (editalAtivo) {
      this.selecionarEdital(editalAtivo);
    }
  }

  selecionarEdital(edital: Edital) {
    this.editais.forEach(e => e.ativo = false);
    
    edital.ativo = true;
    this.editalSelecionado = edital;
    this.modoEdicao = false;
    this.conteudoEditado = edital.conteudo;
    this.successMessage = '';
  }

  iniciarEdicao() {
    if (this.editalSelecionado) {
      this.modoEdicao = true;
      this.conteudoEditado = this.editalSelecionado.conteudo;
    }
  }

  salvarEdicao() {
    if (this.editalSelecionado && this.conteudoEditado.trim()) {
      this.loading = true;
      
      // Simular salvamento
      setTimeout(() => {
        this.editalSelecionado!.conteudo = this.conteudoEditado;
        this.modoEdicao = false;
        this.loading = false;
        this.successMessage = 'ATA salva com sucesso!';
        
        // Limpar mensagem após 3 segundos
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      }, 1000);
    }
  }

  cancelarEdicao() {
    this.modoEdicao = false;
    this.conteudoEditado = this.editalSelecionado?.conteudo || '';
  }

  baixarAta() {
    if (this.editalSelecionado) {
      console.log('Baixando ATA:', this.editalSelecionado.numero);
      // Implementar download posteriormente
    }
  }
}