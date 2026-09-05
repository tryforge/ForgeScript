"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isUserContextMenu",
    version: "2.7.0",
    description: "Returns whether the interaction is a user context menu",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isUserContextMenuCommand()));
    },
});
//# sourceMappingURL=isUserContextMenu.js.map