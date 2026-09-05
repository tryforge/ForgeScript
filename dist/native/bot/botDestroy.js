"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botDestroy",
    version: "1.0.0",
    aliases: [
        "$clientDestroy"
    ],
    description: "Destroys the discord.js client",
    unwrap: true,
    execute(ctx) {
        ctx.client.destroy();
        return this.success();
    },
});
//# sourceMappingURL=botDestroy.js.map