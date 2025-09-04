// Demonstração de Variáveis, Tipos e Funções
const conteudo = `
<h2>Variáveis</h2>
<ul>
  <li><code>var</code>, <code>let</code>, <code>const</code> — formas de declarar variáveis em JavaScript.</li>
  <li>Exemplo: <code>let nome = 'Ana';</code></li>
</ul>
<h2>Tipos de Dados</h2>
<ul>
  <li><code>Number</code>, <code>Boolean</code>, <code>String</code>, <code>Undefined</code>, <code>null</code></li>
  <li>Use <code>typeof</code> para verificar o tipo de uma variável.</li>
</ul>
<h2>Funções</h2>
<ul>
  <li>Strings: <code>toUpperCase()</code>, <code>length</code></li>
  <li>Math: <code>Math.random()</code>, <code>Math.round()</code></li>
  <li>Arrays: <code>push()</code> (adiciona elemento), aceita tipos distintos</li>
</ul>
<button onclick="demoVariaveis()">Testar no Console</button>
<pre id="saida-variaveis"><code></code></pre>
`;
document.getElementById('conteudo-variaveis').innerHTML = conteudo;

function demoVariaveis() {
  let nome = 'Ana';
  let idade = 20;
  let ativo = true;
  let lista = [1, 'texto', false];

  const linhas = [];
  linhas.push(`typeof nome: ${typeof nome}`);
  linhas.push(`typeof idade: ${typeof idade}`);
  linhas.push(`typeof ativo: ${typeof ativo}`);
  linhas.push(`Array: ${JSON.stringify(lista)}`);
  lista.push('novo');
  linhas.push(`Array após push: ${JSON.stringify(lista)}`);
  linhas.push(`Math.random(): ${Math.random()}`);

  // Escreve na página
  const pre = document.getElementById('saida-variaveis');
  if (pre) {
    const code = pre.querySelector('code') || pre;
    code.textContent = linhas.join('\n');
    pre.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Também envia para o console
  linhas.forEach((l) => console.log(l));
}
