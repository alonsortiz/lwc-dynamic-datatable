/**
 * Authors: Alonso Ortiz, Hector Saldana
 * Description: Hasta la bye bye!
 */
import { LightningElement, api, track } from 'lwc';

export default class DynamicDatatable extends LightningElement {
    @api tableData;
    @api columns;
    //@api keyField;

}