<div align="center">

# +party — Landing Page

**A porta de entrada do +party.**

Página de apresentação pública do sistema, para clientes e donos de bar.

</div>

---

## Sobre

Esta é a landing page do **+party**, o sistema de vida noturna que conecta quem sai para o rolê
com os bares da cidade. Ela cumpre um papel específico: apresentar o produto para dois públicos
diferentes na mesma página e encaminhar cada visitante para o cadastro certo.

É a única peça do projeto que fala com os dois lados ao mesmo tempo — por isso mantém a
identidade visual da marca (azul), sem replicar as cores usadas internamente para diferenciar
os acessos do sistema.

> O sistema completo (cliente, gerente e bar/cozinha) fica em repositório separado:
> [Startup-PlusParty](https://github.com/PedroLima-07/Startup-PlusParty)

---

## Estrutura da página

**Página principal**

| Seção | Conteúdo |
|---|---|
| **Início** | Apresentação do +party, com a escolha de perfil (cliente ou dono de bar) e um caminho alternativo para quem ainda quer entender melhor |
| **Para que serve** | Duas personas — um cliente e um dono de bar — cada uma com a situação antes do +party e como o sistema resolve seu problema |
| **Contato** | Canal de e-mail para dúvidas e parcerias |
| **Rodapé** | Créditos do projeto e link para a página da equipe |

**Páginas secundárias**

- **Sobre o sistema** — detalhamento das duas visões (rolezeiro e dono do estabelecimento)
- **Planos — Cliente** — opções disponíveis para o público final, levando ao cadastro
- **Planos — Estabelecimento** — opções para bares, levando ao cadastro
- **Nossa equipe** — os integrantes por trás do projeto

---

## Decisões de design

- **Fundo contínuo.** A página inteira compartilha uma única superfície de fundo, sem cortes
  entre seções. Cada seção é diferenciada por variações sutis de iluminação, não por blocos de
  cor distintos.
- **Escuro, mas acolhedor.** A atmosfera noturna é mantida, evitando a frieza de um visual
  excessivamente técnico. Uma cor de apoio quente é usada com moderação para quebrar a
  monocromia.
- **Ilustrações humanas.** As personas são acompanhadas de ilustrações, e não de blocos
  abstratos, para que o visitante se identifique com o problema antes de conhecer o produto.
- **Um ponto de decisão.** A escolha de perfil acontece uma única vez, logo no topo da página,
  evitando que o visitante precise se identificar mais de uma vez ao longo da navegação.

---

## Tecnologias

- **Angular 22** (standalone components, rotas com lazy loading)
- **TypeScript** e **SCSS**
- **Bootstrap 5.3** (carregado pelo `angular.json`)
- Fonte **Inter**, via Google Fonts

Protótipo desenhado no Figma.

---

## Estrutura de arquivos

```
party-landing/
├── angular.json
├── package.json
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.scss              # design system: tokens, fundo contínuo, botões
    └── app/
        ├── app.ts / app.html    # shell: header + router-outlet + footer
        ├── app.routes.ts
        ├── shared/              # logo, header, footer, ilustrações das personas
        └── pages/
            ├── home/
            ├── sobre/
            ├── planos-cliente/
            ├── planos-estabelecimento/
            └── equipe/
```

---

## Como rodar

Requer **Node.js 22.22.3+** (ou 24.15+), exigência do Angular 22.

```bash
# Clonar o repositório
git clone https://github.com/PedroLima-07/Landing-page-Party.git
cd Landing-page-Party/party-landing

# Instalar as dependências
npm install

# Rodar em modo desenvolvimento -> http://localhost:4200
npm start

# Gerar o build de produção em dist/
npm run build
```

---

## Status

🚧 **Em desenvolvimento.**

Já implementado: página principal com as 4 seções, as 4 páginas secundárias,
design system, header responsivo e rodapé.

Pendente:

- Valores dos planos (aguardando a definição de monetização no Lean Canvas)
- Formulário de cadastro real — hoje os CTAs apontam para a seção de contato
- Publicação da página

---

<div align="center">
<sub>Projeto acadêmico · Análise e Desenvolvimento de Sistemas</sub>
</div>
