import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Membro {
  nome: string;
  papel: string;
  foco: string;
  github?: string;
  linkedin?: string;
}

@Component({
  selector: 'app-equipe',
  imports: [RouterLink],
  templateUrl: './equipe.html',
  styleUrl: './equipe.scss',
})
export class Equipe {
  readonly membros: Membro[] = [
    {
      nome: 'Pedro Lima',
      papel: 'Scrum Master / Gestão de Projeto',
      foco: 'Conduz o Kanban, acompanha as sprints e centraliza a comunicação do time.',
      github: 'PedroLima-07',
      linkedin: 'pedro-lima-0a0193349',
    },
    {
      nome: 'Luiz Eduardo',
      papel: 'Analista de Requisitos & Documentação',
      foco: 'Escreve o artigo acadêmico e a documentação técnica, incluindo DER e casos de uso.',
      github: 'luizeflss',
      linkedin: 'luizefls',
    },
    {
      nome: 'Nathan da Silva',
      papel: 'Back-end & Banco de Dados',
      foco: 'Modela o banco relacional e desenvolve as rotas da API do sistema.',
      github: 'NathanDotAlves',
      linkedin: 'nathan-alvess',
    },
    {
      nome: 'Gabriel Marques',
      papel: 'Desenvolvedor Back-end',
      foco: 'Programa as telas do sistema e integra a interface com as APIs.',
      github: 'gabrielmarques23',
      linkedin: 'gabriel-marques23',
    },
    {
      nome: 'Kauê David Simões',
      papel: 'UI/UX Designer',
      foco: 'Desenha wireframes e protótipos no Figma e define a identidade visual.',
      github: 'KaueDavid',
      linkedin: 'kaue-david',
    },
    {
      nome: 'Danilo Bossolani',
      papel: 'Analista de BI & Marketing',
      foco: 'Constrói o dashboard gerencial, cuida da landing page e do vídeo pitch.',
      github: 'danilobossolani',
      linkedin: 'danilobossolani',
    },
    {
      nome: 'Sabrina Montossa',
      papel: 'Integrante',
      foco: 'Atribuição em definição junto ao time.',
    },
  ];

  iniciais(nome: string): string {
    const partes = nome.trim().split(/\s+/);
    const primeira = partes[0]?.[0] ?? '';
    const ultima = partes.length > 1 ? (partes.at(-1)?.[0] ?? '') : '';
    return (primeira + ultima).toUpperCase();
  }
}
