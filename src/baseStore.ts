import _ from './utils'


export default class BaseStore {
    private unique: number;
    static createStore(): BaseStore {
        const Store = this;
        return new Store();
    }
    constructor() {
        this.unique = _.uniqueId();
    }
    private collectState() {

    }
    private collectActions() {

    }
    private createActionTypes(actionName: string): string {
        return `${this.unique}-${actionName}`
    }
    private dispatch() {

    }
}
