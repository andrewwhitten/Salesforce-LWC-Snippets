import BaseElement from 'c/demoButtonBase';

/**
 * Almost all of the Javascript to be used by this component is inherited from the demoButtonBase control.
 * We have added the 'title' variable to explicitally override the value of this variable in the parent. 
 */
export default class DemoButtonTriangle extends BaseElement {

    title = 'Triangle';

}