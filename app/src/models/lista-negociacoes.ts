import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes implements Modelo<ListaNegociacoes> {

  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  ehIgual(lista: ListaNegociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(lista.lista());
  }
}
