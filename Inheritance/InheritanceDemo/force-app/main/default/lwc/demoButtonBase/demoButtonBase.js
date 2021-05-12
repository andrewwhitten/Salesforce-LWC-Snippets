import { LightningElement } from 'lwc';

/**
 * The Javascript here will be inherited by the child components, unless explicitally overridden.
 * 'title' is given a value here, however the children can override it should they choose.
 */
export default class DemoButtonBase extends LightningElement {

    title = 'Base';

    // This method is inherited by all child components
    connectedCallback() {
        this.title = 'Title: ' + this.title;
    }

    // Send event when button clicked. This will also be used by components inheriting from this one.
    handleClick(event) {

        const createdEvent = new CustomEvent('buttonclicked', {
            bubbles: true,
            detail: this.title
        });

        this.dispatchEvent(createdEvent);
    }

}