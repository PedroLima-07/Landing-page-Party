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
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 1.5rem;
      letter-spacing: -0.045em;
      color: #fff;
      line-height: 1;
    }
    .mark {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border-radius: 11px;
      background: var(--brand-500);
      border: 1px solid rgba(255, 255, 255, 0.22);
      color: #fff;
      font-size: 1.5rem;
      font-weight: 800;
      box-shadow:
        0 0 0 4px rgba(43, 87, 240, 0.16),
        0 10px 26px -8px rgba(43, 87, 240, 1);
    }
    .word { font-weight: 800; color: #fff; }
    .tag {
      margin-left: 4px;
      font-size: 0.62rem;
      font-weight: 600;
      letter-spacing: 0.2em;
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
