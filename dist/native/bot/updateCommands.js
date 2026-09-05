"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$updateCommands",
    version: "1.0.2",
    description: "Updates bot commands, also registers new ones",
    unwrap: false,
    execute(ctx) {
        ctx.client.commandManagers.forEach(x => x.refresh());
        return this.success();
    },
});
//# sourceMappingURL=updateCommands.js.map