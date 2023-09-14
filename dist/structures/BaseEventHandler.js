"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEventHandler = void 0;
class BaseEventHandler {
    data;
    constructor(data) {
        this.data = data;
    }
    get listener() {
        return this.data.listener;
    }
    get description() {
        return this.data.description;
    }
    get name() {
        return this.data.name;
    }
    register(client) { }
}
exports.BaseEventHandler = BaseEventHandler;
//# sourceMappingURL=BaseEventHandler.js.map