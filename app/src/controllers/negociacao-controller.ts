import { ListaNegociacoes } from "../models/lista-negociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { inspect } from "../decorators/inspect.js";
import { domInjector } from "../decorators/dom-injector.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;

  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;

  @domInjector('#valor')
  private inputValor: HTMLInputElement;

  private negociacoes = new ListaNegociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');
  private negociacoesService = new NegociacoesService();

  constructor() {
    // this.inputData = document.querySelector('#data') as HTMLInputElement;
    // this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    // this.inputValor = document.querySelector('#valor') as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect
  @logarTempoExecucao()
  adiciona(): void {
    // const negociacao = this.criaNegociacao();
    const negociacao = Negociacao.criar(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    // de segunda a sexta
    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update('Apenas negociações em dias úteis são aceitas.');
      return;
    }

    imprimir(negociacao);
    this.negociacoes.adiciona(negociacao);
    this.atualizaView();
    this.limpaFormulario();
  }

  // private criaNegociacao(): Negociacao {
  //   const date = new Date(this.inputData.value.replace('-', ','));
  //   const quantidade = parseInt(this.inputQuantidade.value);
  //   const valor = parseFloat(this.inputValor.value);
  //   return new Negociacao(date, quantidade, valor);
  // }

  private limpaFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso');
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
  }

  importaDados(): void {
    this.negociacoesService
      .obterNegociacoesAPI()
      .then(negociacoes => {
        return negociacoes.filter(negociacao => {
          return !this.negociacoes
            .lista()
            .some(neg => neg.ehIgual(negociacao))
        })
      })
      .then(negociacoes => {
        for(let negociacao of negociacoes) {
          this.negociacoes.adiciona(negociacao);
        }
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociações importadas com sucesso');
      })
  }
}
