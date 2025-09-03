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

**Autores:** FERNANDO ALVES DE SOUZA, FELIPE MONTALVÃO
