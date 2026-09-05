"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isStringSelectMenu",
    version: "1.0.0",
    description: "Returns whether the context is a string select menu",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isStringSelectMenu()));
    },
});
//# sourceMappingURL=isStringSelectMenu.js.map