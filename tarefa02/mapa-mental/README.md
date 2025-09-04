# Mapa Mental — Revisão de Desenvolvimento Web

Projeto estático com um mapa mental interativo e quatro páginas de conteúdo, cobrindo conceitos essenciais de HTML, CSS e JavaScript.

Autores: FERNANDO ALVES DE SOUZA, FELIPE MONTALVÃO

## Visão geral
- Página inicial com um mapa mental interativo (expandir/colapsar) e tooltips explicativos.
- Quatro subpáginas temáticas, cada uma com conteúdo gerado por JavaScript e demonstrações executáveis:
  - Tags HTML & Frontend
  - Variáveis & Tipos
  - Operadores & Condicionais
  - Repetição & Interação
- Estilo moderno com “cards”, realce de código (estilo VS Code), ícones (favicon) específicos por página.
- Modo escuro com alternância e persistência (salvo em localStorage).

## Estrutura de pastas
```
mapa-mental/
├─ html/                  # Páginas HTML
│  ├─ index.html          # Home com o mapa mental
│  ├─ tags-frontend.html
│  ├─ variaveis-tipos.html
│  ├─ operadores-condicionais.html
│  └─ repeticao-interacao.html
├─ css/                   # Estilos
│  ├─ style.css           # Estilos da home/árvore
│  ├─ tags-frontend.css   # Tema azul
│  ├─ variaveis-tipos.css # Tema verde
│  ├─ operadores-condicionais.css # Tema âmbar
│  ├─ repeticao-interacao.css     # Tema azul-profundo
│  └─ dark.css            # Overrides do modo escuro + botão flutuante
├─ js/                    # Scripts
│  ├─ mapa-mental.js      # Renderiza a árvore interativa
│  ├─ tags-frontend.js    # Injeta conteúdo (Tags)
│  ├─ variaveis-tipos.js  # Injeta conteúdo + demo com saída na página
│  ├─ operadores-condicionais.js  # Demo com saída na página
│  ├─ repeticao-interacao.js      # Demo com saída na página
│  └─ theme.js            # Alternância de tema (claro/escuro)
└─ img/                   # Ícones (favicons)
   ├─ icon-home.svg
   ├─ icon-tags.svg
   ├─ icon-variaveis.svg
   ├─ icon-operadores.svg
   └─ icon-repeticao.svg
```

## Como usar
- Abra `html/index.html` no navegador.
- Navegue pelo mapa mental e use o menu para acessar as subpáginas.
- Clique nos botões “Testar …” para ver as demonstrações:
  - A saída aparece em um bloco de código na página e também no Console do navegador (F12 → Console).

## Recursos principais
- Mapa mental interativo
  - Cliques em nós expandem/colapsam; tooltips nos itens.
  - Layout centralizado, com leve brilho/hover.
- Temas por página
  - Cada subpágina tem uma paleta própria com tipografia e espaçamentos consistentes.
- Realce de código
  - Uso de `<pre><code>` com estilos inspirados no VS Code.
- Modo escuro
  - Botão flutuante (ícone 🌙/☀️) no canto inferior direito.
  - Preferência é salva em `localStorage` (mantém após recarregar a página).
- Ícones por página
  - Favicons únicos para a Home e cada subpágina.

## Notas de implementação
- O modo escuro aplica a classe `dark` no elemento `<html>`, com overrides definidos em `css/dark.css`.
- As subpáginas têm conteúdo injetado via JavaScript para manter HTML limpo e focado na estrutura.
- Scripts de demonstração mostram resultados na página e no Console para reforçar conceitos.

## Ajustes rápidos
- Cores/estética: altere os temas em `css/*.css` e os acentos do modo escuro em `css/dark.css`.
- Conteúdo: edite os arquivos em `js/*.js` das subpáginas para ampliar exemplos.
- Ícones: substitua os SVGs em `img/` ou adicione novos.

## Créditos
- Autores: FERNANDO ALVES DE SOUZA, FELIPE MONTALVÃO
- Orientação e suporte: material didático da disciplina de DCS.
