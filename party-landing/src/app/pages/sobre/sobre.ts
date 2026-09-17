import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonaArt } from '../../shared/persona-art';
import { Revela } from '../../shared/revela';

interface Visao {
  kind: 'cliente' | 'bar';
  titulo: string;
  sub: string;
  blocos: { t: string; d: string }[];
  ctaLabel: string;
  ctaLink: string;
}

@Component({
  selector: 'app-sobre',
  imports: [RouterLink, PersonaArt, Revela],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  readonly visoes: Visao[] = [
    {
      kind: 'cliente',
      titulo: 'A visão do rolezeiro',
      sub: 'Aplicativo no celular, do "pra onde a gente vai?" até fechar a conta.',
      blocos: [
        {
          t: 'Descobrir o bar',
          d: 'Lista dos bares da cidade com a lotação atualizada em tempo real. Dá para ver quem está cheio, quem está vazio e decidir antes de sair de casa.',
        },
        {
          t: 'Abrir a comanda',
          d: 'Ao chegar, o cliente informa a mesa ou o balcão e abre a comanda digital. A comanda fica pendente até a equipe do bar liberar.',
        },
        {
          t: 'Pedir da mesa',
          d: 'Cardápio completo no celular. O pedido vai direto para a tela da equipe, sem fila no balcão e sem anotação em papel.',
        },
        {
          t: 'Chamar o garçom',
          d: 'Um toque chama o atendente até a mesa. O botão fica desabilitado por alguns segundos para evitar chamadas repetidas.',
        },
        {
          t: 'Acompanhar o total',
          d: 'O valor consumido fica visível durante toda a noite. Nada de surpresa na hora de fechar.',
        },
      ],
      ctaLabel: 'Ver planos para clientes',
      ctaLink: '/planos/cliente',
    },
    {
      kind: 'bar',
      titulo: 'A visão do estabelecimento',
      sub: 'Painel web para quem administra e tela dedicada para quem atende.',
      blocos: [
        {
          t: 'Painel de gestão',
          d: 'O dono acompanha vendas, lotação e movimento do salão em tempo real, sem esperar o fechamento do caixa.',
        },
        {
          t: 'Comandas sob controle',
          d: 'Todas as comandas abertas em uma lista só, com mesa, horário e status. Comanda digital não se perde e não é cobrada errada.',
        },
        {
          t: 'Tela da equipe',
          d: 'Atendentes têm acesso próprio: liberam comandas, recebem pedidos e respondem aos chamados das mesas.',
        },
        {
          t: 'Cardápio editável',
          d: 'O bar mantém itens, preços e disponibilidade atualizados. O que muda no painel aparece na hora no app do cliente.',
        },
        {
          t: 'Relatórios e BI',
          d: 'Histórico de vendas por dia, horário e item, com dashboard gerencial para embasar as decisões do próximo mês.',
        },
      ],
      ctaLabel: 'Ver planos para bares',
      ctaLink: '/planos/estabelecimento',
    },
  ];
}
