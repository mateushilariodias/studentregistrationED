const opcaoEscolhida = document.getElementById('opcaoEscolhida')
const submeter = document.getElementById('submeter')

function acaoDaOpcaoEscolhida() {
    let opcaoEscolhidaConvertidaEmNumero = parseInt(opcaoEscolhida.value)

    switch (opcaoEscolhidaConvertidaEmNumero) {
        case 1:
            window.location.href = 'cadastro-de-alunos.html'
            break;
        case 2:
            window.location.href = 'caseTwo.html'
            break;
        case 3:
            window.location.href = 'caseThree.html'
            break;
        case 4:
            window.location.href = 'caseFour.html'
            break;
        case 5:
            location.reload()
            break;
        default:
            alert('Digite um número de 1 a 5')
            break;
    }
    document.getElementById("formulario").reset()
}

console.log(JSON.parse(localStorage.getItem('alunosCadastrados')))
submeter.addEventListener('click', acaoDaOpcaoEscolhida)
