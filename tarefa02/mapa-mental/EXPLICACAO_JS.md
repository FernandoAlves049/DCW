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

## A Tag `<script>`: Como o JavaScript é Adicionado

Para que o código JavaScript seja executado em uma página HTML, ele precisa ser incluído usando a tag `<script>`. Existem duas formas principais de fazer isso:

### 1. Script Externo (External Script)

Esta é a abordagem **recomendada** e a utilizada em todo o projeto. O código fica em um arquivo `.js` separado e é "puxado" para o HTML.

- **Vantagens**:
  - **Organização**: Separa o HTML (estrutura) do JavaScript (comportamento).
  - **Reutilização**: O mesmo script pode ser usado em várias páginas.
  - **Cache**: O navegador pode guardar o arquivo `.js` em cache, acelerando o carregamento em visitas futuras.

- **Exemplo de uso**:
  ```html
  <script src="js/meu-script.js" defer></script>
  ```

- **Atributos importantes**:
  - `src`: (Source) Indica o caminho (URL) para o arquivo `.js`.
  - `defer`: Garante que o script seja executado apenas depois que o HTML da página for completamente analisado. Isso evita erros de "elemento não encontrado" e não bloqueia a renderização da página. **É a melhor prática para a maioria dos casos.**
  - `async`: Similar ao `defer`, mas não garante a ordem de execução se houver múltiplos scripts. O script é executado assim que o download termina, o que pode ser antes do HTML ser totalmente analisado.

### 2. Script Interno (Inline Script)

O código JavaScript é escrito diretamente dentro da tag `<script>` no próprio arquivo HTML.

- **Vantagens**:
  - **Simplicidade**: Útil para pequenos trechos de código ou testes rápidos que são específicos de uma única página.

- **Desvantagens**:
  - **Desorganização**: Mistura lógica de programação com a estrutura do HTML.
  - **Não reutilizável**: O código só existe naquela página.

- **Exemplo de uso**:
  ```html
  <script>
    // Código JavaScript vai aqui
    alert("Olá, mundo!");
  </script>
  ```

No nosso projeto, todos os scripts são externos e usam o atributo `defer` para otimizar o carregamento e garantir que o DOM esteja pronto quando o script for executado.

---

## Principais Tags HTML Utilizadas

O projeto faz uso das principais tags HTML para garantir estrutura, semântica e acessibilidade. Abaixo estão as mais relevantes:

<table>
  <thead>
    <tr>
      <th style="color:#1976d2;">Tag</th>
      <th style="color:#388e3c;">Exemplo</th>
      <th style="color:#d32f2f;">Função/Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code style="color:#1976d2;">&lt;!DOCTYPE&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;!DOCTYPE html&gt;</code></td>
      <td style="color:#d32f2f;">Define o tipo do documento e ativa o modo padrão do navegador.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;html&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;html lang="pt-br"&gt;</code></td>
      <td style="color:#d32f2f;">Elemento raiz do documento; o atributo <code>lang</code> indica o idioma.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;head&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;head&gt; ... &lt;/head&gt;</code></td>
      <td style="color:#d32f2f;">Contém metadados, links de CSS, título, charset, etc.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;meta&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;meta charset="UTF-8"&gt;</code></td>
      <td style="color:#d32f2f;">Define metadados como codificação e viewport.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;title&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;title&gt;Minha Página&lt;/title&gt;</code></td>
      <td style="color:#d32f2f;">Define o título exibido na aba do navegador.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;link&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;link rel="stylesheet" ...&gt;</code></td>
      <td style="color:#d32f2f;">Importa arquivos externos, como CSS ou favicon.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;body&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;body&gt; ... &lt;/body&gt;</code></td>
      <td style="color:#d32f2f;">Contém todo o conteúdo visível da página.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;header&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;header&gt; ... &lt;/header&gt;</code></td>
      <td style="color:#d32f2f;">Define o cabeçalho da página ou de uma seção.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;main&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;main&gt; ... &lt;/main&gt;</code></td>
      <td style="color:#d32f2f;">Indica o conteúdo principal da página (deve ser único).</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;nav&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;nav&gt; ... &lt;/nav&gt;</code></td>
      <td style="color:#d32f2f;">Agrupa links de navegação principais ou secundários.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;h1&gt;</code>–<code style="color:#1976d2;">&lt;h6&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;h1&gt;Título&lt;/h1&gt;</code></td>
      <td style="color:#d32f2f;">Títulos e subtítulos, estruturando a hierarquia do conteúdo.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;div&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;div id="conteudo"&gt; ... &lt;/div&gt;</code></td>
      <td style="color:#d32f2f;">Container genérico para agrupar elementos.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;ul&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</code></td>
      <td style="color:#d32f2f;">Lista não ordenada.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;li&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;li&gt;Item&lt;/li&gt;</code></td>
      <td style="color:#d32f2f;">Item de lista, usado dentro de <code>&lt;ul&gt;</code> ou <code>&lt;ol&gt;</code>.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;button&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;button&gt;OK&lt;/button&gt;</code></td>
      <td style="color:#d32f2f;">Botão interativo para ações do usuário.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;a&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;a href="..."&gt;Link&lt;/a&gt;</code></td>
      <td style="color:#d32f2f;">Cria links para navegação entre páginas ou sites.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;script&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;script src="app.js"&gt;&lt;/script&gt;</code></td>
      <td style="color:#d32f2f;">Importa e executa código JavaScript externo.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;pre&gt;</code></td>
      <td><code style="color:#388e3c;">&lt;pre&gt;texto pré-formatado&lt;/pre&gt;</code></td>
      <td style="color:#d32f2f;">Exibe texto com espaçamento e quebras preservados, útil para exibir códigos.</td>
    </tr>
    <tr>
      <td><code style="color:#1976d2;">&lt;code&gt;</code></td>
      <td><code style="color:#388e3c;">let x = 1;</code></td>
      <td style="color:#d32f2f;">Destaca trechos de código ou comandos dentro do texto.</td>
    </tr>
  </tbody>
