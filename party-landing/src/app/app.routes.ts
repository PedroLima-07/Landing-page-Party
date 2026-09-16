import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: '+party | Seu rolê começa aqui',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'sobre',
    title: 'Sobre o sistema | +party',
    loadComponent: () => import('./pages/sobre/sobre').then((m) => m.Sobre),
  },
  {
    path: 'planos/cliente',
    title: 'Planos para clientes | +party',
    loadComponent: () =>
      import('./pages/planos-cliente/planos-cliente').then((m) => m.PlanosCliente),
  },
  {
    path: 'planos/estabelecimento',
    title: 'Planos para estabelecimentos | +party',
    loadComponent: () =>
      import('./pages/planos-estabelecimento/planos-estabelecimento').then(
        (m) => m.PlanosEstabelecimento,
      ),
  },
  {
    path: 'equipe',
    title: 'Nossa equipe | +party',
    loadComponent: () => import('./pages/equipe/equipe').then((m) => m.Equipe),
  },
  { path: '**', redirectTo: '' },
];
