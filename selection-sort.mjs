import { CadastroDeAlunos } from './class-array-object.mjs'

var cadastroDeAlunos = new CadastroDeAlunos()

function selectionSort(array, funcaoDeComparacao) {

    for (let posicaoSelecionada = 0; posicaoSelecionada < array.length - 1; posicaoSelecionada++) {
        let menorPosicao = posicaoSelecionada + 1

        for (let i = menorPosicao + 1; i < array.length; i++) {
            if (funcaoDeComparacao(array[menorPosicao] > array[i])) {
                menorPosicao = i
            }
        }

        if (funcaoDeComparacao(array[posicaoSelecionada] > array[menorPosicao])) {
            [array[posicaoSelecionada], array[menorPosicao]] = [array[menorPosicao], array[posicaoSelecionada]]
        }
    }
}

selectionSort(cadastroDeAlunos.alunosCadastrados, (elementOne, elementTwo) => elementOne.nome > elementTwo.nome)

console.log(cadastroDeAlunos.alunosCadastrados);
