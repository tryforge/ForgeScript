"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$color",
    version: "1.0.0",
    description: "Adds an embed color",
    unwrap: true,
    args: [
        {
            name: "color",
            description: "The color for the embed",
            required: true,
            enum: discord_js_1.Colors,
            type: structures_1.ArgType.String,
            rest: false
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: structures_1.ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [color, index]) {
        const col = (!isNaN(Number(color)) ? Number(color) : color.startsWith("#") ? color.slice(1) : color);
        ctx.container.embed((index ?? 0)).setColor(col);
        return structures_1.Return.success();
    },
});
//# sourceMappingURL=color.js.map