class CadastroDeAlunos {
    constructor() {
        this.alunosCadastrados = []
    }
    salvarAluno() {
        let aluno = this.lerDados()
        if(this.validarCampos(aluno)){
            this.adicionarAluno(aluno)
        }
        console.log(this.alunosCadastrados)
        var cadastroJSON = JSON.stringify(cadastroDeAlunos)
        var dadosCodificados = encodeURIComponent(cadastroJSON)
        console.log(cadastroJSON)
        localStorage.setItem('alunos',cadastroJSON)
    }
s
    adicionarAluno(aluno) {
        this.alunosCadastrados.push(aluno)
    }

    lerDados() {
        let aluno = {}
        aluno.nome  = document.getElementById('nome').value;
        aluno.ra = document.getElementById('ra').value;
        aluno.idade = document.getElementById('idade').value;
        aluno.sexo = document.getElementById('sexo').value;
        aluno.media = document.getElementById('media').value;
        aluno.resultado = document.getElementById('resultado').value;
        aluno.resultado = (aluno.media >= 6) ? 'Aprovado' : 'Reprovado';
        return aluno
    }

    validarCampos(aluno) {
        let mensagemDeAlerta = ''

        if(aluno.nome == ''){
            mensagemDeAlerta += '- informe o seu nome \n'
        }
        if(aluno.ra == ''){
            mensagemDeAlerta += '- informe o seu RA \n'
        }
        if(aluno.idade == ''){
            mensagemDeAlerta += '- informe a sua idade \n'
        }
        if(aluno.media == '' || aluno.media > 10 || aluno.media < 0){
            mensagemDeAlerta += '- informe a sua média, sendo de 0 a 10 \n'
        }
        if(mensagemDeAlerta != ''){
            alert(mensagemDeAlerta)
            return false
        }
        return true
    }

    cadastrarAluno() {
        alert('Vamos cadastrar um aluno')
    }
}

var cadastroDeAlunos = new CadastroDeAlunos()