"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addField",
    version: "1.0.0",
    description: "Adds an embed field",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name for the field",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "value",
            description: "The value for the field",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "inline",
            description: "Whether this field will be inline",
            type: structures_1.ArgType.Boolean,
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
    execute(ctx, [name, value, inline, index]) {
        ctx.container.embed(index ?? 0).addFields({
            name,
            value,
            inline: inline || false,
        });
        return this.success();
    },
});
//# sourceMappingURL=addField.js.map