export class NegociacoesView {

  private elem: HTMLElement;

  constructor(seletor: string) {
    this.elem = document.querySelector(seletor);
  }

  template(): string {
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

        </tbody>
      </table>
    `;
  }

  update(): void {
    this.elem.innerHTML = this.template();
  }
}
