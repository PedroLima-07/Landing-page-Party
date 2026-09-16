import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PartyLogo } from './party-logo';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, PartyLogo],
  template: `
    <hr class="divider" />
    <footer class="ft">
      <div class="shell ft-inner">
        <div class="ft-brand">
          <app-party-logo />
          <p class="ft-line">
            O sistema de vida noturna que conecta quem sai para o rolê
            com os bares da cidade.
          </p>
        </div>

        <nav class="ft-nav" aria-label="Rodapé">
          <div class="col">
            <h3 class="col-t">Produto</h3>
            <a routerLink="/sobre">Sobre o sistema</a>
            <a routerLink="/planos/cliente">Planos — Cliente</a>
            <a routerLink="/planos/estabelecimento">Planos — Estabelecimento</a>
          </div>
          <div class="col">
            <h3 class="col-t">Projeto</h3>
            <a routerLink="/equipe">Nossa equipe</a>
            <a href="mailto:contato&#64;party.app">contato&#64;party.app</a>
          </div>
        </nav>
      </div>

      <div class="shell ft-base">
        <p class="credits">
          +party {{ ano }} · São Paulo — projeto acadêmico de
          Análise e Desenvolvimento de Sistemas.
        </p>
        <a routerLink="/equipe" class="link-quiet">
          Quem fez <span class="arrow">→</span>
        </a>
      </div>
    </footer>
  `,
  styles: `
    .ft { padding-block: clamp(44px, 6vw, 68px) 32px; }
    .ft-inner {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: clamp(32px, 6vw, 72px);
      align-items: start;
    }
    .ft-line { margin: 18px 0 0; max-width: 40ch; font-size: 0.94rem; }

    .ft-nav { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; }
    .col { display: flex; flex-direction: column; gap: 11px; }
    .col-t {
      margin: 0 0 4px;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-faint);
    }
    .col a {
      color: var(--text-muted);
      font-size: 0.93rem;
      text-decoration: none;
      transition: color 0.16s ease;
    }
    .col a:hover { color: var(--text); }

    .ft-base {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      align-items: center;
      justify-content: space-between;
      margin-top: clamp(36px, 5vw, 56px);
      padding-top: 22px;
      border-top: 1px solid var(--border);
    }
    .credits { margin: 0; font-size: 0.86rem; color: var(--text-faint); }

    @media (max-width: 760px) {
      .ft-inner { grid-template-columns: 1fr; }
    }
  `,
})
export class SiteFooter {
  readonly ano = new Date().getFullYear();
}
