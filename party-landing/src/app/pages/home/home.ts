import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonaArt } from '../../shared/persona-art';
import { PhoneMock } from '../../shared/phone-mock';
import { Revela } from '../../shared/revela';

interface Persona {
  kind: 'cliente' | 'bar';
  chip: string;
  nome: string;
  papel: string;
  antes: string;
  depois: string[];
  ctaLabel: string;
  ctaLink: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, PersonaArt, PhoneMock, Revela],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly personas: Persona[] = [
    {
      kind: 'cliente',
      chip: 'Para quem sai',
      nome: 'A pessoa que vai pro rolê',
      papel: 'Cliente',
      antes:
        'Sai de casa sem saber se o bar está cheio, encara fila no balcão para pedir, ' +
        'recebe uma comanda de papel que some no meio da noite e termina a noite ' +
        'discutindo quem consumiu o quê.',
      depois: [
        'Vê a lotação do bar em tempo real antes de sair de casa',
        'Abre a comanda digital pelo próprio celular ao chegar',
        'Faz o pedido da mesa, sem levantar nem disputar o balcão',
        'Chama o garçom pelo app quando precisa',
        'Acompanha o total consumido a qualquer momento da noite',
      ],
      ctaLabel: 'Ver planos para clientes',
      ctaLink: '/planos/cliente',
    },
    {
      kind: 'bar',
      chip: 'Para quem recebe',
      nome: 'Quem toca o bar',
      papel: 'Dono do estabelecimento',
      antes:
        'Só descobre quanto vendeu quando fecha o caixa, perde comanda de papel toda ' +
        'semana, vê a equipe correndo de um lado para o outro e decide o próximo mês ' +
        'no achismo, sem nenhum dado na mão.',
      depois: [
        'Painel de gestão com vendas e lotação atualizando em tempo real',
        'Comandas digitais: nada de papel perdido ou valor cobrado errado',
        'Tela própria para a equipe receber e liberar os pedidos',
        'Relatórios do que vende, em que dia e em que horário',
        'Perfil do bar na plataforma, visível para quem procura onde ir',
      ],
      ctaLabel: 'Ver planos para bares',
      ctaLink: '/planos/estabelecimento',
    },
  ];
}
