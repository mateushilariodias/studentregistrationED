const opcaoEscolhida = document.getElementById('opcaoEscolhida')
const submeter = document.getElementById('submeter')

function acaoDaOpcaoEscolhida() {
    let opcaoEscolhidaConvertidaEmNumero = parseInt(opcaoEscolhida.value)

    switch (opcaoEscolhidaConvertidaEmNumero) {
        case 1:
            window.location.href = 'cadastro-de-alunos.html'
            break;
        case 2:
            console.log('cadastro')
            break;
        case 3:
            console.log('descdastro')
            break;
        case 4:

            break;
        case 5:
            function encerrarExecucaoDoPrograma() {
                if(confirm("Você quer encerrar o programa?")) {
                  window.close();
                }
              }
              encerrarExecucaoDoPrograma()
            break;
        default:
            console.log('error')
            break;
    }
}

console.log(JSON.parse(localStorage.getItem('alunos')))
submeter.addEventListener('click', acaoDaOpcaoEscolhida)