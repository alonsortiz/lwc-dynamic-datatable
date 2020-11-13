/**
 * Authors: Alonso Ortiz, Hector Saldana
 * Description: Hasta la bye bye!
 */
import { LightningElement, api, track } from 'lwc';

const columnsTest = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class DynamicDatatable extends LightningElement {
    @api tableData;
    @track columns;
    @api keyField;

    connectedCallback() {
        console.log(columnsTest)
        this.columns = {...columnsTest}
        console.log(this.columns)
    }
}