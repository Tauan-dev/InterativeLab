# InterativeLab — Plataforma de análise de desempenho no futebol

## Resumo rápido

InterativeLab é uma landing page e front-end estático para um sistema de análise de desempenho no futebol. O repositório contém a versão atualizada da interface (HTML/CSS/JS), organizada com foco em responsividade, acessibilidade e separação de responsabilidades no CSS.

## Status do projeto

- UI/UX: modernizada e reorganizada (header, hero, funcionalidades, equipe e footer).
- CSS: dividido em `css/base.css`, `css/layout.css`, `css/components.css` para facilitar manutenção.
- Scripts: comportamento de menu centralizado em `js/site.js` (vanilla JS).

## Tecnologias

- HTML5
- CSS (modular, mobile-first)
- JavaScript (vanilla)
- Recursos estáticos: imagens em `imagens/` e `uploads/`

## Estrutura principal do repositório

- `index.html` — entrada principal (landing page atualizada)
- `css/` — estilos organizados
  - `base.css` — variáveis, reset e tipografia
  - `layout.css` — grid, header, hero, footer
  - `components.css` — botões, cards, utilitários
- `js/site.js` — menu toggle e comportamentos globais
- `imagens/`, `uploads/` — assets de imagem
- `legacy/` — backups dos arquivos antigos (header/content/footer/index)

## O que foi atualizado (resumo técnico)

- HTML reestruturado com seções semânticas e atributos ARIA mínimos para navegação.
- CSS separado por responsabilidade (base/layout/components) para facilitar overrides e manutenção.
- Avatares da equipe padronizados como imagens circulares recortadas (`object-fit:cover`).
- Ícones de perfil: adicionados `imagens/linkedin.svg` e `imagens/lattes.svg` e aplicados aos perfis apropriados.
- Menu móvel implementado com `js/site.js` e classes CSS (`.nav ul.show`).

## Contribuindo

- Crie uma branch para cada conjunto de alterações: `feature/descricao-curta`.
- Faça commits claros e atômicos.
- Abra um Pull Request com descrição das mudanças e screenshots quando relevante.

## Licença

Reservado a equipe GEPECOM

## Contato

Equipe GEPECOM — gepecom@uesc.br

## Histórico de alterações (breve)

- v1.0 — Refatoração UI/UX e separação de CSS (hoje).
