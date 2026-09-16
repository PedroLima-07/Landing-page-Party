import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PartyLogo } from './party-logo';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, PartyLogo],
  template: `
    <header class="hd" [class.is-stuck]="stuck()">
      <div class="shell hd-inner">
        <a routerLink="/" class="brand" aria-label="+party — página inicial">
          <app-party-logo />
        </a>

        <button
          class="burger"
          type="button"
          [attr.aria-expanded]="open()"
          aria-controls="nav-principal"
          (click)="open.set(!open())"
        >
          <span class="visually-hidden">{{ open() ? 'Fechar menu' : 'Abrir menu' }}</span>
          <span class="bar" [class.x1]="open()"></span>
          <span class="bar" [class.x2]="open()"></span>
        </button>

        <nav id="nav-principal" class="nav" [class.is-open]="open()">
          <a routerLink="/sobre" routerLinkActive="active" (click)="open.set(false)">Sobre o sistema</a>
          <a routerLink="/planos/cliente" routerLinkActive="active" (click)="open.set(false)">Para clientes</a>
          <a routerLink="/planos/estabelecimento" routerLinkActive="active" (click)="open.set(false)">Para bares</a>
          <a routerLink="/equipe" routerLinkActive="active" (click)="open.set(false)">Equipe</a>
          <a class="btn-party nav-cta" routerLink="/" fragment="inicio" (click)="open.set(false)">
            Começar
          </a>
        </nav>
      </div>
    </header>
  `,
  styles: `
    .hd {
      position: fixed;
      inset: 0 0 auto;
      z-index: 60;
      height: var(--header-h);
      display: flex;
      align-items: center;
      transition: background 0.22s ease, border-color 0.22s ease, backdrop-filter 0.22s ease;
      border-bottom: 1px solid transparent;
    }
    .hd.is-stuck {
      background: rgba(7, 10, 18, 0.78);
      backdrop-filter: blur(14px);
      border-bottom-color: var(--border);
    }
    .hd-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .brand { text-decoration: none; }

    .nav { display: flex; align-items: center; gap: 28px; }
    .nav a {
      color: var(--text-muted);
      font-size: 0.93rem;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.16s ease;
    }
    .nav a:hover, .nav a.active { color: var(--text); }
    .nav-cta { padding: 10px 22px; font-size: 0.9rem; color: #fff !important; }

    .burger {
      display: none;
      position: relative;
      width: 42px; height: 42px;
      border: 1px solid var(--border);
      border-radius: 12px;
      background: var(--surface);
      cursor: pointer;
    }
    .bar {
      position: absolute;
      left: 11px;
      width: 18px; height: 2px;
      border-radius: 2px;
      background: var(--text);
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    .bar:first-of-type { top: 16px; }
    .bar:last-of-type  { top: 23px; }
    .bar.x1 { transform: translateY(3.5px) rotate(45deg); }
    .bar.x2 { transform: translateY(-3.5px) rotate(-45deg); }

    @media (max-width: 900px) {
      .burger { display: block; }
      .nav {
        position: absolute;
        top: var(--header-h);
        left: 12px; right: 12px;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
        padding: 14px;
        border-radius: var(--radius);
        border: 1px solid var(--border);
        background: rgba(7, 10, 18, 0.97);
        backdrop-filter: blur(16px);
        box-shadow: var(--shadow-soft);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);
        transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
      }
      .nav.is-open { opacity: 1; visibility: visible; transform: translateY(0); }
      .nav a { padding: 12px 10px; border-radius: 10px; }
      .nav a:hover { background: var(--surface-hover); }
      .nav-cta { margin-top: 8px; justify-content: center; }
    }
  `,
})
export class SiteHeader {
  readonly open = signal(false);
  readonly stuck = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.stuck.set(window.scrollY > 12);
  }
}
