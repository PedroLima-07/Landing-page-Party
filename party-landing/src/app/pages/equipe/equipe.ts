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
      nome: 'Pedro Cardoso',
      papel: 'Organização do time',
      foco: 'Mantém todo mundo no mesmo ritmo: divide as tarefas, acompanha os prazos e é quem costura a conversa entre as pessoas.',
      github: 'PedroLima-07',
      linkedin: 'pedro-lima-0a0193349',
    },
    {
      nome: 'Luiz Eduardo',
      papel: 'Pesquisa e escrita',
      foco: 'Escreve o artigo do projeto e registra como o sistema funciona, para quem chegar depois entender tudo sem precisar perguntar.',
      github: 'luizeflss',
      linkedin: 'luizefls',
    },
    {
      nome: 'Nathan da Silva',
      papel: 'Dados do sistema',
      foco: 'Cuida de onde cada informação do +party fica guardada (pedidos, comandas e bares) e de como o app busca isso.',
      github: 'NathanDotAlves',
      linkedin: 'nathan-alvess',
    },
    {
      nome: 'Gabriel Marques',
      papel: 'Construção das telas',
      foco: 'Programa as telas do aplicativo, cuida para que funcionem bem no celular e liga cada botão ao que acontece por trás.',
      github: 'gabrielmarques23',
      linkedin: 'gabriel-marques23',
    },
    {
      nome: 'Kauê David Simões',
      papel: 'Design',
      foco: 'Desenha as telas antes de virarem código e define a cara do +party: as cores, a letra, o logo e o lugar de cada coisa.',
      github: 'KaueDavid',
      linkedin: 'kaue-david',
    },
    {
      nome: 'Danilo Bossolani',
      papel: 'Números e divulgação',
      foco: 'Monta o painel que mostra lotação e vendas do bar, cuida desta landing page e do vídeo de apresentação.',
      github: 'danilobossolani',
      linkedin: 'danilobossolani',
    },
    {
      nome: 'Sabrina Montossa',
      papel: 'Landing page e acompanhamento',
      foco: 'Ajuda a construir esta página e participa das revisões em que o time olha o que ficou pronto a cada etapa.',
    },
  ];

  iniciais(nome: string): string {
    const partes = nome.trim().split(/\s+/);
    const primeira = partes[0]?.[0] ?? '';
    const ultima = partes.length > 1 ? (partes.at(-1)?.[0] ?? '') : '';
    return (primeira + ultima).toUpperCase();
  }
}
