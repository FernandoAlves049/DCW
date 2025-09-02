// Demonstração de Repetição e Interação
const conteudo = `
<h2>Estruturas de Repetição</h2>
<ul>
    <li><code>for</code>, <code>forEach</code> (<code>in</code> para índice, <code>of</code> para elemento), <code>while</code>, <code>do while</code></li>
    <li><code>break</code>, <code>continue</code></li>
</ul>
<h2>Funções de Interação</h2>
<ul>
    <li><code>alert()</code>, <code>prompt()</code>, <code>confirm()</code></li>
</ul>
<button onclick="demoRepeticao()">Testar Repetição</button>
<pre id="saida-repeticao"><code></code></pre>
`;
document.getElementById('conteudo-repeticao').innerHTML = conteudo;

function demoRepeticao() {
    const linhas = [];
    let lista = [1, 2, 3, 4, 5];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === 3) continue;
        linhas.push(`for: ${lista[i]}`);
    }
    lista.forEach((el, idx) => {
        linhas.push(`forEach in: ${idx} valor: ${el}`);
    });
    for (let el of lista) {
        linhas.push(`for of: ${el}`);
    }
    let i = 0;
    while (i < 3) {
        linhas.push(`while: ${i}`);
        i++;
    }
    i = 0;
    do {
        linhas.push(`do while: ${i}`);
        i++;
    } while (i < 2);

    const pre = document.getElementById('saida-repeticao');
    if (pre) {
        const code = pre.querySelector('code') || pre;
        code.textContent = linhas.join('\n');
        pre.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    linhas.forEach((l) => console.log(l));
}
