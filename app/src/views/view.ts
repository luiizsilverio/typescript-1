import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {

  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elem = document.querySelector(seletor);

    if (elem) {
      this.elemento = elem as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM.`);
    }
  }

  protected abstract template(model: T): string;

  // @logarTempoExecucao()
  // @inspect
  update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }

}
