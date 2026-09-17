import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Revela } from '../../shared/revela';

export interface Plano {
  nome: string;
  resumo: string;
  preco: string;
  periodo: string;
  destaque: boolean;
  itens: string[];
  cta: string;
}

@Component({
  selector: 'app-planos-cliente',
  imports: [RouterLink, Revela],
  templateUrl: './planos-cliente.html',
  styleUrl: './planos-cliente.scss',
})
export class PlanosCliente {
  readonly planos: Plano[] = [
    {
      nome: 'Rolê',
      resumo: 'Tudo que você precisa para sair de casa sabendo onde vai dar.',
      preco: 'Grátis',
      periodo: 'para sempre',
      destaque: false,
      itens: [
        'Lotação dos bares em tempo real',
        'Comanda digital no seu celular',
        'Pedido direto da mesa',
        'Chamar o garçom pelo app',
        'Total consumido sempre visível',
      ],
      cta: 'Criar conta',
    },
    {
      nome: 'Rolê+',
      resumo: 'Para quem sai toda semana e quer o rolê resolvido.',
      preco: 'a definir',
      periodo: 'por mês',
      destaque: true,
      itens: [
        'Tudo do plano Rolê',
        'Histórico de todas as suas noites',
        'Dividir a conta com a galera da mesa',
        'Bares favoritos com aviso de lotação',
        'Vantagens nos estabelecimentos parceiros',
      ],
      cta: 'Quero o Rolê+',
    },
  ];
}
