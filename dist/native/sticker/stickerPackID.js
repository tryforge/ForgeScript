"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$stickerPackID",
    version: "1.4.0",
    description: "Returns a sticker's pack id",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to pull pack of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Sticker
        }
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [s]) {
        s ??= ctx.sticker;
        return this.success(s?.packId);
    },
});
//# sourceMappingURL=stickerPackID.js.map