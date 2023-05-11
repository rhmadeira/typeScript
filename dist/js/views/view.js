export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento instanceof HTMLElement) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
