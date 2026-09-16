import { Component } from '@angular/core';

interface BarNaTela {
  nome: string;
  chamada: string;
  inicial: string;
}

interface Favorito {
  nome: string;
  nota: string;
  inicial: string;
}

/** A tela inicial do aplicativo, reproduzida a partir do protótipo do Figma. */
@Component({
  selector: 'app-phone-mock',
  template: `
    <div class="phone" role="img"
         aria-label="Tela inicial do aplicativo +party, com a comanda digital e os bares abertos agora">
      <div class="notch" aria-hidden="true"></div>

      <div class="screen" aria-hidden="true">
        <header class="saudacao">
          <p class="ola">Pronto para o rolê, Rafa?</p>
          <p class="sub">A noite da cidade começa aqui</p>
        </header>

        <div class="comanda">
          <div>
            <p class="comanda-t">Abrir comanda</p>
            <p class="comanda-b">Peça direto da mesa, sem fila no balcão</p>
          </div>
          <span class="comanda-ir">→</span>
        </div>

        <section class="bloco">
          <p class="bloco-t">Favoritos</p>
          <div class="favs">
            @for (f of favoritos; track f.nome) {
              <article class="fav">
                <span class="ico">{{ f.inicial }}</span>
                <p class="fav-n">{{ f.nome }}</p>
                <p class="fav-nota">★ {{ f.nota }}</p>
              </article>
            }
          </div>
        </section>

        <section class="bloco">
          <p class="bloco-t">Tá rolando agora</p>
          <div class="lista">
            @for (b of bares; track b.nome) {
              <article class="bar">
                <span class="ico">{{ b.inicial }}</span>
                <div class="bar-txt">
                  <p class="bar-n">{{ b.nome }}</p>
                  <p class="bar-c">{{ b.chamada }}</p>
                </div>
                <span class="entrar">Entrar</span>
              </article>
            }
          </div>
        </section>

        <nav class="tabbar">
          <span class="tab is-on"></span>
          <span class="tab"></span>
          <span class="tab"></span>
          <span class="tab"></span>
        </nav>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }

    .phone {
      position: relative;
      width: min(296px, 80vw);
      aspect-ratio: 296 / 600;
      margin-inline: auto;
      padding: 11px;
      border-radius: 44px;
      background: linear-gradient(160deg, #2a3350, #0d1224 55%);
      border: 1px solid rgba(255, 255, 255, 0.16);
      box-shadow:
        0 50px 100px -35px rgba(0, 0, 0, 0.95),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset,
        0 24px 70px -28px rgba(43, 87, 240, 0.6);
    }
    .notch {
      position: absolute;
      top: 19px; left: 50%;
      transform: translateX(-50%);
      width: 82px; height: 22px;
      border-radius: 99px;
      background: #05070e;
      z-index: 2;
    }

    .screen {
      height: 100%;
      border-radius: 34px;
      background: #080c18;
      border: 1px solid rgba(255, 255, 255, 0.06);
      padding: 50px 13px 0;
      display: flex;
      flex-direction: column;
      gap: 13px;
      overflow: hidden;
      text-align: left;
    }

    .saudacao .ola {
      margin: 0;
      font-family: var(--font-display);
      font-size: 0.98rem;
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.025em;
      color: #fff;
    }
    .saudacao .sub { margin: 3px 0 0; font-size: 0.58rem; color: var(--text-faint); }

    .comanda {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 11px 13px;
      border-radius: 15px;
      background: var(--brand-500);
      box-shadow: 0 12px 26px -12px rgba(43, 87, 240, 0.95);
    }
    .comanda-t {
      margin: 0;
      font-family: var(--font-display);
      font-size: 0.74rem;
      font-weight: 800;
      color: #fff;
    }
    .comanda-b { margin: 2px 0 0; font-size: 0.54rem; color: rgba(255, 255, 255, 0.78); }
    .comanda-ir {
      display: grid;
      place-items: center;
      flex: 0 0 22px;
      width: 22px; height: 22px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.22);
      color: #fff;
      font-size: 0.6rem;
    }

    .bloco-t {
      margin: 0 0 7px;
      font-family: var(--font-display);
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    .ico {
      display: grid;
      place-items: center;
      flex: 0 0 26px;
      width: 26px; height: 26px;
      border-radius: 9px;
      background: rgba(91, 130, 255, 0.16);
      border: 1px solid rgba(91, 130, 255, 0.28);
      font-family: var(--font-display);
      font-size: 0.6rem;
      font-weight: 800;
      color: var(--brand-300);
    }

    .favs { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .fav {
      padding: 10px;
      border-radius: 13px;
      background: rgba(255, 255, 255, 0.045);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .fav-n {
      margin: 8px 0 0;
      font-family: var(--font-display);
      font-size: 0.68rem;
      font-weight: 700;
      color: #fff;
    }
    .fav-nota { margin: 2px 0 0; font-size: 0.55rem; color: var(--warm); }

    .lista { display: grid; gap: 7px; }
    .bar {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 9px 10px;
      border-radius: 13px;
      background: rgba(255, 255, 255, 0.045);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .bar-txt { flex: 1; min-width: 0; }
    .bar-n {
      margin: 0;
      font-family: var(--font-display);
      font-size: 0.68rem;
      font-weight: 700;
      color: #fff;
    }
    .bar-c {
      margin: 1px 0 0;
      font-size: 0.53rem;
      color: var(--text-faint);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .entrar {
      flex: 0 0 auto;
      padding: 5px 11px;
      border-radius: 99px;
      background: var(--brand-500);
      font-family: var(--font-display);
      font-size: 0.55rem;
      font-weight: 700;
      color: #fff;
    }

    .tabbar {
      margin-top: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 13px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }
    .tab {
      width: 18px; height: 4px;
      border-radius: 99px;
      background: rgba(255, 255, 255, 0.14);
    }
    .tab.is-on { background: var(--brand-400); }
  `,
})
export class PhoneMock {
  readonly favoritos: Favorito[] = [
    { nome: "Bar D'20", nota: '4,5', inicial: 'BD' },
    { nome: 'Skyline Rooftop', nota: '4,7', inicial: 'SR' },
  ];

  readonly bares: BarNaTela[] = [
    { nome: 'Neon Club', chamada: 'Pista eletrônica até as 5h', inicial: 'NC' },
    { nome: "Bar D'20", chamada: 'Happy hour com chope dobrado', inicial: 'BD' },
    { nome: 'Skyline Rooftop', chamada: 'Vista aberta e drinks autorais', inicial: 'SR' },
    { nome: 'Tropicália', chamada: 'Samba ao vivo a partir das 22h', inicial: 'TR' },
  ];
}
