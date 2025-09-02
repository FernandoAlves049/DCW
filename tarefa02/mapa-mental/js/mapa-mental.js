// Estrutura do mapa mental baseada na imagem fornecida

const mapa = {
    label: "Revisão Pontual",
    filhos: [
        {
            label: "Integração",
            filhos: [
                { label: "Tags HTML" },
                { label: "Dentro do HTML" },
                { label: "Separado" }
            ]
        },
        {
            label: "Desenvolvimento Frontend",
            filhos: [
                { label: "Conteúdo - HTML" },
                { label: "Apresentação - CSS" },
                { label: "Comportamento - JS" },
                { label: "Executado no navegador" }
            ]
        },
        {
            label: "JavaScript",
            filhos: [
                {
                    label: "Variáveis",
                    filhos: [
                        { label: "var" },
                        { label: "let" },
                        { label: "const" },
                        { label: "Undefined" },
                        { label: "Null" },
                        {
                            label: "Tipos",
                            filhos: [
                                { label: "Números" },
                                { label: "Booleanos" }
                            ]
                        },
                        { label: "Fracamente tipada" },
                        { label: "typeof" }
                    ]
                },
                {
                    label: "Funções",
                    filhos: [
                        { label: "String" },
                        { label: "Matemáticas - Math" },
                        {
                            label: "Arrays",
                            filhos: [
                                { label: "Tipos distintos" },
                                { label: "Função push (adicionar)" }
                            ]
                        }
                    ]
                },
                {
                    label: "Interação com Usuário",
                    filhos: [
                        { label: "alert()" },
                        { label: "prompt(\"\")" },
                        { label: "confirm(\"\")" }
                    ]
                },
                {
                    label: "Operadores",
                    filhos: [
                        {
                            label: "Lógicos",
                            filhos: [
                                { label: "&& (AND)" },
                                { label: "|| (OR)" }
                            ]
                        },
                        { label: "Matemáticos" },
                        { label: "De igualdade" },
                        { label: "Ternário" }
                    ]
                },
                {
                    label: "Estruturas de Controle",
                    filhos: [
                        {
                            label: "Condicionais",
                            filhos: [
                                { label: "if" },
                                { label: "switch case" }
                            ]
                        },
                        {
                            label: "Repetição",
                            filhos: [
                                { label: "for" },
                                { label: "foreach (in para índice)" },
                                { label: "foreach (of para elemento)" },
                                { label: "while" },
                                { label: "do while" },
                                { label: "break" },
                                { label: "continue" }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

const explicacoes = {
    'Integração': 'Como o JavaScript pode ser integrado ao HTML, seja dentro do próprio arquivo ou em arquivos separados.',
    'Tags HTML': 'Elementos básicos que estruturam o conteúdo de uma página web.',
    'Dentro do HTML': 'Código JavaScript inserido diretamente entre <script>...</script> no arquivo HTML.',
    'Separado': 'JavaScript em arquivos .js externos, referenciados pelo HTML.',
    'Desenvolvimento Frontend': 'Área responsável pela interface e experiência do usuário em aplicações web.',
    'Conteúdo - HTML': 'Define a estrutura e o conteúdo da página.',
    'Apresentação - CSS': 'Responsável pelo visual, cores, fontes e layout.',
    'Comportamento - JS': 'Adiciona interatividade e lógica à página.',
    'Executado no navegador': 'O JavaScript roda diretamente no navegador do usuário.',
    'JavaScript': 'Linguagem de programação usada para criar páginas web dinâmicas.',
    'Variáveis': 'Espaços na memória para armazenar valores temporários.',
    'var': 'Declara uma variável com escopo de função (evite em código moderno).',
    'let': 'Declara uma variável com escopo de bloco.',
    'const': 'Declara uma constante, valor não pode ser reatribuído.',
    'Undefined': 'Valor padrão de variáveis não inicializadas.',
    'Null': 'Valor nulo, ausência intencional de valor.',
    'Tipos': 'Categorias de dados: números, strings, booleanos, etc.',
    'Números': 'Tipo numérico, pode ser inteiro ou decimal.',
    'Booleanos': 'Tipo lógico: true ou false.',
    'Fracamente tipada': 'JavaScript permite trocar o tipo de uma variável dinamicamente.',
    'typeof': 'Operador que retorna o tipo de uma variável.',
    'Funções': 'Blocos de código reutilizáveis que executam tarefas.',
    'String': 'Sequência de caracteres, texto.',
    'Matemáticas - Math': 'Funções matemáticas como Math.random(), Math.round().',
    'Arrays': 'Listas que armazenam múltiplos valores.',
    'Tipos distintos': 'Arrays podem conter valores de diferentes tipos.',
    'Função push (adicionar)': 'Adiciona um novo elemento ao final do array.',
    'Interação com Usuário': 'Funções que permitem comunicação com o usuário.',
    'alert()': 'Exibe uma mensagem de alerta na tela.',
    'prompt("")': 'Solicita uma entrada de texto do usuário.',
    'confirm("")': 'Exibe uma caixa de confirmação (OK/Cancelar).',
    'Operadores': 'Símbolos que realizam operações matemáticas, lógicas ou de comparação.',
    'Lógicos': 'Operadores que trabalham com valores booleanos.',
    '&& (AND)': 'Retorna true se ambas as condições forem verdadeiras.',
    '|| (OR)': 'Retorna true se pelo menos uma condição for verdadeira.',
    'Matemáticos': 'Operadores como +, -, *, / para cálculos.',
    'De igualdade': 'Compara se valores são iguais (==, ===).',
    'Ternário': 'Operador condicional compacto: cond ? a : b.',
    'Estruturas de Controle': 'Comandos que controlam o fluxo do programa.',
    'Condicionais': 'Permitem executar código diferente conforme uma condição.',
    'if': 'Executa um bloco se a condição for verdadeira.',
    'switch case': 'Seleciona entre vários blocos de código.',
    'Repetição': 'Executa um bloco de código várias vezes.',
    'for': 'Laço com contador, executa um número definido de vezes.',
    'foreach (in para índice)': 'Percorre índices de um array.',
    'foreach (of para elemento)': 'Percorre os valores de um array.',
    'while': 'Executa enquanto a condição for verdadeira.',
    'do while': 'Executa ao menos uma vez, depois testa a condição.',
    'break': 'Interrompe o laço atual.',
    'continue': 'Pula para a próxima iteração do laço.'
};

function criarTree(node) {
    let html = '';
    const explicacao = explicacoes[node.label] ? ` title="${explicacoes[node.label]}"` : '';
    if (node.filhos && node.filhos.length > 0) {
        html += `<li><span class="caret"${explicacao}>${node.label}</span><ul class="nested">`;
        node.filhos.forEach(filho => {
            html += criarTree(filho);
        });
        html += '</ul></li>';
    } else {
        html += `<li${explicacao}>${node.label}</li>`;
    }
    return html;
}

document.addEventListener('DOMContentLoaded', function() {
    const treeDiv = document.getElementById('mapa-mental-tree');
    treeDiv.innerHTML = `<ul>${criarTree(mapa)}</ul>`;
    // Adiciona funcionalidade de expandir/recolher
    const toggler = treeDiv.querySelectorAll('.caret');
    toggler.forEach(function(el) {
        el.addEventListener('click', function() {
            this.parentElement.querySelector('.nested').classList.toggle('active');
            this.classList.toggle('caret-down');
        });
    });
    // Expande o tema central por padrão
    const firstCaret = treeDiv.querySelector('.caret');
    if (firstCaret) {
        firstCaret.classList.add('caret-down');
        firstCaret.parentElement.querySelector('.nested').classList.add('active');
    }
});
