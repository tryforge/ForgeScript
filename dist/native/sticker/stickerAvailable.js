"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$stickerAvailable",
    version: "1.4.0",
    description: "Returns whether a sticker is available",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to get availability of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Sticker
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [s]) {
        s ??= ctx.sticker;
        return this.success(s?.available);
    },
});
//# sourceMappingURL=stickerAvailable.js.map