import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private elemento: HTMLElement;
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }
  template(model: Negociacoes): string {
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
            .map(
              (negociacao) => `
              <tr>
                <td>${new Intl.DateTimeFormat("pt-BR").format(
                  negociacao.data
                )}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>`;
  }

  update(model: Negociacoes): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
