export class ListaNegociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    ehIgual(lista) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(lista.lista());
    }
}
