import { LightningElement } from 'lwc';

export default class DemoHarness extends LightningElement {

    message = "";

    // Set a message in the UI when an event is received
    onchange(event) {

        this.message = "Component clicked was: " + event.detail;
    }
}