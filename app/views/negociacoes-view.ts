import { ListaNegociacoes } from "../models/lista-negociacoes.js";

export class NegociacoesView {

  private elem: HTMLElement;

  constructor(seletor: string) {
    this.elem = document.querySelector(seletor);
  }

  template(model: ListaNegociacoes): string {
    console.log(model)
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${
            model.lista().map(item => {
              return `
                <tr>
                  <td>${new Intl.DateTimeFormat().format(item.data)}</td>
                  <td>${item.quantidade}</td>
                  <td>${item.valor}</td>
                </tr>
              `
            }).join('\n')
          }
        </tbody>
      </table>
    `;
  }

  update(model: ListaNegociacoes): void {
    const template = this.template(model);
    this.elem.innerHTML = template;
  }
}
