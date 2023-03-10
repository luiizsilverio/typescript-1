import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {

    constructor(
      private _data: Date,
      public readonly quantidade: number,
      public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
      const data = new Date(this._data.getTime());
      return data;
    }

    static criar(dataStr: string, qtdStr: string, valorStr: string): Negociacao {
      const date = new Date(dataStr.replace('-', ','));
      const quantidade = parseInt(qtdStr);
      const valor = parseFloat(valorStr);
      return new Negociacao(date, quantidade, valor);
    }

    paraTexto(): string {
      return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor.toFixed(2)}
      `;
    }

    ehIgual(negociacao: Negociacao): boolean {
      return this.data.getDate() === negociacao.data.getDate()
        && this.data.getMonth() === negociacao.data.getMonth()
        && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
