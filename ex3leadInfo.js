import { LightningElement, api } from 'lwc';

export default class LeadInfo extends LightningElement {
    @api id;
    @api nome;
    @api email;
    @api telefone;
    @api status;
}
