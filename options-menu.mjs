const opcaoEscolhida = document.getElementById('opcaoEscolhida')
const submeter = document.getElementById('submeter')

function acaoDaOpcaoEscolhida() {
    let opcaoEscolhidaConvertidaEmNumero = parseInt(opcaoEscolhida.value)

    switch (opcaoEscolhidaConvertidaEmNumero) {
        case 1:
            window.location.href = 'cadastro-de-alunos.html'
            break;
        case 2:
            window.location.href = 'selection-sort.html'
            break;
        case 3:
            console.log('descdastro')
            break;
        case 4:

            break;
        case 5:
            
            break;
        default:
            alert('Digite um número de 1 a 5')
            break;
    }
    document.getElementById("formulario").reset()
}

console.log(JSON.parse(localStorage.getItem('alunos')))
submeter.addEventListener('click', acaoDaOpcaoEscolhida)
