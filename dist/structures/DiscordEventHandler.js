"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordEventHandler = void 0;
const BaseEventHandler_1 = require("./BaseEventHandler");
class DiscordEventHandler extends BaseEventHandler_1.BaseEventHandler {
    register(client) {
        client.on(this.name, this.listener.bind(client));
    }
}
exports.DiscordEventHandler = DiscordEventHandler;
//# sourceMappingURL=DiscordEventHandler.js.map