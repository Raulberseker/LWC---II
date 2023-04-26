import { LightningElement, api } from "lwc";

export default class Lead extends LightningElement {
    @api primeiroNome;
    @api sobrenome;
    @api empresa;
}
