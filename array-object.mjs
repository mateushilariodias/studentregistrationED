let alunosCadastrados = []

function salvarAluno() {
    let aluno = lerDados()
    if (validarCampos(aluno)) {
        adicionarAluno(aluno)
    }
    console.log(alunosCadastrados)
    localStorage.setItem('alunosCadastrados', JSON.stringify(alunosCadastrados))
}

function adicionarAluno(aluno) {
    alunosCadastrados.push(aluno)
    document.getElementById("formulario").reset()
}

function lerDados() {
    let aluno = {}
    aluno.nome = document.getElementById('nome').value;
    aluno.ra = document.getElementById('ra').value;
    aluno.idade = document.getElementById('idade').value;
    aluno.sexo = document.getElementById('sexo').value;
    aluno.media = document.getElementById('media').value;
    aluno.resultado = document.getElementById('resultado').value;
    aluno.resultado = (aluno.media >= 6) ? 'Aprovado' : 'Reprovado';
    return aluno
}

function validarCampos(aluno) {
    let mensagemDeAlerta = ''

    if (aluno.nome == '') {
        mensagemDeAlerta += '- informe o seu nome \n'
    }
    if (aluno.ra == '') {
        mensagemDeAlerta += '- informe o seu RA \n'
    }
    if (aluno.idade == '') {
        mensagemDeAlerta += '- informe a sua idade \n'
    }
    if (sexo.selectedIndex <= 0) {
        mensagemDeAlerta += '- informe o sexo \n'
    }
    if (aluno.media == '' || aluno.media > 10 || aluno.media < 0) {
        mensagemDeAlerta += '- informe a sua média, sendo de 0 a 10 \n'
    }
    if (resultado.selectedIndex <= 0) {
        mensagemDeAlerta += '- informe o resultado \n'
    }
    if (mensagemDeAlerta != '') {
        alert(mensagemDeAlerta)
        return false
    }
    return true
}