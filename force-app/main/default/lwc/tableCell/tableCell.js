import { LightningElement, api } from 'lwc';

export default class TableCell extends LightningElement {
    @api row;
    @api field;

    // private
    value;

    connectedCallback() {
        const rowObj = JSON.parse(JSON.stringify(this.row))

        this.value = Object.keys(rowObj).filter(key => key === this.field).reduce((val, key) => val = rowObj[key], '');
    }
}