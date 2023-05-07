export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
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
          ${model
            .lista()
            .map((negociacao) => `
              <tr>
                <td>${new Intl.DateTimeFormat("pt-BR").format(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `)
            .join("")}
        </tbody>
      </table>`;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
