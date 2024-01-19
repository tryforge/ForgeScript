"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeCommandManager = void 0;
const BaseCommandManager_1 = require("./BaseCommandManager");
const EventManager_1 = require("./EventManager");
class NativeCommandManager extends BaseCommandManager_1.BaseCommandManager {
    handlerName = EventManager_1.NativeEventName;
}
exports.NativeCommandManager = NativeCommandManager;
//# sourceMappingURL=NativeCommandManager.js.map