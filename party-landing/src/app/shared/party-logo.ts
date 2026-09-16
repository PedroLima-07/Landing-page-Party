import { Component, input } from '@angular/core';

/** Marca do +party: quadrado azul com o "+" e o wordmark ao lado. */
@Component({
  selector: 'app-party-logo',
  template: `
    <span class="logo" [class.is-lg]="size() === 'lg'">
      <span class="mark" aria-hidden="true">+</span>
      <span class="word">party</span>
      @if (tag()) {
        <span class="tag">{{ tag() }}</span>
      }
    </span>
  `,
  styles: `
    .logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 1.35rem;
      letter-spacing: -0.03em;
      color: var(--text);
      line-height: 1;
    }
    .mark {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border-radius: 10px;
      background: linear-gradient(140deg, var(--brand-400), var(--brand-600));
      color: #fff;
      font-size: 1.4rem;
      font-weight: 700;
      box-shadow: 0 8px 20px -8px rgba(43, 87, 240, 0.9);
    }
    .word { font-weight: 700; }
    .tag {
      margin-left: 4px;
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--brand-300);
    }
    .is-lg { font-size: 2rem; }
    .is-lg .mark { width: 48px; height: 48px; border-radius: 14px; font-size: 2rem; }
  `,
})
export class PartyLogo {
  readonly size = input<'md' | 'lg'>('md');
  readonly tag = input<string>('');
}
