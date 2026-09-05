"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordEventHandler = void 0;
const BaseEventHandler_1 = require("../base/BaseEventHandler");
class DiscordEventHandler extends BaseEventHandler_1.BaseEventHandler {
    register(client) {
        client.on(this.name, this.listener.bind(client));
    }
}
exports.DiscordEventHandler = DiscordEventHandler;
//# sourceMappingURL=DiscordEventHandler.js.map