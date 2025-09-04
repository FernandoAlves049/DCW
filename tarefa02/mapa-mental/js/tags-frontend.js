// Demonstração de Tags HTML e Estrutura Frontend
const conteudo = `
<h2>Estrutura Principal</h2>
<ul>
  <li><code>&lt;html&gt;</code>: O elemento raiz de toda a página.</li>
  <li><code>&lt;head&gt;</code>: Contém metadados, títulos e links para CSS e scripts.</li>
  <li><code>&lt;body&gt;</code>: Agrupa todo o conteúdo visível da página.</li>
</ul>

<h2>Tags de Texto e Conteúdo</h2>
<ul>
  <li><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>: Define títulos e subtítulos, criando uma hierarquia de importância.</li>
  <li><code>&lt;p&gt;</code>: Usado para parágrafos de texto.</li>
  <li><code>&lt;a href="..."&gt;</code>: Cria um hyperlink para outra página ou recurso.</li>
  <li><code>&lt;img src="..." alt="..."&gt;</code>: Insere uma imagem na página. O atributo <code>alt</code> é crucial para acessibilidade.</li>
  <li><code>&lt;b&gt;</code> ou <code>&lt;strong&gt;</code>: Deixa o texto em negrito. <code>&lt;strong&gt;</code> indica maior importância.</li>
  <li><code>&lt;i&gt;</code> ou <code>&lt;em&gt;</code>: Deixa o texto em itálico. <code>&lt;em&gt;</code> dá ênfase ao texto.</li>
</ul>

<h2>Agrupamento e Layout (Containers)</h2>
<ul>
  <li><code>&lt;div&gt;</code>: Um container genérico em bloco, usado para agrupar e estilizar seções da página.</li>
  <li><code>&lt;span&gt;</code>: Um container genérico em linha, usado para estilizar pequenas partes de um texto.</li>
  <li><code>&lt;header&gt;</code>: Define o cabeçalho da página ou de uma seção (geralmente com logo e navegação).</li>
  <li><code>&lt;main&gt;</code>: Indica o conteúdo principal e único da página.</li>
  <li><code>&lt;footer&gt;</code>: Define o rodapé da página ou de uma seção (com informações de contato, créditos, etc.).</li>
  <li><code>&lt;nav&gt;</code>: Agrupa os links de navegação principais do site.</li>
</ul>

<h2>Listas</h2>
<ul>
  <li><code>&lt;ul&gt;</code>: Cria uma lista não ordenada (com marcadores).</li>
  <li><code>&lt;ol&gt;</code>: Cria uma lista ordenada (com números ou letras).</li>
  <li><code>&lt;li&gt;</code>: Representa um item dentro de uma lista (<code>ul</code> ou <code>ol</code>).</li>
</ul>

<h2>Desenvolvimento Frontend: A Tríade</h2>
<ul>
  <li><b>HTML (HyperText Markup Language)</b>: A base de tudo. Define a estrutura e o significado do conteúdo. É como o esqueleto de um corpo.</li>
  <li><b>CSS (Cascading Style Sheets)</b>: Responsável pela aparência e pelo layout. Define cores, fontes, espaçamentos e posicionamento. É como a pele, cabelo e roupas.</li>
  <li><b>JavaScript</b>: Adiciona comportamento, interatividade e dinamismo à página. Permite validar formulários, criar animações e carregar dados sem recarregar a página. É como o sistema nervoso e os músculos.</li>
</ul>
`;
document.getElementById('conteudo-tags').innerHTML = conteudo;
