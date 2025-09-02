

// JavaScript separado para melhor organização e boas práticas
document.addEventListener('DOMContentLoaded', () => {
    const btnCursos = document.getElementById('btn-cursos');
    const btnIdade = document.getElementById('btn-idade');
    const btnCadastro = document.getElementById('btn-cadastro');
    const btnListarAlunos = document.getElementById('btn-listar-alunos');
    const output = document.getElementById('output');
    const formIdade = document.getElementById('form-idade');
    const formCadastro = document.getElementById('form-cadastro');
    const inputIdade = document.getElementById('idade');
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputIdadeCadastro = document.getElementById('idade-cadastro');
    // Matrícula realista
    const etapaCurso = document.getElementById('etapa-curso');
    const etapaDados = document.getElementById('etapa-dados');
    const etapaDocs = document.getElementById('etapa-documentos');
    const etapaConfirmacao = document.getElementById('etapa-confirmacao');
    const selectCurso = document.getElementById('curso-cadastro');
    const btnAvancarCurso = document.getElementById('btn-avancar-curso');
    const btnAvancarDados = document.getElementById('btn-avancar-dados');
    const btnAvancarDocs = document.getElementById('btn-avancar-docs');
    const resumoCadastro = document.getElementById('resumo-cadastro');
    const docRg = document.getElementById('doc-rg');
    const docCpf = document.getElementById('doc-cpf');
    const docComprovante = document.getElementById('doc-comprovante');
    const secaoAlunos = document.getElementById('alunos-cadastrados');
    const listaAlunos = document.getElementById('lista-alunos');

    // Função para mostrar cursos usando for...of
    btnCursos.addEventListener('click', () => {
        formIdade.style.display = 'none';
        formCadastro.style.display = 'none';
        secaoAlunos.style.display = 'none';
        output.textContent = '';
        const cursos = [
            "Lógica de Programação",
            "JavaScript Básico",
            "Python para Iniciantes",
            "Desenvolvimento Web",
            "Algoritmos Avançados"
        ];
        const titulo = document.createElement('strong');
        titulo.textContent = 'Cursos Disponíveis:';
        const ul = document.createElement('ul');
        for (const curso of cursos) {
            const li = document.createElement('li');
            li.textContent = curso;
            ul.appendChild(li);
        }
        output.innerHTML = '';
        output.appendChild(titulo);
        output.appendChild(ul);
    });

    // Mostrar formulário de idade
    btnIdade.addEventListener('click', () => {
        formIdade.style.display = 'block';
        formCadastro.style.display = 'none';
        secaoAlunos.style.display = 'none';
        output.textContent = '';
        inputIdade.value = '';
        inputIdade.focus();
    });

    // Mostrar formulário de cadastro
    btnCadastro.addEventListener('click', () => {
        formCadastro.style.display = 'block';
        formIdade.style.display = 'none';
        secaoAlunos.style.display = 'none';
        output.textContent = '';
        // Resetar etapas
        etapaCurso.style.display = '';
        etapaDados.style.display = 'none';
        etapaDocs.style.display = 'none';
        etapaConfirmacao.style.display = 'none';
        selectCurso.value = '';
        inputNome.value = '';
        inputEmail.value = '';
        inputIdadeCadastro.value = '';
        if (docRg) docRg.value = '';
        if (docCpf) docCpf.value = '';
        if (docComprovante) docComprovante.value = '';
        selectCurso.focus();
    });

    // Avançar para dados pessoais
    btnAvancarCurso.addEventListener('click', () => {
        if (!selectCurso.value) {
            alert('Selecione um curso para continuar.');
            return;
        }
        etapaCurso.style.display = 'none';
        etapaDados.style.display = '';
        inputNome.focus();
    });

    // Avançar para documentos
    btnAvancarDados.addEventListener('click', () => {
        if (!inputNome.value.trim() || !inputEmail.value.trim() || !inputIdadeCadastro.value.trim()) {
            alert('Preencha todos os dados para continuar.');
            return;
        }
        etapaDados.style.display = 'none';
        etapaDocs.style.display = '';
    });

    // Avançar para confirmação
    btnAvancarDocs.addEventListener('click', () => {
        // Simulação: não valida arquivos
        etapaDocs.style.display = 'none';
        etapaConfirmacao.style.display = '';
        resumoCadastro.innerHTML = `
            <strong>Curso:</strong> ${selectCurso.value}<br>
            <strong>Nome:</strong> ${inputNome.value}<br>
            <strong>E-mail:</strong> ${inputEmail.value}<br>
            <strong>Idade:</strong> ${inputIdadeCadastro.value}<br>
            <strong>Documentos:</strong> RG, CPF, Comprovante enviados (simulado)
        `;
    });
    // Listar alunos cadastrados
    btnListarAlunos.addEventListener('click', () => {
        formCadastro.style.display = 'none';
        formIdade.style.display = 'none';
        output.textContent = '';
        let alunos = [];
        try {
            alunos = JSON.parse(localStorage.getItem('alunos')) || [];
        } catch (e) {
            console.error('Erro ao ler alunos do localStorage:', e);
            alunos = [];
        }
        listaAlunos.innerHTML = '';
        if (alunos.length === 0) {
            listaAlunos.innerHTML = '<li>Nenhum aluno cadastrado ainda.</li>';
        } else {
            for (const aluno of alunos) {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${aluno.nome}</strong> (${aluno.idade} anos) - <a href="mailto:${aluno.email}">${aluno.email}</a>`;
                listaAlunos.appendChild(li);
            }
        }
        secaoAlunos.style.display = 'block';
        secaoAlunos.scrollIntoView({ behavior: 'smooth' });
    });

    // Verificar idade (estrutura de seleção)
    formIdade.addEventListener('submit', (e) => {
        e.preventDefault();
        const idade = Number(inputIdade.value);
        let mensagem = '';
        if (isNaN(idade) || idade < 1) {
            mensagem = 'Por favor, digite uma idade válida.';
        } else if (idade >= 12) {
            mensagem = 'Parabéns! Você pode se matricular em nossos cursos.';
        } else {
            mensagem = 'Desculpe, a idade mínima para matrícula é 12 anos.';
        }
        output.textContent = mensagem;
    });

    // Cadastro de aluno com etapas
    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const idade = Number(inputIdadeCadastro.value);
        const curso = selectCurso.value;
        let mensagem = '';
        if (!nome || !email || isNaN(idade) || idade < 1 || !curso) {
            mensagem = 'Por favor, preencha todos os campos corretamente.';
        } else {
            // Salvar no localStorage
            const aluno = { nome, email, idade, curso };
            let alunos = [];
            try {
                alunos = JSON.parse(localStorage.getItem('alunos')) || [];
            } catch (e) {
                console.error('Erro ao ler alunos do localStorage:', e);
                alunos = [];
            }
            alunos.push(aluno);
            localStorage.setItem('alunos', JSON.stringify(alunos));
            mensagem = `Matrícula realizada com sucesso!<br>Bem-vindo(a), <strong>${nome}</strong> ao curso <strong>${curso}</strong>! Em breve você receberá informações no e-mail <strong>${email}</strong>.`;
        }
        output.innerHTML = mensagem;
        formCadastro.style.display = 'none';
    });
});