</table>

Essas tags garantem estrutura semântica, acessibilidade e flexibilidade para estilização e interatividade.

---

## Principais Tags JavaScript Utilizadas nos Arquivos do Projeto

> Abaixo estão as principais tags, métodos e estruturas JavaScript presentes nos arquivos do projeto, com explicação de seu papel e funcionamento:

<table>
  <thead>
    <tr>
      <th>Tag/Método/Palavra-chave</th>
      <th>Função/Descrição</th>
      <th>Onde aparece</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>const</code>, <code>let</code>, <code>var</code></td>
      <td>Declaração de variáveis. <code>const</code> para valores fixos, <code>let</code> para escopo local, <code>var</code> (evitado).</td>
      <td>Todos os arquivos</td>
    </tr>
    <tr>
      <td><code>function</code>, <code>=></code> (Arrow Function)</td>
      <td>Declara funções tradicionais e modernas (arrow functions).</td>
      <td>Todos os arquivos</td>
    </tr>
    <tr>
      <td><code>return</code></td>
      <td>Retorna valores de funções.</td>
      <td>Todos os arquivos</td>
    </tr>
    <tr>
      <td><code>document.getElementById</code>, <code>document.querySelector</code></td>
      <td>Seleciona elementos do DOM para manipulação.</td>
      <td>Todos os arquivos</td>
    </tr>
    <tr>
      <td><code>addEventListener</code></td>
      <td>Adiciona eventos (ex: clique em botões) para interatividade.</td>
      <td>Todos os arquivos</td>
    </tr>
    <tr>
      <td><code>innerHTML</code>, <code>textContent</code></td>
      <td>Insere ou altera conteúdo HTML/texto de elementos.</td>
      <td>Todos os arquivos</td>
    </tr>
    <tr>
      <td><code>classList.add</code>, <code>classList.remove</code>, <code>classList.toggle</code></td>
      <td>Manipula classes CSS para alterar aparência ou comportamento.</td>
      <td>js/theme.js, js/mapa-mental.js</td>
    </tr>
    <tr>
      <td><code>localStorage</code></td>
      <td>Armazena dados localmente no navegador (ex: tema).</td>
      <td>js/theme.js</td>
    </tr>
    <tr>
      <td><code>prompt</code>, <code>alert</code>, <code>console.log</code></td>
      <td>Interage com o usuário e exibe informações no Console.</td>
      <td>js/operadores-condicionais.js, js/variaveis-tipos.js, js/repeticao-interacao.js</td>
    </tr>
    <tr>
      <td><code>for</code>, <code>forEach</code>, <code>for..of</code>, <code>while</code>, <code>do...while</code></td>
      <td>Estruturas de repetição para percorrer listas ou executar ações múltiplas vezes.</td>
      <td>js/repeticao-interacao.js</td>
    </tr>
    <tr>
      <td><code>if</code>, <code>else</code>, <code>switch</code>, <code>? :</code> (operador ternário)</td>
      <td>Estruturas condicionais para decisões lógicas.</td>
      <td>js/operadores-condicionais.js, js/variaveis-tipos.js</td>
    </tr>
    <tr>
      <td><code>Object</code>, <code>Array</code>, <code>typeof</code>, <code>Math.random</code></td>
      <td>Manipulação de objetos, arrays, tipos e geração de números aleatórios.</td>
      <td>js/variaveis-tipos.js, js/mapa-mental.js</td>
    </tr>
    <tr>
      <td><code>setTimeout</code>, <code>setInterval</code></td>
      <td>Executa funções após um tempo ou repetidamente (usado em interações).</td>
      <td>Alguns arquivos</td>
    </tr>
    <tr>
      <td><code>export</code>, <code>import</code></td>
      <td>(Não utilizado neste projeto, mas comum em JS moderno para módulos).</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

Essas tags e métodos são essenciais para criar interatividade, manipular o DOM, controlar fluxo de execução e garantir uma experiência dinâmica no site.

**Autores:** FERNANDO ALVES DE SOUZA, FELIPE MONTALVÃO
