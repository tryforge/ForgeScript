"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setStickerDescription",
    version: "1.4.0",
    description: "Sets a sticker's description, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.Sticker
        },
        {
            name: "description",
            description: "The new description for the sticker",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [s, n]) {
        return this.success(!!(await s.edit({
            description: n,
            reason: ctx.reason
        }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setStickerDescription.js.map