import { Component } from '@angular/core';

interface BarNaTela {
  nome: string;
  bairro: string;
  distancia: string;
  lotacao: number;
  estado: 'tranquilo' | 'movimentado' | 'lotado';
}

/** O app do +party na mão de quem sai: a tela de bares com lotação ao vivo. */
@Component({
  selector: 'app-phone-mock',
  template: `
    <div class="phone" role="img"
         aria-label="Tela do aplicativo +party mostrando bares próximos com a lotação em tempo real">
      <div class="notch" aria-hidden="true"></div>

      <div class="screen" aria-hidden="true">
        <header class="top">
          <div>
            <p class="hi">Hoje à noite</p>
            <p class="cidade">São Paulo · Vila Madalena</p>
          </div>
          <span class="ao-vivo"><i></i>ao vivo</span>
        </header>

        <div class="lista">
          @for (b of bares; track b.nome) {
            <article class="bar" [attr.data-estado]="b.estado">
              <div class="bar-topo">
                <span class="bar-nome">{{ b.nome }}</span>
                <span class="bar-dist">{{ b.distancia }}</span>
              </div>
              <p class="bar-bairro">{{ b.bairro }}</p>

              <div class="barra">
                <span class="preenche" [style.width.%]="b.lotacao"></span>
              </div>
              <p class="bar-estado">{{ rotulo(b.estado) }} · {{ b.lotacao }}%</p>
            </article>
          }
        </div>

        <div class="comanda">
          <div>
            <p class="comanda-t">Comanda aberta</p>
            <p class="comanda-b">Boteco do Zé · mesa 12</p>
          </div>
          <span class="comanda-v">R$ 68</span>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }

    .phone {
      position: relative;
      width: min(300px, 82vw);
      aspect-ratio: 300 / 610;
      margin-inline: auto;
      padding: 12px;
      border-radius: 42px;
      background: linear-gradient(160deg, #222b45, #0d1224 55%);
      border: 1px solid rgba(255, 255, 255, 0.14);
      box-shadow:
        0 60px 120px -40px rgba(0, 0, 0, 0.9),
        0 0 0 1px rgba(255, 255, 255, 0.04) inset,
        0 30px 80px -30px rgba(43, 87, 240, 0.55);
    }
    .notch {
      position: absolute;
      top: 20px; left: 50%;
      transform: translateX(-50%);
      width: 86px; height: 6px;
      border-radius: 99px;
      background: rgba(255, 255, 255, 0.18);
      z-index: 2;
    }

    .screen {
      height: 100%;
      border-radius: 31px;
      background: linear-gradient(180deg, #0a0f1f, #070a12);
      border: 1px solid rgba(255, 255, 255, 0.07);
      padding: 34px 14px 14px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow: hidden;
      text-align: left;
    }

    .top { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
    .hi {
      margin: 0;
      font-family: var(--font-display);
      font-size: 0.95rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: var(--text);
    }
    .cidade { margin: 2px 0 0; font-size: 0.6rem; color: var(--text-faint); }
    .ao-vivo {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 4px 8px;
      border-radius: 99px;
      background: rgba(91, 130, 255, 0.14);
      border: 1px solid rgba(91, 130, 255, 0.3);
      font-size: 0.55rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--brand-300);
    }
    .ao-vivo i {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: var(--brand-400);
      animation: pulsa 1.8s ease-in-out infinite;
    }
    @keyframes pulsa { 50% { opacity: 0.25; } }

    .lista { display: grid; gap: 9px; flex: 1; align-content: start; }

    .bar {
      padding: 10px 11px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.045);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .bar-topo { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
    .bar-nome {
      font-family: var(--font-display);
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: var(--text);
    }
    .bar-dist { font-size: 0.57rem; color: var(--text-faint); }
    .bar-bairro { margin: 1px 0 8px; font-size: 0.57rem; color: var(--text-faint); }

    .barra {
      height: 5px;
      border-radius: 99px;
      background: rgba(255, 255, 255, 0.09);
      overflow: hidden;
    }
    .preenche { display: block; height: 100%; border-radius: 99px; }
    .bar-estado {
      margin: 6px 0 0;
      font-size: 0.56rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .bar[data-estado="tranquilo"]   .preenche { background: var(--brand-400); }
    .bar[data-estado="tranquilo"]   .bar-estado { color: var(--brand-300); }
    .bar[data-estado="movimentado"] .preenche { background: var(--warm); }
    .bar[data-estado="movimentado"] .bar-estado { color: var(--warm); }
    .bar[data-estado="lotado"]      .preenche { background: linear-gradient(90deg, var(--warm), #ff6b6b); }
    .bar[data-estado="lotado"]      .bar-estado { color: #ff8f8f; }

    .comanda {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 16px;
      background: var(--brand-500);
      box-shadow: 0 14px 30px -14px rgba(43, 87, 240, 0.9);
    }
    .comanda-t {
      margin: 0;
      font-family: var(--font-display);
      font-size: 0.68rem;
      font-weight: 800;
      color: #fff;
    }
    .comanda-b { margin: 1px 0 0; font-size: 0.55rem; color: rgba(255, 255, 255, 0.75); }
    .comanda-v {
      font-family: var(--font-display);
      font-size: 0.95rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #fff;
    }
  `,
})
export class PhoneMock {
  readonly bares: BarNaTela[] = [
    { nome: 'Boteco do Zé', bairro: 'Rua Aspicuelta', distancia: '450 m', lotacao: 38, estado: 'tranquilo' },
    { nome: 'Bar da Esquina', bairro: 'Rua Fidalga', distancia: '1,2 km', lotacao: 71, estado: 'movimentado' },
    { nome: 'Cervejaria Norte', bairro: 'Rua Girassol', distancia: '1,8 km', lotacao: 94, estado: 'lotado' },
    { nome: 'Quintal da Vila', bairro: 'Rua Harmonia', distancia: '2,1 km', lotacao: 52, estado: 'tranquilo' },
  ];

  rotulo(estado: BarNaTela['estado']): string {
    return { tranquilo: 'Tranquilo', movimentado: 'Movimentado', lotado: 'Lotado' }[estado];
  }
}
