import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Plano } from '../planos-cliente/planos-cliente';
import { Revela } from '../../shared/revela';

@Component({
  selector: 'app-planos-estabelecimento',
  imports: [RouterLink, Revela],
  templateUrl: './planos-estabelecimento.html',
  styleUrl: './planos-estabelecimento.scss',
})
export class PlanosEstabelecimento {
  readonly planos: Plano[] = [
    {
      nome: 'Balcão',
      resumo: 'Para o bar pequeno que quer tirar a comanda do papel.',
      preco: 'a definir',
      periodo: 'por mês',
      destaque: false,
      itens: [
        'Comandas digitais ilimitadas',
        'Tela de atendimento para a equipe',
        'Cardápio editável pelo painel',
        'Perfil do bar na plataforma',
        'Lotação publicada em tempo real',
      ],
      cta: 'Falar com o time',
    },
    {
      nome: 'Salão',
      resumo: 'Para quem já lota e precisa enxergar a operação inteira.',
      preco: 'a definir',
      periodo: 'por mês',
      destaque: true,
      itens: [
        'Tudo do plano Balcão',
        'Painel de gestão com vendas em tempo real',
        'Chamados de garçom por mesa',
        'Relatórios por dia, horário e item',
        'Múltiplos usuários de atendimento',
      ],
      cta: 'Falar com o time',
    },
    {
      nome: 'Casa',
      resumo: 'Para rede de bares e casas noturnas com mais de uma unidade.',
      preco: 'sob consulta',
      periodo: '',
      destaque: false,
      itens: [
        'Tudo do plano Salão',
        'Gestão de várias unidades num painel só',
        'Dashboard gerencial em Power BI',
        'Exportação de dados para o time de BI',
        'Suporte prioritário',
      ],
      cta: 'Falar com o time',
    },
  ];
}
