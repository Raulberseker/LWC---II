import { LightningElement } from 'lwc';
import LeadInfo from 'c/leadInfo';

export default class App extends LightningElement {
    lead1 = {
        id: '5',
        nome: 'Maria',
        email: 'maria@teste.com',
        telefone: '(55) 5555-5555',
        status: 'Aberto'
    }

    lead2 = {
        id: '6',
        nome: 'João',
        email: 'joao@teste.com',
        telefone: '(66) 6666-6666',
        status: 'Fechado'
    }

    connectedCallback() {
        const leadInfo1 = new LeadInfo();
        leadInfo1.id = this.lead1.id;
        leadInfo1.nome = this.lead1.nome;
        leadInfo1.email = this.lead1.email;
        leadInfo1.telefone = this.lead1.telefone;
        leadInfo1.status = this.lead1.status;
        this.template.querySelector('c-lead-info:nth-child(1)').appendChild(leadInfo1);

        const leadInfo2 = new LeadInfo();
        leadInfo2.id = this.lead2.id;
        leadInfo2.nome = this.lead2.nome;
        leadInfo2.email = this.lead2.email;
        leadInfo2.telefone = this.lead2.telefone;
        leadInfo2.status = this.lead2.status;
        this.template.querySelector('c-lead-info:nth-child(2)').appendChild(leadInfo2);
    }
}
