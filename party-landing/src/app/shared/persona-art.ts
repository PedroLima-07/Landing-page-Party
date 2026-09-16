import { Component, input } from '@angular/core';

/**
 * Ilustrações humanas das duas personas (decisão de design do README:
 * pessoas, não blocos abstratos). SVG original, desenhado para o projeto.
 */
@Component({
  selector: 'app-persona-art',
  template: `
    @if (kind() === 'cliente') {
      <svg viewBox="0 0 320 260" role="img" [attr.aria-label]="alt()">
        <defs>
          <linearGradient id="pcSky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#2b57f0" stop-opacity=".30" />
            <stop offset="1" stop-color="#5b82ff" stop-opacity=".04" />
          </linearGradient>
          <linearGradient id="pcPhone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#5b82ff" />
            <stop offset="1" stop-color="#1e3fc4" />
          </linearGradient>
        </defs>

        <circle cx="160" cy="124" r="104" fill="url(#pcSky)" />
        <circle cx="160" cy="124" r="104" fill="none" stroke="#5b82ff" stroke-opacity=".18" />

        <!-- luzes da noite -->
        <circle cx="76"  cy="62"  r="3"   fill="#ffb25c" opacity=".85" />
        <circle cx="246" cy="78"  r="2.4" fill="#8fabff" opacity=".8" />
        <circle cx="255" cy="168" r="3.2" fill="#ffb25c" opacity=".55" />
        <circle cx="66"  cy="176" r="2.2" fill="#8fabff" opacity=".7" />

        <!-- figura -->
        <path d="M118 238c0-34 19-56 42-56s42 22 42 56z" fill="#1c2540" />
        <path d="M118 238c0-34 19-56 42-56s42 22 42 56z" fill="none" stroke="#5b82ff" stroke-opacity=".35" />
        <circle cx="160" cy="150" r="25" fill="#2a3560" />
        <circle cx="160" cy="150" r="25" fill="none" stroke="#8fabff" stroke-opacity=".4" />
        <path d="M137 141c4-15 42-15 46 0-6-7-40-7-46 0z" fill="#8fabff" opacity=".55" />

        <!-- braço + celular -->
        <rect x="196" y="120" width="44" height="72" rx="11" fill="url(#pcPhone)" />
        <rect x="202" y="128" width="32" height="50" rx="5" fill="#070a12" opacity=".65" />
        <rect x="207" y="136" width="22" height="3.5" rx="1.75" fill="#8fabff" opacity=".9" />
        <rect x="207" y="145" width="15" height="3.5" rx="1.75" fill="#8fabff" opacity=".55" />
        <rect x="207" y="158" width="22" height="9" rx="4.5" fill="#ffb25c" opacity=".9" />
        <path d="M188 196c6-12 12-22 16-28" stroke="#2a3560" stroke-width="13" stroke-linecap="round" fill="none" />
      </svg>
    } @else {
      <svg viewBox="0 0 320 260" role="img" [attr.aria-label]="alt()">
        <defs>
          <linearGradient id="pbSky" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#ffb25c" stop-opacity=".16" />
            <stop offset="1" stop-color="#2b57f0" stop-opacity=".18" />
          </linearGradient>
        </defs>

        <circle cx="160" cy="124" r="104" fill="url(#pbSky)" />
        <circle cx="160" cy="124" r="104" fill="none" stroke="#ffb25c" stroke-opacity=".16" />

        <!-- prateleira -->
        <rect x="70" y="54" width="180" height="3" rx="1.5" fill="#2a3560" />
        <rect x="92"  y="30" width="13" height="24" rx="4" fill="#5b82ff" opacity=".65" />
        <rect x="114" y="22" width="13" height="32" rx="4" fill="#ffb25c" opacity=".55" />
        <rect x="136" y="34" width="13" height="20" rx="4" fill="#8fabff" opacity=".5" />
        <rect x="196" y="26" width="13" height="28" rx="4" fill="#5b82ff" opacity=".45" />
        <rect x="218" y="36" width="13" height="18" rx="4" fill="#ffb25c" opacity=".4" />

        <!-- figura atrás do balcão -->
        <circle cx="160" cy="112" r="25" fill="#2a3560" />
        <circle cx="160" cy="112" r="25" fill="none" stroke="#ffb25c" stroke-opacity=".35" />
        <path d="M139 104c3-16 39-16 42 0-7-6-35-6-42 0z" fill="#8fabff" opacity=".5" />
        <path d="M122 186c0-28 17-46 38-46s38 18 38 46z" fill="#1c2540" />
        <path d="M122 186c0-28 17-46 38-46s38 18 38 46z" fill="none" stroke="#ffb25c" stroke-opacity=".25" />

        <!-- balcão -->
        <rect x="58" y="186" width="204" height="14" rx="7" fill="#2a3560" />
        <rect x="58" y="200" width="204" height="38" rx="8" fill="#141c34" />
        <rect x="58" y="200" width="204" height="38" rx="8" fill="none" stroke="#5b82ff" stroke-opacity=".2" />

        <!-- painel de gestão sobre o balcão -->
        <rect x="80" y="209" width="66" height="21" rx="6" fill="#070a12" opacity=".8" />
        <rect x="86" y="221" width="8"  height="5" rx="1.5" fill="#5b82ff" />
        <rect x="98" y="217" width="8"  height="9" rx="1.5" fill="#8fabff" />
        <rect x="110" y="213" width="8" height="13" rx="1.5" fill="#ffb25c" />
        <rect x="122" y="218" width="8" height="8" rx="1.5" fill="#5b82ff" opacity=".7" />
        <rect x="176" y="209" width="66" height="21" rx="6" fill="#070a12" opacity=".8" />
        <rect x="184" y="214" width="34" height="4" rx="2" fill="#8fabff" opacity=".85" />
        <rect x="184" y="222" width="22" height="4" rx="2" fill="#ffb25c" opacity=".7" />
      </svg>
    }
  `,
  styles: `
    :host { display: block; }
    svg { width: 100%; height: auto; }
  `,
})
export class PersonaArt {
  readonly kind = input.required<'cliente' | 'bar'>();
  readonly alt = input('');
}
