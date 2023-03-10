export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criar(dataStr, qtdStr, valorStr) {
        const date = new Date(dataStr.replace('-', ','));
        const quantidade = parseInt(qtdStr);
        const valor = parseFloat(valorStr);
        return new Negociacao(date, quantidade, valor);
    }
    paraTexto() {
        return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor.toFixed(2)}
      `;
    }
    ehIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
