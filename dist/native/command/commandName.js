"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$commandName",
    version: "1.0.3",
    description: "Returns the current command name",
    unwrap: true,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.runtime.command?.name ?? (ctx.obj && "commandName" in ctx.obj ? ctx.obj.commandName : undefined));
    },
});
//# sourceMappingURL=commandName.js.map