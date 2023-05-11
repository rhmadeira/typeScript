import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if(form)
form.addEventListener("submit", controller.adiciona.bind(controller));
else
    throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe.");