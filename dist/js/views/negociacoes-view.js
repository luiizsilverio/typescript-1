export class NegociacoesView {
    constructor(seletor) {
        this.elem = document.querySelector(seletor);
    }
    template() {
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
    update() {
        this.elem.innerHTML = this.template();
    }
}
