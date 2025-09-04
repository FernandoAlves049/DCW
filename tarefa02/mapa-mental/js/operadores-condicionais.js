// Demonstração de Operadores e Condicionais
const conteudo = `
<h2>Operadores</h2>
<ul>
  <li>Lógicos: <code>&&</code> (AND), <code>||</code> (OR)</li>
  <li>Matemáticos: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code></li>
  <li>Igualdade: <code>==</code> (igualdade solta), <code>===</code> (igualdade estrita)</li>
</ul>
<h2>Condicionais</h2>
<ul>
  <li><code>if</code>, <code>else</code>, <code>else if</code></li>
  <li><code>switch</code> <code>case</code></li>
  <li>Operador ternário: <code>condicao ? valor1 : valor2</code></li>
</ul>
<button onclick="demoCondicional()">Testar Condicional</button>
<pre id="saida-condicionais"><code></code></pre>
`;
document.getElementById('conteudo-operadores').innerHTML = conteudo;

function demoCondicional() {
  // Para evitar popups incômodos, se não houver idade fornecida via prompt, usamos um exemplo.
  let idade = prompt('Digite sua idade (ou deixe vazio para exemplo 17):');
  idade = idade === null || idade.trim() === '' ? 17 : Number(idade);

  const linhas = [];
  if (Number.isNaN(idade)) {
    linhas.push('Idade inválida. Informe um número.');
  } else {
    if (idade >= 18) {
      linhas.push('Maior de idade!');
    } else {
      linhas.push('Menor de idade!');
    }
    // Operador ternário
    let status = idade >= 18 ? 'Adulto' : 'Menor';
    linhas.push(`Status: ${status}`);
  }

  const pre = document.getElementById('saida-condicionais');
  if (pre) {
    const code = pre.querySelector('code') || pre;
    code.textContent = linhas.join('\n');
    pre.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  linhas.forEach((l) => console.log(l));
}
