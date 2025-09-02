# Explicação dos Arquivos JavaScript do Projeto

Este documento detalha o papel e funcionamento de cada arquivo JS presente no projeto “Mapa Mental — Revisão de Desenvolvimento Web”.

## js/mapa-mental.js
- **Função:** Renderiza o mapa mental interativo na página inicial (`index.html`).
- **Como funciona:**
  - Define a estrutura do mapa mental em um objeto JavaScript.
  - Cria dinamicamente a árvore de tópicos, permitindo expandir/colapsar nós com setinhas.
  - Adiciona tooltips (dica de texto) nos principais tópicos.
  - O nó raiz já inicia expandido.
- **Onde é usado:** Apenas na home (`index.html`).

## js/tags-frontend.js
- **Função:** Injeta o conteúdo explicativo sobre Tags HTML e Frontend na página `tags-frontend.html`.
- **Como funciona:**
  - Monta um bloco HTML com tópicos, exemplos e destaques usando `<code>`.
  - Insere esse conteúdo no elemento `#conteudo-tags`.
  - Não possui interatividade além da navegação.
- **Onde é usado:** `tags-frontend.html`.

## js/variaveis-tipos.js
- **Função:** Injeta conteúdo sobre variáveis, tipos e funções em JavaScript, e executa uma demonstração interativa.
- **Como funciona:**
  - Insere explicações e exemplos no elemento `#conteudo-variaveis`.
  - Adiciona um botão “Testar no Console”.
  - Ao clicar, executa a função `demoVariaveis()`:
    - Cria variáveis de exemplo, mostra tipos com `typeof`, manipula arrays e exibe um número aleatório.
    - Exibe a saída tanto em um bloco `<pre><code>` na página quanto no Console do navegador.
- **Onde é usado:** `variaveis-tipos.html`.

## js/operadores-condicionais.js
- **Função:** Injeta conteúdo sobre operadores e estruturas condicionais, com demo interativa.
- **Como funciona:**
  - Insere explicações e exemplos no elemento `#conteudo-operadores`.
  - Adiciona um botão “Testar Condicional”.
  - Ao clicar, executa a função `demoCondicional()`:
    - Solicita a idade do usuário (prompt) ou usa um valor padrão.
    - Mostra se é maior ou menor de idade e o status (Adulto/Menor) usando operador ternário.
    - Exibe a saída em um bloco `<pre><code>` na página e no Console.
- **Onde é usado:** `operadores-condicionais.html`.

## js/repeticao-interacao.js
- **Função:** Injeta conteúdo sobre estruturas de repetição e interação, com demo prática.
- **Como funciona:**
  - Insere explicações e exemplos no elemento `#conteudo-repeticao`.
  - Adiciona um botão “Testar Repetição”.
  - Ao clicar, executa a função `demoRepeticao()`:
    - Demonstra vários laços: for, forEach, for..of, while, do..while.
    - Mostra a saída de cada laço em um bloco `<pre><code>` na página e no Console.
- **Onde é usado:** `repeticao-interacao.html`.

## js/theme.js
- **Função:** Gerencia o modo claro/escuro do site.
- **Como funciona:**
  - Aplica a classe `dark` no elemento `<html>` conforme a preferência salva no localStorage.
  - Fornece a função global `toggleTheme()` para alternar o tema ao clicar no botão flutuante.
  - Atualiza o ícone do botão (🌙/☀️) conforme o tema ativo.
  - Garante que o tema seja aplicado antes da página ser exibida, evitando "flash" de tema errado.
- **Onde é usado:** Em todas as páginas, junto com o botão de alternância.

---

## Observações Gerais
- Todos os scripts são carregados como arquivos externos, mantendo o HTML limpo e organizado.
- As demonstrações interativas mostram resultados tanto na página quanto no Console, incentivando o uso das ferramentas do navegador.
- O código é comentado e modular, facilitando manutenção e expansão.

---

## Principais Tags HTML Utilizadas

O projeto utiliza as tags HTML mais importantes para estruturação, semântica e acessibilidade. Veja as principais:

| Tag         | Exemplo                              | Para que serve?                                                                 |
|-------------|--------------------------------------|---------------------------------------------------------------------------------|
| `<!DOCTYPE>`| `<!DOCTYPE html>`                    | Define o tipo do documento e ativa o modo padrão do navegador.                   |
| `<html>`    | `<html lang="pt-br">`               | Raiz do documento; atributo `lang` indica o idioma.                              |
| `<head>`    | `<head> ... </head>`                  | Metadados, links de CSS, título, charset, etc.                                   |
| `<meta>`    | `<meta charset="UTF-8">`            | Define metadados como codificação, viewport, etc.                                |
| `<title>`   | `<title>Minha Página</title>`         | Título exibido na aba do navegador.                                              |
| `<link>`    | `<link rel="stylesheet" ...>`        | Importa arquivos externos (CSS, favicon).                                        |
| `<body>`    | `<body> ... </body>`                  | Conteúdo visível da página.                                                      |
| `<header>`  | `<header> ... </header>`              | Cabeçalho da página ou seção.                                                    |
| `<main>`    | `<main> ... </main>`                  | Conteúdo principal, único por página.                                            |
| `<nav>`     | `<nav> ... </nav>`                    | Navegação principal ou secundária.                                               |
| `<h1>...<h6>`| `<h1>Título</h1>`                    | Títulos e subtítulos, estruturam a hierarquia do conteúdo.                       |
| `<div>`     | `<div id="conteudo"> ... </div>`     | Container genérico para agrupar elementos.                                       |
| `<ul>`      | `<ul><li>Item</li></ul>`              | Lista não ordenada.                                                             |
| `<li>`      | `<li>Item</li>`                       | Item de lista (usado dentro de `<ul>` ou `<ol>`).                                |
| `<button>`  | `<button>OK</button>`                 | Botão interativo.                                                               |
| `<a>`       | `<a href="...">Link</a>`             | Link para navegação entre páginas ou sites.                                      |
| `<script>`  | `<script src="app.js"></script>`     | Importa e executa código JavaScript.                                             |
| `<pre>`     | `<pre>texto pré-formatado</pre>`       | Exibe texto com espaçamento e quebras preservados (usado para código).           |
| `<code>`    | `<code>let x = 1;</code>`             | Destaca trechos de código ou comandos.                                           |

Essas tags garantem estrutura semântica, acessibilidade e flexibilidade para estilização e interatividade.

**Autores:** FERNANDO ALVES DE SOUZA, FELIPE MONTALVÃO
