// Demonstração de Tags HTML e Estrutura Frontend
const conteudo = `
<h2>Tags HTML</h2>
<ul>
  <li><code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code></li>
  <li><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>: Títulos</li>
  <li><code>&lt;p&gt;</code>: Parágrafo</li>
  <li><code>&lt;a&gt;</code>: Link</li>
  <li><code>&lt;img&gt;</code>: Imagem</li>
  <li><code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>: Containers</li>
</ul>
<h2>Desenvolvimento Frontend</h2>
<ul>
  <li><b>HTML</b>: Estrutura e conteúdo da página, usando tags como <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>.</li>
  <li><b>CSS</b>: Aparência e layout, estilizando com seletores, classes e ids.</li>
  <li><b>JavaScript</b>: Comportamento e interatividade, manipulando elementos com código JS.</li>
</ul>
`;
document.getElementById('conteudo-tags').innerHTML = conteudo;
