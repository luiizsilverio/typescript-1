export class NegociacoesView {
    constructor(seletor) {
        this.elem = document.querySelector(seletor);
    }
    template(model) {
        console.log(model);
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
          ${model.lista().map(item => {
            return `
                <tr>
                  <td>${new Intl.DateTimeFormat().format(item.data)}</td>
                  <td>${item.quantidade}</td>
                  <td>${item.valor}</td>
                </tr>
              `;
        }).join('\n')}
        </tbody>
      </table>
    `;
    }
    update(model) {
        const template = this.template(model);
        this.elem.innerHTML = template;
    }
}
