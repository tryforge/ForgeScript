"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodCustomMessage",
    version: "1.2.0",
    description: "Returns the custom message used by automod on this detection",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.automod?.action.metadata.customMessage);
    },
});
//# sourceMappingURL=automodCustomMessage.js.map