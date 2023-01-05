import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {

  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elem = document.querySelector(seletor);

    if (elem) {
      this.elemento = elem as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM.`);
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  @logarTempoExecucao()
  @inspect
  update(model: T): void {
    let template = this.template(model);

    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.elemento.innerHTML = template;
  }

}
