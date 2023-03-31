const enviar = document.getElementById('#enviar')

// resultado = media >= 6 ? "Aprovado" : "Reprovado"

class CadastroDeAlunos {
    constructor() {
        this.alunosCadastrados = []
        // this.nome
        // this.ra
        // this.idade
        // this.sexo
        // this.media
        // this.resultado
    }
    salvarAluno() {
        let aluno = this.lerDados()

        console.log(aluno)
    }

    lerDados() {
        let aluno = {}

        aluno.nome  = document.querySelector('#nome').value
        aluno.ra = document.querySelector('#ra').value
        aluno.idade = document.querySelector('#idade').value
        aluno.sexo = document.querySelector('#sexo').value
        aluno.media = document.querySelector('#media').value
        aluno.resultado = document.querySelector('#resultado').value
        
        return aluno
    }

    cadastrarAluno() {
        alert('Vamos cadastrar um aluno')
    }
}

var cadastroDeAlunos = new CadastroDeAlunos()
