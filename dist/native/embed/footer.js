"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$footer",
    version: "1.0.0",
    description: "Adds an embed footer",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text for the embed footer",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "icon",
            description: "The icon url for the embed footer",
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [text, iconURL, index]) {
        ctx.container.embed(index ?? 0).setFooter({
            text,
            iconURL: iconURL || undefined,
        });
        return this.success();
    },
});
//# sourceMappingURL=footer.js.map