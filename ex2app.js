import { LightningElement } from "lwc";
import OppsDaConta from "c/oppsdaconta";

export default class App extends LightningElement {
    opps = [
        {id: "1", nome: "Oportunidade 1", valor: "10000", fase: "Prospectando"},
        {id: "2", nome: "Oportunidade 2", valor: "5000", fase: "Negociando"},
        {id: "3", nome: "Oportunidade 3", valor: "20000", fase: "Fechando"},
        {id: "4", nome: "Oportunidade 4", valor: "8000", fase: "Fechado Ganho"},
        {id: "5", nome: "Oportunidade 5", valor: "12000", fase: "Fechado Perdido"},
    ];

    renderedCallback() {
        this.opps.forEach((opp) => {
            const oppsDaConta = new OppsDaConta({
                element: this.template.querySelector("c-oppsdaconta").cloneNode(true),
            });
            oppsDaConta.id = opp.id;
            oppsDaConta.nome = opp.nome;
            oppsDaConta.valor = opp.valor;
            oppsDaConta.fase = opp.fase;
            this.template.querySelector("lightning-card").appendChild(oppsDaConta.element);
        });
    }
}
