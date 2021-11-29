import { LightningElement, api } from 'lwc';
import OBJECT_NAME from '@salesforce/schema/Voiture__c';
import CARBURANT_FIELD from '@salesforce/schema/Voiture__c.Carburant__c';
import MARQUE_FIELD from '@salesforce/schema/Voiture__c.Marque__c';
import PUISSANCE_FIELD from '@salesforce/schema/Voiture__c.Puissance__c';
import COULEUR_FIELD from '@salesforce/schema/Voiture__c.Couleur__c';
import IMMATRICULATION_FIELD from '@salesforce/schema/Voiture__c.Immatriculation__c';
import NAME_FIELD from '@salesforce/schema/Voiture__c.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarVoiture extends LightningElement {
    @api recordId;
    @api objectApiName= OBJECT_NAME;
    fields = [CARBURANT_FIELD, MARQUE_FIELD, PUISSANCE_FIELD, COULEUR_FIELD, IMMATRICULATION_FIELD, NAME_FIELD];
    handleSave(event){
        this.showToast();
    }
    showToast() {
        const event = new ShowToastEvent({
            title: 'Voiture ajoutée',
            message:
                'La '+ MARQUE_FIELD + ' a été ajouté avvec succès',
        });
        this.dispatchEvent(event);
    }
}