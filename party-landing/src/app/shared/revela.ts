import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

/**
 * Faz o elemento aparecer quando ele entra na tela, uma única vez.
 *
 * A diretiva não anima nada: ela só marca o momento, acrescentando a classe
 * `is-visivel`. A animação em si (o `.revela` do design system) fica no
 * `styles.scss`, junto com o resto das decisões visuais.
 *
 * ```html
 * <article revela>...</article>
 * <article revela="120">...</article>   <!-- entra 120ms depois do vizinho -->
 * ```
 */
@Directive({
  selector: '[revela]',
})
export class Revela implements AfterViewInit, OnDestroy {
  /** Atraso, em milissegundos, para escalonar blocos que entram na tela juntos. */
  readonly revela = input<number | string>(0);

  private readonly elemento: HTMLElement = inject(ElementRef).nativeElement;
  private observador?: IntersectionObserver;

  constructor() {
    // Aplicada aqui, e não no template, para que o estado inicial escondido
    // exista antes da primeira pintura e o bloco não pisque na tela.
    this.elemento.classList.add('revela');
  }

  ngAfterViewInit(): void {
    const atraso = Number(this.revela()) || 0;
    if (atraso > 0) {
      this.elemento.style.setProperty('--revela-atraso', `${atraso}ms`);
    }

    // Navegador sem IntersectionObserver: mostra tudo de uma vez, porque
    // conteúdo escondido é pior que conteúdo sem animação.
    if (typeof IntersectionObserver === 'undefined') {
      this.mostrar();
      return;
    }

    this.observador = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          this.mostrar();
        }
      },
      // A margem de baixo adia um pouco a entrada: o bloco aparece já dentro
      // da tela, e não colado na borda inferior.
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );
    this.observador.observe(this.elemento);
  }

  ngOnDestroy(): void {
    this.observador?.disconnect();
  }

  private mostrar(): void {
    this.elemento.classList.add('is-visivel');
    this.observador?.disconnect();
    this.observador = undefined;
  }
}
